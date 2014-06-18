'use strict';
 
angular.module('gitNgbeachyApp')
  .controller('LocationCtrl', [ '$scope', 'LocationService', '$location', '$http', function ($scope, LocationService, $location, $http) {

    $scope.location = function(){
    	  LocationService.showBeach();
    		$location.path('/detail');
    	};

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



   