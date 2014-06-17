'use strict';

angular.module('gitNgbeachyApp')

	.controller('weatherCtrl', ['$scope', 'weatherService', function($scope, weatherService) {
		$scope.weatherdata = "hello we are in WeatherCtrl!";

		$scope.showWeather = weatherService.showWeather();

	}]);

//    		// $scope.weatherdata = {};
//    	.controller('waterCtrl', ['$scope', '$http', function ($scope, $http) {
   	
// 	$scope.someWeather = {};
// 		$http.get('http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json').success(function(data, status) {
		
// 			console.log('how about that');
// 			}

// }]);

  // .controller('WaterCtrl', ['$scope', '$http', function ($scope, $http) {
  // 	$scope.weatherdata = {};

 	
      

		// data = $scope.weatherdata;
		// console.log($scope.weatherdata);
	// };
 
        

  //http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json

