'use strict';

angular.module('gitNgbeachyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

.controller('MapCtrl', ['$scope', 'leafletEvents', function($scope, leafletEvents) {

		angular.extend($scope, {
            center: {
                    autoDiscover: true
                },
	        // center: {
		       //  lat: 32.907,
		       //  lng: -79.802,
		       //  zoom: 9
       		// },
			defaults: {
	            scrollWheelZoom: false
	        },
	    	markers: {}
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

            //$scope.addMarkers();
        }]);
