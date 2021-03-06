function sampleCount() {
	// 基于准备好的dom，初始化echarts图表
	var myChart = echarts.init(document.getElementById('sampleCount'), 'macarons');
	// 指定图表的配置项和数据
	option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['样品数']
		},
		grid: {
			left: '2%',
			right: '7%',
			bottom: '25%',
			containLabel: true
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			axisLabel: {
				interval: 0,
				rotate: 45,
				margin: 2,
				textStyle: {
					color: "#222"
				}
			},
			data: ['盐雾试验机', '可程式恒温恒湿试验箱', '多光源对色灯箱', '耐黄老化试验机', '精密烘箱', '模拟汽车振动台', '冷热冲击试验箱', '高低温交变湿热试验机']
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '样品数',
			type: 'bar',
			data: [12, 40, 7, 23, 35, 142, 105, 76],
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}]
	};
	// 为echarts对象加载数据 
	myChart.setOption(option);
}

function verificationCount() {
	// 基于准备好的dom，初始化echarts图表
	var myChart = echarts.init(document.getElementById('verificationCount'), 'macarons');
	// 指定图表的配置项和数据
	option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['检定次数']
		},
		grid: {
			left: '2%',
			right: '7%',
			bottom: '25%',
			containLabel: true
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			axisLabel: {
				interval: 0,
				rotate: 45,
				margin: 2,
				textStyle: {
					color: "#222"
				}
			},
			data: ['盐雾试验机', '可程式恒温恒湿试验箱', '多光源对色灯箱', '耐黄老化试验机', '精密烘箱', '模拟汽车振动台', '冷热冲击试验箱', '高低温交变湿热试验机']
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '检定次数',
			type: 'bar',
			data: [37, 24, 58, 62, 11, 23, 5, 123],
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}]
	};
	// 为echarts对象加载数据 
	myChart.setOption(option);
}

function fitCount() {
	// 基于准备好的dom，初始化echarts图表
	var myChart = echarts.init(document.getElementById('fitCount'), 'macarons');
	// 指定图表的配置项和数据
	option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['维修次数']
		},
		grid: {
			left: '2%',
			right: '7%',
			bottom: '25%',
			containLabel: true
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			axisLabel: {
				interval: 0,
				rotate: 45,
				margin: 2,
				textStyle: {
					color: "#222"
				}
			},
			data: ['盐雾试验机', '可程式恒温恒湿试验箱', '多光源对色灯箱', '耐黄老化试验机', '精密烘箱', '模拟汽车振动台', '冷热冲击试验箱', '高低温交变湿热试验机']
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '维修次数',
			type: 'bar',
			data: [19, 12, 21, 34, 4, 11, 2, 23],
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}]
	};
	// 为echarts对象加载数据 
	myChart.setOption(option);
}

function changeCount() {
	// 基于准备好的dom，初始化echarts图表
	var myChart = echarts.init(document.getElementById('changeCount'), 'macarons');
	// 指定图表的配置项和数据
	option = {
		tooltip: {
			trigger: 'axis'
		},
		legend: {
			data: ['更换耗材次数']
		},
		grid: {
			left: '2%',
			right: '7%',
			bottom: '25%',
			containLabel: true
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: false
				},
				magicType: {
					show: true,
					type: ['line', 'bar']
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		calculable: true,
		xAxis: [{
			type: 'category',
			axisLabel: {
				interval: 0,
				rotate: 45,
				margin: 2,
				textStyle: {
					color: "#222"
				}
			},
			data: ['盐雾试验机', '可程式恒温恒湿试验箱', '多光源对色灯箱', '耐黄老化试验机', '精密烘箱', '模拟汽车振动台', '冷热冲击试验箱', '高低温交变湿热试验机']
		}],
		yAxis: [{
			type: 'value'
		}],
		series: [{
			name: '更换耗材次数',
			type: 'bar',
			data: [120, 65, 77, 21, 103, 89, 29, 46],
			markPoint: {
				data: [{
					type: 'max',
					name: '最大值'
				}, {
					type: 'min',
					name: '最小值'
				}]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}]
	};
	// 为echarts对象加载数据 
	myChart.setOption(option);
}