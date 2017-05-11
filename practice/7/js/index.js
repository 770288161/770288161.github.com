/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-20 13:16:35
 * @version $Id$
 */
 $(document).ready(function(){


var map = new BMap.Map("myMap"); 
map.centerAndZoom(new BMap.Point(120.018479, 30.296057), 18);
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl({size:new BMap.Size(400,240),isOpen:true}));    
map.addControl(new BMap.MapTypeControl()); 
map.enableScrollWheelZoom();  



$("#hotel").click(function(){
$("#panel").show();
map.clearOverlays();
map.centerAndZoom(new BMap.Point(120.088993, 30.207036), 16);
var local = new BMap.LocalSearch(map, {
  pageCapacity: 8,
  renderOptions: {
    map: map,
    panel: "panel"
  }
});
local.searchNearby("宾馆", "西湖");
});



$("#transit").click(function(){
$("#panel").show();
map.clearOverlays();
map.centerAndZoom(new BMap.Point(120.020397, 30.294127), 16);
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "panel"
  }
});
transit.search("杭州师范大学仓前新校区", "宾馆");
});




$("#sign").click(function(){
	map.clearOverlays();
	map.centerAndZoom(new BMap.Point(120.018479, 30.296057), 18);
	$.each(data.buildings, function(index){	
		var point = new BMap.Point(data.buildings[index].lng, data.buildings[index].lat);
		var myIcon = new BMap.Icon("img/marker.png", new BMap.Size(40, 40));  
		var marker = new BMap.Marker(point,{icon: myIcon});
		map.addOverlay(marker);
		marker.addEventListener("click", function(){  
				sContent = 
				"<div id='scontent'>"+
					"<img class='scontent-img' src='img/building.jpg'>"+
					"<span class='scontent-buildingname'>"+ data.buildings[index].name +"</span>"+
					"<span class='scontent-star' ></span>"+
					"<span class='scontent-score'>"+ data.buildings[index].score +"/5分</span>"+
					"<span class='scontent-button'>查看详情</span>"+
				"</div>";				
				this.openInfoWindow(new BMap.InfoWindow(sContent));
		});
	})
});
});

