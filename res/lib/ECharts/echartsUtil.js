var fontSize = 12;
var fontWeight = 'bold';
var EChartUtil = {
	//折柱混合      divObject:div对象，title：统计图标题，legendData：统计图统计的类型,data1饼图数据
	addMixLineBar : function(obj) {
		var divObject = obj.divObject;
		var title = obj.title;
		var legends = obj.legends;
		var data1 = obj.data1;
		var data2 = obj.data2;
		var leftY = obj.yAxis[0].leftY;
		var rightY = obj.yAxis[0].rightY;
		var leftName = yLeftName(obj.yAxis[0].leftName);
		var rightName = obj.yAxis[0].rightName;
		// 基于准备好的dom，初始化echarts图表
		var dom = document.getElementById(divObject);
		var myChart = echarts.getInstanceByDom(dom);
		if( myChart ){
			myChart.clear();
		}else{
			myChart = echarts.init(dom);
		}
		// option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		function yLeftName(str){
			var arr = str.split("/");
			var newStr='';
			$.each(arr,function(i,v){
				newStr += v.substring(0,2)+'/'; 
			})
			newStr = newStr.slice(0,-1);
			return newStr + "(金额)";
		}
		function getchart() {
			var option = {
				title : {
					text : title,
					left: "center",
					top : 'top',
					textStyle : {
						color : "#333",
						fontWeight : "normal",
						fontSize : "16"
					}
				},
			    tooltip: {
			        trigger: 'axis',
			        textStyle : {
						fontSize : fontSize,
						fontWeight : fontWeight
					},
			        axisPointer: {
			            type: 'cross',
			            crossStyle: {
			                color: '#999'
			            }
			        }
			    },
			   /* toolbox: {
			        feature: {
			            dataView: {show: true, readOnly: false},
			            magicType: {show: true, type: ['line', 'bar']},
			            restore: {show: true},
			            saveAsImage: {show: true}
			        }
			    },*/
			    legend: {
			        data:legends,
			        top : "22"
			    },
			    xAxis: [
			        {
			            type: 'category',
			            data: data1,
			            axisPointer: {
			                type: 'shadow'
			            }
			        }
			    ],
			    yAxis: [
			        {
			            name:leftName,
			        	type: 'value',
			            splitLine:{show:false},
			            axisLabel: {
			                formatter: leftY
			            }
			        },
			        {	
			        	name:rightName,
			        	type: 'value',
			            splitLine:{show:false},
			            axisLabel: {
			                formatter: rightY
			            }
			        }
			    ],
			    series: data2
			};
			
			return option;
		}
	},
	//同心饼图  divObject:div对象，title：统计图标题，legendData：统计图统计的类型,data1饼图数据
	addPie : function(obj) {
		var divObject = obj.divObject;
		var title = obj.title;
		var legends = obj.legends;
		var data1 = obj.data1;
		// 基于准备好的dom，初始化echarts图表
		var dom = document.getElementById(divObject);
		var myChart = echarts.getInstanceByDom(dom);
		if( myChart ){
			myChart.clear();
		}else{
			myChart = echarts.init(dom);
		}
		// option数据
		var option = getchart();
		// 为echarts对象加载数据
		myChart.setOption(option);
		function getchart() {
			var option = {
				title : {
					text : title,
					left: "center",
					top : 'top',
					textStyle : {
						color : "#333",
						fontWeight : "normal",
						fontSize : "16"
					}
				},
				tooltip : {
					trigger : 'item',
					formatter : "{a} <br/>{b}: {c} ({d}%)",
					textStyle : {
						fontSize : fontSize,
						fontWeight : fontWeight
					}
				},
				legend : {
					orient : 'vertical',
					x : 'left',
					data : legends
				},
				series : [ {
					name : title,
					type : 'pie',
					radius : [ '50%', '70%' ],
					avoidLabelOverlap : false,
					label : {
						normal : {
							show : true,
							formatter : '{b}: {d}%'
						},
						emphasis : {
							show : true,
							textStyle : {
								fontSize : fontSize,
								fontWeight : fontWeight
							}
						}
					},
					labelLine : {
						normal : {
							show : true,
						}
					},
					data : data1
				} ]
			};
			return option;
		}
	}

};
