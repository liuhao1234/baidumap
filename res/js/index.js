$(function(){
    //渲染百度地图
    var map = $.drawMap({
        id:"mapContainer"
    })

    // 绘制店铺marker
    $.drawStorePoints({
        map:map,
        points:pointsData2
    })

    // 绘制已存在的图形
    $.each(polygons,function(index,value){
        // console.log(value)
        var points = []
        $.each(value.points,function(index,value){
            points.push(new BMap.Point(value.lng,value.lat))
        })
        $.drawCustomPolygon({
            id:value.id,
            name:value.name,
            points:points,
            isCover:function(){
                console.log("多边形重叠了")
            }
        })
    })

    // alt加鼠标左键绘制多边形，单击修改多边形，双击删除多边形
    $.enableDraw({
        isCover:function(){
            console.log("多边形重叠了")
        }
    })
    $(".get-points").click(function(){
        // $.clearStorePoints({
        //     map:map
        // });
        var data = $.getPolygonsInnerPoints();
        console.log(data)
    })
    // var bounds = new BMap.Polygon([new BMap.Point(123.474257,41.718946)]).getBounds();
    
    // var p1 = $.drawPolygon({
    //     map:map,
    //     points:[
    //         {lng:123.473107,lat:41.728853},
    //         {lng:123.539797,lat:41.709469},
    //         {lng:123.45471,lat:41.63705}
    //     ]
    // })

    // var p2 = $.drawPolygon({
    //     map:map,
    //     points:[
    //         {lng:123.470808,lat:41.684907},
    //         {lng:123.401243,lat:41.74048},
    //         {lng:123.346051,lat:41.707315}
    //     ]
    // })

    // var p3 = $.drawPolygon({
    //     map:map,
    //     points:[
    //         {lng:123.401818,lat:41.618069},
    //         {lng:123.401243,lat:41.74048},
    //         {lng:123.346051,lat:41.707315}
    //     ]
    // })
    // var isCover = BMapLib.GeoUtils.isPolygonsOverlap(p1.getPath(),p3.getPath())
    // console.log(p1.getPath())
    // console.log(p3.getPath())
    // console.log(isCover)
    // 初始化日期控件
    $('#startDate').jeDate({
        isinitVal:true,
        format: 'YYYY-MM',
        choosefun:function(ele,val){}
    });
    $('#endDate').jeDate({
        isinitVal:true,
        format: 'YYYY-MM',
        choosefun:function(ele,val){}
    });
})