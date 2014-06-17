'use strict';

angular.module('gitNgbeachyApp')

//    		// $scope.weatherdata = {};
.factory('weatherService', function($resource){
	return $resource('http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json',
		{},
		{
			showWeather: { method: 'GET'}	
		});
	});
   	
// 	$scope.someWeather = {};
// 		$http.get('http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json').success(function(data, status) {
		
// 			console.log('how about that');
// 			}

// }]);