var data = 
{
	"buildings":[
	{"name":"杭州师范大学博文苑1号楼",     "score":4.3, 	"lat":30.295296,"lng":120.017181,		"Comment":1234	}, 
	{"name":"杭州师范大学博文苑2号楼",     "score":4.4, 	"lat":30.294665, "lng":120.017316,		"Comment":1123	}, 
	{"name":"杭州师范大学博文苑3号楼",     "score":4.2, 	"lat":30.294782,"lng":120.016256,		"Comment":112	}, 
	{"name":"杭州师范大学博文苑4号楼",     "score":4.8, 	"lat":30.295031, "lng":120.016161,		"Comment":321	}, 	
	{"name":"杭州师范大学博文苑5号楼",     "score":4.0, 	"lat":30.29571, "lng":120.016471, 		"Comment":198	}, 
	{"name":"杭州师范大学博文苑6号楼",     "score":4.1,     "lat": 30.296276,"lng": 120.016605,		"Comment":134	}, 
	{"name":"杭州师范大学博文苑7号楼",     "score":4.7, 	"lat":30.296068, "lng":120.015295, 		"Comment":543	}, 
	{"name":"杭州师范大学博文苑8号楼",     "score":4.9, 	"lat": 30.296587,"lng": 120.014871,     "Comment":672	}, 
	{"name":"杭州师范大学博文苑9号楼",     "score":4.1, 	"lat":30.296544, "lng":120.01596,       "Comment":623	}, 
	{"name":"杭州师范大学博文苑10号楼",    "score":4.4, 	"lat":30.296824, "lng":120.015483, 		"Comment":674	}, 
	{"name":"杭州师范大学篮球场",          "score":4.2, 	"lat":30.296271,"lng":120.012304, 		"Comment":972	}, 
	{"name":"杭州师范大学体育场",          "score":4.1, 	"lat":30.295106, "lng":120.014293, 		"Comment":532	}, 
	{"name":"弘一大师·丰子恺研究中心",     "score":4 ,      "lat":30.297705, "lng":120.015277, 		"Comment":13	}, 
	{"name":"杭州师范大学清真食堂",        "score":4.3, 	"lat":30.293636, "lng":120.016741, 		"Comment":231	}, 
	{"name":"杭州师范大学2号食堂",         "score":4.7,     "lat":30.293737, "lng":120.017226, 		"Comment":874	}, 
	{"name":"杭州师范大学食堂(3,4,5号)",   "score":4.5, 	"lat":30.295273, "lng":120.01825, 		"Comment":721	}, 
	{"name":"杭州师范大学恕园1号楼",       "score":4.0, 	"lat":30.294992, "lng":120.020918, 		"Comment":87	}, 
	{"name":"杭州师范大学恕园2号楼",       "score":4.1, 	"lat":30.295702, "lng":120.020415,      "Comment":52	},
	{"name":"杭州师范大学恕园3号楼",       "score":4.2, 	"lat":30.294358, "lng":120.018811,   	"Comment":236	}, 
	{"name":"杭州师范大学恕园4号楼",       "score":4.0, 	"lat":30.293994, "lng":120.018084, 		"Comment":221	},
	{"name":"杭州师范大学恕园5号楼",       "score":4.3, 	"lat":30.293948, "lng":120.017437, 		"Comment":23	},
	{"name":"杭州师范大学恕园6号楼",       "score":4.1, 	"lat":30.293706, "lng":120.016768, 		"Comment":52	},
	{"name":"杭州师范大学恕园7号楼",       "score":4.8, 	"lat":30.295257, "lng":120.019023, 		"Comment":923	},
	{"name":"杭州师范大学恕园8号楼",       "score":4.2, 	"lat":30.295055, "lng":120.018313, 		"Comment":522	},
	{"name":"杭州师范大学恕园9号楼",       "score":4.2, 	"lat":30.296789, "lng":120.020595, 		"Comment":23	},
	{"name":"杭州师范大学恕园10号楼",      "score":4.1, 	"lat":30.296961, "lng":120.020433, 		"Comment":512	},
	{"name":"杭州师范大学恕园11号楼",      "score":4.7, 	"lat":30.296403, "lng":120.019813, 		"Comment":728	},
	{"name":"杭州师范大学恕园12号楼",      "score":3.9, 	"lat":30.296793, "lng":120.019827,  	"Comment":55	},
	{"name":"杭州师范大学恕园13号楼",      "score":4.5, 	"lat":30.296481, "lng":120.019081, 		"Comment":67	},
	{"name":"杭州师范大学恕园14号楼",      "score":4.0, 	"lat":30.296668, "lng":120.019337,		"Comment":21	},
	{"name":"杭州师范大学恕园15号楼",      "score":4.3, 	"lat":30.297163, "lng":120.02081, 		"Comment":58	},
	{"name":"杭州师范大学恕园16号楼",      "score":4.1, 	"lat":30.297385, "lng":120.02059, 		"Comment":75	},
	{"name":"杭州师范大学恕园17号楼",      "score":4.2, 	"lat":30.297097, "lng":120.019728, 		"Comment":43	},
	{"name":"杭州师范大学恕园18号楼",      "score":4.8, 	"lat":30.296423, "lng":120.018093, 		"Comment":96	},
	{"name":"杭州师范大学恕园19号楼",      "score":4.7, 	"lat":30.296676, "lng":120.01772, 		"Comment":190	},
	{"name":"杭州师范大学恕园20号楼",      "score":4.2, 	"lat":30.297756, "lng":120.020101, 		"Comment":20	},
	{"name":"杭州师范大学恕园21号楼",      "score":4.1, 	"lat":30.297393, "lng":120.019548, 		"Comment":82	},
	{"name":"杭州师范大学恕园22号楼",      "score":4.5, 	"lat":30.297592, "lng":120.019167, 		"Comment":472	},
	{"name":"杭州师范大学恕园23号楼",      "score":4.6, 	"lat":30.297682, "lng":120.018565, 		"Comment":396	},
	{"name":"杭州师范大学恕园24号楼",      "score":4.4, 	"lat":30.296883, "lng":120.017496,  	"Comment":653	},
	{"name":"杭州师范大学恕园25号楼",      "score":4.0, 	"lat":30.297093, "lng":120.017087, 		"Comment":84	},
	{"name":"杭州师范大学恕园26号楼",      "score":4.4, 	"lat":30.297167, "lng":120.017491,  	"Comment":23	},
	{"name":"杭州师范大学恕园27号楼",      "score":4.9, 	"lat":30.297943, "lng":120.020352, 		"Comment":63	},
	{"name":"杭州师范大学恕园28号楼",      "score":4.0, 	"lat":30.298013, "lng":120.019777, 		"Comment":96	},
	{"name":"杭州师范大学恕园29号楼",      "score":4.7, 	"lat":30.297908, "lng":120.01931, 		"Comment":99	},
	{"name":"杭州师范大学恕园30号楼",      "score":4.1, 	"lat":30.297962, "lng":120.018376, 		"Comment":92	},
	{"name":"杭州师范大学恕园31号楼",      "score":4.0, 	"lat":30.298188, "lng":120.018178, 		"Comment":18	},
	{"name":"杭州师范大学恕园32号楼",      "score":4.2, 	"lat":30.297701, "lng":120.018012, 		"Comment":12	},
	{"name":"杭州师范大学恕园33号楼",      "score":4.1, 	"lat":30.297385, "lng":120.01733, 		"Comment":87	},
	{"name":"杭州师范大学恕园34号楼",      "score":4.4, 	"lat":30.298075, "lng":120.017913, 		"Comment":74	},
	{"name":"杭州师范大学恕园35号楼",      "score":4.5, 	"lat":30.297978, "lng":120.017496, 		"Comment":704	},
	{"name":"杭州师范大学恕园36号楼",      "score":4.0, 	"lat":30.297736, "lng":120.017051, 		"Comment":82	},
	{"name":"杭州师范大学恕园37号楼",      "score":4.0, 	"lat":30.297834, "lng":120.017123, 		"Comment":87	},
	{"name":"杭州师范大学恕园38号楼",      "score":4.0, 	"lat":30.297222, "lng":120.014024, 		"Comment":8	    },
	{"name":"杭州师范大学图书馆",          "score":4.7, 	"lat":30.298715, "lng":120.022198, 		"Comment":999	}]
};