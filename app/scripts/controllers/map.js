'use strict';
 
angular.module('gitNgbeachyApp')
  .controller('MapCtrl', [ '$scope', 'geolocation', 'leafletEvents', '$http', 'GeoJSON', 'leafletData', function ($scope, geolocation, leafletEvents, $http, GeoJSON, leafletData) {
    
    angular.extend($scope, {
   		center: {
    		lat: 38.8833,
	    	lng: -77.0167,
        	zoom: 4
    	   },
        // layers: {
        //     baselayers: {
        //         osm: {
        //             name: 'OpenStreetMap',
        //             url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        //             type: 'xyz'
        //         },
        //         stamen: {
        //             name:'Stamen',
        //             url:'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
        //             type:'xyz',
        //             visitble: true,
        //             layerOptions:{
        //                 layers: [0],
        //                 attribution:'OpenStreetMap & Stamen Designs'
        //             }
        //         }
        //     }
        // },
    	defaults: {
    		scrollWheelZoom: false
    	},
    	markers: {},
    
    });

    // leafletData.setLayers(leafletLayers, stamen);
 
    // var layer = new L.StamenTileLayer("toner");
    // var leaflet = new L.Map("element_id", {
    // center: new L.LatLng(37.7, -122.4),
    // zoom: 12
    // });
        // leaflet.addLayer(stamen);
 
    geolocation.getLocation().then(function(data){
 
    	$scope.center = {
    			lat: data.coords.latitude, 
    			lng: data.coords.longitude, 
    			zoom: 14
    			}
    				
    	console.log($scope.center);
 
    });

	var testData = GeoJSON.get();
    	
    
    	$scope.addMarkers = function() {
    		
    		 var icons = {
                blue: {
                    type: 'div',
                    iconSize: [20, 20],
                    className: 'blue',
                    iconAnchor:  [5, 5]
                },
                red: {
                    type: 'div',
                    iconSize: [20, 20],
                    className: 'red',
                    iconAnchor:  [5, 5]
                }
               
            }

            angular.extend($scope, {
            	markers: {
                    "iopbeach": {
                        "lat": 32.79639,
                        "lng": -79.765,
                        "message": "<a class='btn btn-success' href='#/beach/1'>Isle of Palms Beach</a>",
                        "id":1
                    },
                    "sullivansisland": {
                        "lat": 32.76333,
                        "lng": -79.83778,
                        "message": "<a class='btn btn-success' href='#/beach/2'>Sullivans Island Beach</a>",
                        "id":2
                    },
                    "FollyBeach": {
                        "lat": 32.666152,
                        "lng": -79.939213,
                        "message": "<a class='btn btn-success' href='#/beach/3'>Folly Beach</a>",
                     
                         "id":3
                    },
                    "NorthMyrtleBeach": {
                        "lat": 33.822216,
                        "lng": -78.680974,
                        "message": "<button>North Myrtle Beach</button>",
                         "id":4
                    },
                    "EdistoBeach": {
                        "lat": 32.487613,
                        "lng": -80.324402,
                        "message": "<button>Edisto Beach</button>",
                        "id":5
                    },
                    "SurfsideBeach": {
                        "lat": 33.606111,
                        "lng": -78.973056,
                        "message": "<button>Surfside Beach</button>",
                        "id":6
                    },
                    "LitchfieldBeach": {
                        "lat": 33.4669,
                        "lng": -79.0997,
                        "message": "<button>Litchfield Beach</button>",
                        "id":7
                    },
                    "PawleysIslandBeach": {
                        "lat": 33.425833,
                        "lng": -79.125,
                        "message": "<button>Pawley's Island Beach</button>",
                        "id":8
                    },
                    "HuntingtonBeachStatePark": {
                        "lat": 33.5139,
                        "lng": -79.0611,
                        "message": "<a class='btn btn-success' href='#/beaches/huntington'>Huntington Beach State Park</button>",
                        "id":9
                    },
                    "user": {
                        "lat": $scope.center.lat,
                        "lng": $scope.center.lng,
                        "message": "Here you are!",
                        "icon": icons.red,
                        "id":10
                    }
                }
            });
        };
               
                	// iopbeach: {
                 //    	lat: 32.79639,
                 //    	lng: -79.765,
              			// message: "<button>Isle of Palms Beach</button>",
              			// icon: icons.blue
                	// },
                	// user: {
                 //    	lat: $scope.center.lat,
                 //    	lng: $scope.center.lng,
              			// message: "Here you are!",
              			// icon: icons.red   
                	// 	}
                	// }

               //  	geojson: {
	              //   	data: testData,
			            //     style: {
				           //      fillColor: "red",
			            //         weight: 2,
			            //         opacity: 1,
			            //         color: 'white',
			            //         dashArray: '3',
			            //         fillOpacity: 0.4,
			            //         icon: icons.blue
		             //    	},
           
            			// }
               
        

 		$scope.events = {
                markers: {
                    enable: leafletEvents.getAvailableMarkerEvents(),
                }
            };
 
        $scope.eventDetected = "No events yet...";
            var markerEvents = leafletEvents.getAvailableMarkerEvents();
            for (var k in markerEvents){
                var eventName = 'leafletDirectiveMarker.' + markerEvents[k];
                $scope.$on(eventName, function(event, args){
                    $scope.eventDetected = event.name;
                });
            }
 
        $scope.removeMarkers = function() {
                $scope.markers = {};
            } //end of user and markers on map
 
            <!-- end of markers and map data -->
 
  
	// 	$scope.getWeather = function(){
 
	// 	$http({method: 'GET', url: 'http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json'}).
 //    	success(function(data, status) {
 //    		// console.log('success!');
 //    		// console.log(data);
 //    		$scope.forecastdata = data;
 //    		// console.log($scope.forecastdata);
 
 //    		// console.log($scope.forecastdata.data.weather[0].hourly);
 
 //    		$scope.todaysweather = $scope.forecastdata.data.weather[0].hourly
    		
 //    		console.log($scope.todaysweather);
 
 //    		return $scope.todaysweather;
 
 //    	}).
 //    	error(function(data, status) {
 //    		console.log('there was an error getting the weather data' + error);
 
 //    });
 			
 
}]);




          
  



   


