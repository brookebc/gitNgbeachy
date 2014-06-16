'use strict';

angular.module('gitNgbeachyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

.controller('MapCtrl', ['$scope', 'leafletEvents', function($scope, leafletEvents, $window) {
        // $scope.myPosition = {
        //     lat: '',
        //     lng: ''
        // };
        $window.navigator.geolocation.getCurrentPosition(function(position){
                // var lat = ;
                // var lng = position.coords.longitude;
                $scope.$apply = (function(){
                    $scope.myPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        zoom: 12
                    };
                    
                })
            });
        $scope.findMe = function() {
            
 console.log($scope.myPosition);       
        };


		angular.extend($scope, {
            myPosition: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                zoom: 14
            },	
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
                        },  
                         user: {
                            lat: $scope.myPosition.lat,
                            lng: $scope.myPosition.lng,
                            message: "Here you are!"
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
            }

            //$scope.addMarkers();
        }]);
