'use strict';

angular.module('gitNgbeachyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('geoCtrl', [ '$scope', 'geolocation', function ($scope,geolocation) {
    $scope.center = {
    	lat: 38.8833,
	    lng: -77.0167,
        zoom: 4
    }

    geolocation.getLocation().then(function(data){

    		$scope.center = {
    			lat: data.coords.latitude, 
    			lng: data.coords.longitude, 
    			zoom: 12
    		};  
      
      console.log($scope.center);

    });

  }]);