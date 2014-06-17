'use strict';

angular.module('gitNgbeachyApp')
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

			return $scope.beachdata;

			});
		};

		}]);


          
  



   

