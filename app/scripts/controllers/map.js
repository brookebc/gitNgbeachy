'use strict';
 
angular.module('gitNgbeachyApp')
  .controller('MapCtrl', [ '$scope', 'geolocation', 'leafletEvents', '$http', 'GeoJSON', 'leafletData', function ($scope, geolocation, leafletEvents, $http, GeoJSON, leafletData) {
    
    angular.extend($scope, {
   		center : {
    		lat: 38.8833,
	    	lng: -77.0167,
        	zoom: 4
    	},
    	defaults: {
    		scrollWheelZoom: false
    	},
    	markers: {},
    
    });

    // var layer = new L.StamenTileLayer("toner");
    // var leaflet = new L.Map("element_id", {
    // center: new L.LatLng(37.7, -122.4),
    // zoom: 12
    // });
    //     leaflet.addLayer(layer);
 
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
                    iconSize: [10, 10],
                    className: 'blue',
                    iconAnchor:  [5, 5]
                },
                red: {
                    type: 'div',
                    iconSize: [30, 30],
                    className: 'red',
                    iconAnchor:  [5, 5]
                }
               
            }

            angular.extend($scope, {
            	markers: {
                	charleston: {
                		lat: 32.907,
                		lng: -79.802,
                		message: "<button>Charleston</button>",
                		icon: icons.blue
                	},
                	iopbeach: {
                    	lat: 32.79639,
                    	lng: -79.765,
              			message: "<button>Isle of Palms Beach</button>",
              			icon: icons.blue
                	},
                	user: {
                    	lat: $scope.center.lat,
                    	lng: $scope.center.lng,
              			message: "Here you are!",
              			icon: icons.red   
                		}
                	},
                	geojson: {
	                	data: testData,
			                style: {
				                fillColor: "red",
			                    weight: 2,
			                    opacity: 1,
			                    color: 'white',
			                    dashArray: '3',
			                    fillOpacity: 0.4,
			                    icon: icons.blue
		                	},
           
            			}
               
            	});
        	};

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
 
  
		$scope.getWeather = function(){
 
		$http({method: 'GET', url: 'http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json'}).
    	success(function(data, status) {
    		// console.log('success!');
    		// console.log(data);
    		$scope.forecastdata = data;
    		// console.log($scope.forecastdata);
 
    		// console.log($scope.forecastdata.data.weather[0].hourly);
 
    		$scope.todaysweather = $scope.forecastdata.data.weather[0].hourly
    		
    		console.log($scope.todaysweather);
 
    		return $scope.todaysweather;
 
    	}).
    	error(function(data, status) {
    		console.log('there was an error getting the weather data' + error);
 
    });
 
	};		
 
}]);




          
  



   


