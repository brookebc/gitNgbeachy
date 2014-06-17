'use strict';

angular.module('gitNgbeachyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('geoCtrl', [ '$scope', 'geolocation', 'leafletEvents', function ($scope, geolocation, leafletEvents) {
    
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
            }
   

  }]);
