/*
    所有坐标点都以"123.473107,41.728853"字符串形式存在
*/
(function($){
    //地图对象
    var MAPOBJECT = null;

    //已经画好的图形
    var POLYGONLIST = [];

    //地图店铺数据
    var STOREMARKERS = [];

    // 弹窗元素
    var $windowInfo = $("#windowInfo");

    //标记是否是编辑状态下的多边形
    var isEditing = false;
    $.extend({
        // 绘制百度地图
        drawMap:function(options){
            var defs = {
                id:"" //绘制地图元素id
            }
            var opts = $.extend({},defs,options);
            var map = new BMap.Map(opts.id,{
                enableMapClick:false
            }); 
            map.centerAndZoom(new BMap.Point(123.474257,41.718946), 12); // 初始化地图,设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
            map.disableDoubleClickZoom();
            MAPOBJECT = map;
            return map;
        },
        // 开启地图绘制图形功能
        enableDraw:function(options){
            var defs = {
                isCover:function(){}
            }

            var opts = $.extend({},defs,options);
            var points = []; //点击的点坐标
            var curDrawedShape = null; //当前绘制的图形
            
            MAPOBJECT.addEventListener("mousemove",function(e){
                if(!isEditing) return false;
                if(points.length === 0) return false;
                points.push(e.point);
                MAPOBJECT.removeOverlay(curDrawedShape);
                curDrawedShape = $.drawPolygon({
                    points:points
                })
                points.pop();
            })
            $(document).keydown(function(e){
                if(e.keyCode === 18){//点击alt键，绘制多边形
                    isEditing = true;
                    MAPOBJECT.setDefaultCursor("crosshair");
                    MAPOBJECT.addEventListener('click', drawPolygon);
                }
            })
            
            $(document).keyup(function(e){
                if(e.keyCode === 18){//点击alt键，结束绘制多边形
                    isEditing = false;
                    MAPOBJECT.removeEventListener("click",drawPolygon);
                    MAPOBJECT.setDefaultCursor("pointer");
                    if(curDrawedShape === null) return false;
                    MAPOBJECT.removeOverlay(curDrawedShape);
                    if(points.length<3){
                        curDrawedShape = null;
                        points = [];
                        return false;
                    }

                    $.drawCustomPolygon({
                        id:new Date().getTime(),
                        name:"",
                        points:points,
                        isCover:function(){
                            opts.isCover();
                        }
                    })
                    
                    // 重置图形和图形连接点
                    curDrawedShape = null;
                    points = [];
                }
            })

            // 绘制多边形动作持续时
            function drawPolygon(e){
                points.push(e.point);
                // console.log(points);
                // console.log(POLYGONLIST)
                var isPolygonCover = $.isPolygonCover({
                    points:points
                })
                if(isPolygonCover){
                    points.pop();
                    opts.isCover();
                }else{
                    MAPOBJECT.removeOverlay(curDrawedShape);
                    curDrawedShape = $.drawPolygon({
                        points:points
                    })
                }
            }
        },

        // 判断当前图形是否与其他图形有重叠
        isPolygonCover:function(options){
            var defs = {
                id:null,
                points:null
            }

            var opts = $.extend({},defs,options);
            var isCover = false;
            // console.log(opts)
            // console.log(POLYGONLIST)
            for(var i=0;i<POLYGONLIST.length;i++){
                var polygon = POLYGONLIST[i];
                if(opts.id === polygon.id){
                    continue
                }
                var points = polygon.getPath();
                var flag = BMapLib.GeoUtils.isPolygonsOverlap(opts.points,points);
                // console.log(flag)
                if(flag){
                    isCover = true;
                    break;
                }
            }

            return isCover;
        },

        // 根据多边形数据绘制多边形，并添加详情图标及相关事件
        drawCustomPolygon:function(options){
            var defs = {
                id:"",
                name:"",
                points:[],
                isCover:function(){}
            }
            var opts = $.extend({},defs,options);
            var shapeDetailMarker
            var oldPolygon = null //存放修改前的多边形对象
            var curDrawedShape = $.drawPolygon({
                points:opts.points
            })
            curDrawedShape.id = opts.id||new Date().getTime();
            curDrawedShape.name = opts.name;
            curDrawedShape.editStatus = false;
            // 点击多边形进入编辑状态
            curDrawedShape.addEventListener("click",function(e){
                // console.log(this.curShapeName)
                // console.log(e.target)
                if(isEditing) return false;
                if(this.editStatus){//处于编辑状态，切换到不可编辑状态
                    this.disableEditing();
                    oldPolygon = null
                    this.editStatus = false;
                }else{//处于不可编辑状态，切换到可编辑状态
                    this.enableEditing();
                    oldPolygon = $.copyPolygon(e.target);
                    this.editStatus = true;
                }
            })
            // 双击多边形删除
            curDrawedShape.addEventListener("dblclick",function(e){
                $.removeFromPolygonList(e.target)
                MAPOBJECT.removeOverlay(shapeDetailMarker);
            })
            // 编辑多边形事件
            curDrawedShape.addEventListener("lineupdate",function(e){
                // console.log(e.target) //polygon对象
                var newPolygon = e.target
                // console.log(POLYGONLIST)
                // console.log(oldPolygon)
                // console.log(newPolygon)
                var isCover = $.isPolygonCover({
                    id:newPolygon.id,
                    points:newPolygon.getPath()
                })
                // console.log(isCover)
                if(isCover){
                    //如果编辑时发生覆盖则取消编辑
                    opts.isCover()
                    $.removeFromPolygonList(newPolygon);
                    $.drawCustomPolygon({
                        id:oldPolygon.id,
                        name:oldPolygon.name,
                        points:oldPolygon.getPath(),
                        isCover:function(){
                            opts.isCover()
                        }
                    })
                }else{
                    //编辑成功则更新图形
                    oldPolygon = $.copyPolygon(newPolygon);
                }
            })
            // 绘制详情marker
            // console.log(curDrawedShape.getPath())
            var shapeDetailIcon = new BMap.Icon("./res/img/shape-detail.png", new BMap.Size(16, 16));
            var detailPositionPoint = opts.points[0];
            shapeDetailMarker = new BMap.Marker(detailPositionPoint, {
                icon: shapeDetailIcon
            });
            shapeDetailMarker.polygonId = curDrawedShape.id
            shapeDetailMarker.addEventListener("mouseover",function(e){
                var pixel = e.pixel
                var polygon = $.getPolygonById(this.polygonId)
                var innerPoints = $.getPolygonItemInnerPoints({
                    polygon:polygon
                })
                $.renderWindowInfo({
                    innerPoints:innerPoints
                })
                $windowInfo.css({top:pixel.y+10,left:pixel.x+10}).show()
            })
            shapeDetailMarker.addEventListener("mouseout",function(e){
                // console.log(e.target) //polygon对象
                $windowInfo.hide()
            })
            // 将标注添加到地图
            MAPOBJECT.addOverlay(shapeDetailMarker);
            POLYGONLIST.push(curDrawedShape);
            // console.log(POLYGONLIST)
            return curDrawedShape;
        },
        copyPolygon:function(polygon){
            var newPolygon = null;
            newPolygon = $.newPolygon({
                points:polygon.getPath()
            })
            newPolygon.id = polygon.id;
            newPolygon.name = polygon.name;
            return newPolygon;
        },
        // 在地图上绘制点
        drawStorePoints:function(options){
            var defs = {
                points:[]
            }
            $.clearStorePoints();
            var opts = $.extend({},defs,options);
            var myIcon = new BMap.Icon("./res/img/icon-store.png", new BMap.Size(16, 16));
            $.each(opts.points,function(index,value){
                var point = new BMap.Point(value.point.lng,value.point.lat)
                var marker = new BMap.Marker(point, {
                    icon: myIcon
                });
                marker.detail = value
                // 将标注添加到地图
                MAPOBJECT.addOverlay(marker);
                STOREMARKERS.push(marker);
            })
        },
        // 清除之前画的店铺
        clearStorePoints:function(){
            if(STOREMARKERS.length === 0) return false;
            $.each(STOREMARKERS,function(index,value){
                MAPOBJECT.removeOverlay(value)
            })
            STOREMARKERS = [];
        },
        // 获取多边形对象
        newPolygon:function(options){
            var defs = {
                points:[] //多边形个点point对象{lng:123.473107,lat:41.728853}
            }
            var opts = $.extend({},defs,options);
            var figureStyle = $.getFigureStyle();
            var polygon = new BMap.Polygon(opts.points, figureStyle);
            return polygon
        },
        // 在地图上绘制多边形
        drawPolygon:function(options){
            var defs = {
                points:[] //多边形个点point对象{lng:123.473107,lat:41.728853}
            }
            var opts = $.extend({},defs,options);
            var polygon = $.newPolygon({
                points:opts.points
            })
            MAPOBJECT.addOverlay(polygon);
            return polygon;
        },
        // 渲染多边形信息
        renderWindowInfo:function(options){
            var defs = {
                innerPoints:[]
            }

            var opts = $.extend({},defs,options);
            var $li = $windowInfo.find("li");
            var num = 0; //客户数
            var total = 0; //总订货量
            var avg = 0; //户均订货量
            $.each(opts.innerPoints,function(index,value){
                num++;
                total += Number(value.orderQuantity);
            })
            if(num){
                avg = (total/num).toFixed(2);
            }else{
                avg = 0;
            }
            
            $li.eq(0).find("span").text(num+"户")
            $li.eq(1).find("span").text(total)
            $li.eq(2).find("span").text(avg)
        },
        // 删除绘制的图形
        removeFromPolygonList:function(shape){
            var shapeIndex;
            $.each(POLYGONLIST,function(index,value){
                if(value.id === shape.id){
                    shapeIndex = index;
                    return false;
                }
            })
            POLYGONLIST.splice(shapeIndex,1);
            MAPOBJECT.removeOverlay(shape);
        },
        // 当图形编辑之后修改mapDrawedList的数据
        updatePolygonList:function(newShape){
            var shapeIndex;
            $.each(POLYGONLIST,function(index,polygon){
                if(polygon.id === newShape.id){
                    shapeIndex = index;
                    return false;
                }
            })
            POLYGONLIST.splice(shapeIndex,1,newShape);
        },
        // 通过名字获取图形对象
        getPolygonById:function(id){
            var result = null;
            $.each(POLYGONLIST,function(index,polygon){
                if(polygon.id === id){
                    result = polygon;
                    return false;
                }
            })
            return result
        },
        // 获取地图中被圈的点数据
        getPolygonsInnerPoints:function(){
            var result = []
            $.each(POLYGONLIST,function(index,polygon){
                var innerPoints = $.getPolygonItemInnerPoints({
                    polygon:polygon
                })
                
                result.push({
                    name:polygon.name,
                    points:innerPoints
                })
            })
            return result;
        },
        getPolygonItemInnerPoints:function(options){
            var defs = {
                polygon:null
            }
            var opts = $.extend({},defs,options)
            var result = [];
            $.each(STOREMARKERS,function(ind,val){
                var point = val.getPosition();
                // 判断是否在范围内需要使用new BMap.Point
                var isInner = BMapLib.GeoUtils.isPointInPolygon(point,opts.polygon)
                if(isInner){
                    result.push(val.detail)
                }
            })
            return result;
        },
        // 将STOREMARKERS中的marker对象转成Point对象
        transformMarkersToPoints:function(){
            var points = [];
            $.each(STOREMARKERS,function(index,value){
                var point = value.getPosition();
                points.push(point)
            })
            return points;
        },
        // 图形样式配置
        getFigureStyle:function(customStyle){
            var defaultStyle = {
                strokeColor: 'blue',
                strokeWeight: 2,
                strokeOpacity: 0.5
            }
            var result = $.extend({},defaultStyle,customStyle);
            return result;
        }
    })
})(jQuery)