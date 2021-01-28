/*
    所有坐标点都以"123.473107,41.728853"字符串形式存在
*/
(function($){
    $.extend({
        mapDrawedList:[],//已经画好的图形
        // 绘制百度地图
        drawMap:function(options){
            var defs = {
                id:""
            }
            var opts = $.extend({},defs,options);
            var map = new BMap.Map(opts.id,{
                enableMapClick:false
            }); 
            map.centerAndZoom(new BMap.Point(123.474257,41.718946), 12); // 初始化地图,设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
            map.disableDoubleClickZoom();
            return map;
        },
        // 开启地图绘制图形功能
        enableDraw:function(options){
            var defs = {
                map:null,
                points:[]
            }
            var opts = $.extend({},defs,options);
            var points = []; //点击的点坐标
            var curDrawedShape = null; //当前绘制的图形
            var $windowInfo = $("#windowInfo");
            var isEditing = false;
            opts.map.addEventListener("mousemove",function(e){
                if(!isEditing) return false;
                if(points.length === 0) return false;
                points.push(e.point)
                opts.map.removeOverlay(curDrawedShape);
                curDrawedShape = $.drawPolygon({
                    map:opts.map,
                    points:points
                })
                points.pop()
            })
            $(document).keydown(function(e){
                if(e.keyCode === 18){//点击alt键，绘制多边形
                    isEditing = true;
                    opts.map.setDefaultCursor("crosshair");
                    opts.map.addEventListener('click', drawPolygon);
                }
                if(e.keyCode === 17){//点击ctrl
                    
                }
                if(e.keyCode === 16){//点击shift
                    
                }
            })
            
            $(document).keyup(function(e){
                if(e.keyCode === 18){//点击alt键，结束绘制多边形
                    isEditing = false;
                    opts.map.removeEventListener("click",drawPolygon);
                    opts.map.setDefaultCursor("pointer");
                    if(curDrawedShape === null) return false;
                    opts.map.removeOverlay(curDrawedShape);
                    if(points.length<3){
                        curDrawedShape = null;
                        points = [];
                        return false;
                    }
                    curDrawedShape = $.drawPolygon({
                        map:opts.map,
                        points:points
                    })
                    curDrawedShape.curShapeName = new Date().getTime();
                    curDrawedShape.editStatus = false;
                    $.mapDrawedList.push(curDrawedShape);
                    // 点击多边形进入编辑状态
                    curDrawedShape.addEventListener("click",function(){
                        // console.log(this.curShapeName)
                        if(this.editStatus){
                            this.disableEditing();
                            this.editStatus = false;
                        }else{
                            this.enableEditing();
                            this.editStatus = true;
                        }
                    })
                    // 双击多边形删除
                    curDrawedShape.addEventListener("dblclick",function(e){
                        $.removeFromMapDrawedList(opts.map,e.target)
                        opts.map.removeOverlay(shapeDetailMarker);
                    })
                    // 编辑多边形事件
                    curDrawedShape.addEventListener("lineupdate",function(e){
                        // console.log(e.target) //polygon对象
                        $.updateMapDrawedList(e.target)
                    })
                    // 绘制详情marker
                    // console.log(curDrawedShape.getPath())
                    var shapeDetailIcon = new BMap.Icon("./res/img/shape-detail.png", new BMap.Size(16, 16));
                    var detailPositionPoint = curDrawedShape.getPath()[0];
                    var shapeDetailMarker = new BMap.Marker(detailPositionPoint, {
                        icon: shapeDetailIcon
                    });
                    shapeDetailMarker.polygonName = curDrawedShape.curShapeName
                    shapeDetailMarker.addEventListener("mouseover",function(e){
                        var pixel = e.pixel
                        var polygon = $.getPolygonByName(this.polygonName)
                        var innerPoints = $.getPolygonItemInnerPoints({
                            polygon:polygon,
                            points:opts.points
                        })
                        $.renderWindowInfo({
                            map:opts.map,
                            polygon:polygon,
                            innerPoints:innerPoints
                        })
                        $windowInfo.css({top:pixel.y+10,left:pixel.x+10}).show()
                    })
                    shapeDetailMarker.addEventListener("mouseout",function(e){
                        // console.log(e.target) //polygon对象
                        $windowInfo.hide()
                    })
                    // 将标注添加到地图
                    opts.map.addOverlay(shapeDetailMarker);
                    // 重置图形和图形连接点
                    curDrawedShape = null;
                    points = [];
                }
            })

            function drawPolygon(e){
                points.push(e.point);
                opts.map.removeOverlay(curDrawedShape);
                curDrawedShape = $.drawPolygon({
                    map:opts.map,
                    points:points
                })
                opts.map.closeInfoWindow();
            }
        },
        // 在地图上绘制点
        drawPoints:function(options){
            var defs = {
                map:"",
                points:[]
            }

            var opts = $.extend({},defs,options);
            var myIcon = new BMap.Icon("./res/img/icon-store.png", new BMap.Size(16, 16));
            $.each(opts.points,function(index,value){
                var marker = new BMap.Marker(value.point, {
                    icon: myIcon
                });
                // 将标注添加到地图
                opts.map.addOverlay(marker);
            })
        },
        // 在地图上绘制圆
        drawCircle:function(options){
            var defs = {
                map:"",
                center:"", //圆心
                radius:0 //半径
            }
            var opts = $.extend({},defs,options);
            var figureStyle = $.getFigureStyle();
            var circle = new BMap.Circle(opts.center, opts.radius, figureStyle);
            opts.map.addOverlay(circle);
            return circle;
        },
        // 在地图上绘制多边形
        drawPolygon:function(options){
            var defs = {
                map:"",
                points:[]
            }
            var opts = $.extend({},defs,options);
            var figureStyle = $.getFigureStyle();
            var polygon = new BMap.Polygon(opts.points, figureStyle);
            opts.map.addOverlay(polygon);
            return polygon;
        },
        // 渲染多边形信息
        renderWindowInfo:function(options){
            var defs = {
                map:null,
                polygon:null,
                innerPoints:[]
            }

            var opts = $.extend({},defs,options);
            var $windowInfo = $("#windowInfo");
            var $li = $windowInfo.find("li");
            var num = 0; //客户数
            var total = 0; //总订货量
            var avg = 0; //户均订货量
            $.each(opts.innerPoints,function(index,value){
                num++;
                total += Number(value.orderQuantity);
            })
            avg = (total/num).toFixed(2);
            $li.eq(0).find("span").text(num+"户")
            $li.eq(1).find("span").text(total)
            $li.eq(2).find("span").text(avg)
        },
        // 删除绘制的图形
        removeFromMapDrawedList:function(map,shape){
            var shapeIndex;
            $.each($.mapDrawedList,function(index,value){
                if(value.curShapeName === shape.curShapeName){
                    shapeIndex = index;
                    return false;
                }
            })
            $.mapDrawedList.splice(shapeIndex,1);
            map.removeOverlay(shape);
        },
        // 当图形编辑之后修改mapDrawedList的数据
        updateMapDrawedList:function(newShape){
            var shapeIndex;
            $.each($.mapDrawedList,function(index,polygon){
                if(polygon.curShapeName === newShape.curShapeName){
                    shapeIndex = index;
                    return false;
                }
            })
            $.mapDrawedList.splice(shapeIndex,1,newShape);
        },
        // 通过名字获取图形对象
        getPolygonByName:function(name){
            var result = null;
            $.each($.mapDrawedList,function(index,polygon){
                if(polygon.curShapeName === name){
                    result = polygon;
                    return false;
                }
            })
            return result
        },
        // 获取地图中被圈的点数据
        getPolygonsInnerPoints:function(options){
            var defs = {
                points:[]
            }
            
            var opts = $.extend({},defs,options)
            var result = []
            
            $.each($.mapDrawedList,function(index,polygon){
                var innerPoints = $.getPolygonItemInnerPoints({
                    polygon:polygon,
                    points:opts.points
                })
                
                result.push({
                    name:polygon.curShapeName,
                    points:innerPoints
                })
            })

            return result;
        },
        getPolygonItemInnerPoints:function(options){
            var defs = {
                polygon:null,
                points:[]
            }
            var opts = $.extend({},defs,options)
            var result = [];
            $.each(opts.points,function(ind,val){
                var point = new BMap.Point(val.point.lng, val.point.lat)
                // 判断是否在范围内需要使用new BMap.Point
                var isInner = BMapLib.GeoUtils.isPointInPolygon(point,opts.polygon)
                if(isInner){
                    result.push(val)
                }
            })
            return result;
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