'use strict';

angular.module('gitNgbeachyApp')
.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

.controller('MapCtrl', [ '$scope', '$http', 'leafletEvents', function($scope, $http, leafletEvents) {

    // geolocation.getLocation().then(function(data){
    //   $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};  
    //   console.log($scope.coords);  

    // });
    angular.extend($scope, {
            center: {
                lat: 32.907,
                lng: -79.802,
                zoom: 9
            },
    
        defaults: {
            scrollWheelZoom: false
        },
        markers: {},
        layers: {
		  baselayers: {
		    openstreetmap: {
		      name: 'OpenStreetMap (XYZ)',
		      type: 'xyz',
		      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		      layerParams: {},
		      layerOptions: {}
		  		}
		    },
			overlays: {
				beaches: {
	            	name:'Beaches',
	            	type: 'markercluster',
	            	url:'/app/scripts/beachmarkers.js',
	            	visible: true,
	            	layerOptions: {},
	            	layerParams: {}     	
	                }
				}
		}
    });

    $scope.addMarkers = function() {
                angular.extend($scope, {
                    markers: {
                 
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
	

  


   