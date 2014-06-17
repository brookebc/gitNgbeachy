'use strict';

angular.module('gitNgbeachyApp')

//    		// $scope.weatherdata = {};
.factory('weatherService', ['$resource', '$http', '$q', function($resource, $http, $q){
	

	return $resource('http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json',
		{},
		{
			getWeather: { method: 'GET',
			isArray: true
		}	
		});
	});
   	
// 	$scope.someWeather = {};
// 		$http.get('http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json').success(function(data, status) {
		
// 			console.log('how about that');
// 			}

// }]);

  // $http({method: 'GET', url: '/someUrl'}).
    // success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    // }).
    // error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    // });