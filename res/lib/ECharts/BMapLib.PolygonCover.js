
/**
 * 判断多边形是否重叠
 * 依赖BMapLib.GeoUtils.js文件
 */
(function(BMapLib){
    var GeoUtils = BMapLib.GeoUtils;
    
    GeoUtils.isPolygonsOverlap = function(plyA, plyB) {
        return _isPolygonsIntersectant(plyA, plyB) || _isPointInPolygonBidirectional(plyA, plyB);
    }
    /**
     * 线段是否相交
     * seg: [{ lat: xxx, lng: xxx }, { lat: xxx, lng: xxx }]
     * */
    function _isSegmentsIntersectant(segA, segB) {
        var abc = (segA[0].lat - segB[0].lat) * (segA[1].lng - segB[0].lng) - (segA[0].lng - segB[0].lng) * (segA[1].lat - segB[0].lat);
        var abd = (segA[0].lat - segB[1].lat) * (segA[1].lng - segB[1].lng) - (segA[0].lng - segB[1].lng) * (segA[1].lat - segB[1].lat);
        if (abc * abd >= 0) {
            return false;
        }
    
        var cda = (segB[0].lat - segA[0].lat) * (segB[1].lng - segA[0].lng) - (segB[0].lng - segA[0].lng) * (segB[1].lat - segA[0].lat);
        var cdb = cda + abc - abd;
        return !(cda * cdb >= 0);
    }
    
    /**
     * 判断两多边形边界是否相交
     */
    function _isPolygonsIntersectant(plyA, plyB) {
        for (var i = 0, il = plyA.length; i < il; i++) {
            for (var j = 0, jl = plyB.length; j < jl; j++) {
                var segA = [plyA[i], plyA[i === il - 1 ? 0 : i + 1]];
                var segB = [plyB[j], plyB[j === jl - 1 ? 0 : j + 1]];
                if (_isSegmentsIntersectant(segA, segB)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    /**
     * 判断两多变形是否存在点与区域的包含关系(A的点在B的区域内或B的点在A的区域内)
     */
    function _isPointInPolygonBidirectional(plyA, plyB) {
        // const [pA, pB] = [[], []];
        var pA = []
        var pB = []

        // plyA.forEach((item) => {
        //     pA.push(new BMap.Point(item.lng, item.lat));
        // });
        
        for(var i=0;i<plyA.length;i++){
            var item = plyA[i]
            pA.push(new BMap.Point(item.lng, item.lat));
        }

        // plyB.forEach((item) => {
        //     pB.push(new BMap.Point(item.lng, item.lat));
        // });

        for(var i=0;i<plyB.length;i++){
            var item = plyB[i]
            pB.push(new BMap.Point(item.lng, item.lat));
        }

        // let [a, b] = [false, false];
        var a = false
        var b = false
        // a = pA.some(item => BMapLib.GeoUtils.isPointInPolygon(item, new BMap.Polygon(pB)));
        for(var i=0;i<pA.length;i++){
            var item = pA[i];
            if(BMapLib.GeoUtils.isPointInPolygon(item, new BMap.Polygon(pB))){
                a = true
                break
            }
        }

        if (!a) {
            // b = pB.some(item => BMapLib.GeoUtils.isPointInPolygon(item, new BMap.Polygon(pA)));
            for(var i=0;i<pB.length;i++){
                var item = pB[i];
                if(BMapLib.GeoUtils.isPointInPolygon(item, new BMap.Polygon(pA))){
                    b = true
                    break
                }
            }
        }
    
        return a || b;
    }
})(BMapLib)