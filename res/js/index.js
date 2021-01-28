$(function(){
    //渲染百度地图
    var map = $.drawMap({
        id:"mapContainer"
    })

    // 绘制店铺marker
    $.drawPoints({
        map:map,
        points:pointsData2
    })

    // alt加鼠标左键绘制多边形，单击修改多边形，双击删除多边形
    $.enableDraw({
        map:map,
        points:pointsData2
    })
    // 获取圈点信息的测试按钮
    // $(".get-points").click(function(){
    //     var result = $.getPolygonsInnerPoints({
    //         points:pointsData2
    //     })
    //     console.log(result)
    // })
    
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