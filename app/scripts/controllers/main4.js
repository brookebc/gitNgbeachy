'use strict';

angular.module('gitNgbeachyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('geoCtrl', [ '$scope', 'geolocation', 'leafletEvents', '$http', function ($scope, geolocation, leafletEvents, $http) {
    
    angular.extend($scope, {
   		center : {
    		lat: 38.8833,
	    	lng: -77.0167,
        	zoom: 4
    	},
    	defaults: {
    		scrollWheelZoom: false
    	},
    	markers: {}
    });

    geolocation.getLocation().then(function(data){

    	$scope.center = {
    			lat: data.coords.latitude, 
    			lng: data.coords.longitude, 
    			zoom: 13
    			}
    		
    		
    	console.log($scope.center);

    		 });
    		
    	$scope.addMarkers = function() {
            angular.extend($scope, {
            	markers: {
                	charleston: {
                		lat: 32.907,
                		lng: -79.802,
                		message: "Chucktown"
                	},
                	iopbeach: {
                    	lat: 32.79639,
                    	lng: -79.765,
              			message: "Isle of Palms Beach"
                	},
                	user: {
                    	lat: $scope.center.lat,
                    	lng: $scope.center.lng,
              			message: "Here you are!"   
                	}
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

        $scope.getbeachdata = function(){
        $http.get("scripts/beachdata.geojson").success(function(data) {
        	$scope.beachdata = data;
			console.log($scope.beachdata);

			console.log($scope.beachdata.features.length);
			console.log($scope.beachdata.features[0].properties.title);
			// console.log($scope.beachdata.features[0].type);

			});
		};

		}]);
			// console.log(beachPoints);

	  	// var beachdata = data;
	  	// 	console.log(beachdata[0].type);

	  	// angular.extend($scope, {
    //     	  	geojson: {
    //     	  		'name': feature.properties.name,
    //     	  		'latlng': geometry.coordinates
    //     	  	}
    //     	  })

        // for ( var i = 0; i < $scope.beachdata.length; i++) {
        	 
        // 	};

        	 //  var beach = {
        	 // 	'name': beachPoints.properties.name
        	 //  };
        	
        
        	 // 	  console.log(beach.name);

        	 	// $('.addbeaches').on('click', function(){

        	 	// 	('.beacheshere').append(beachdata);
        	 	// });

       			// };
     
              // });

          
  



   


