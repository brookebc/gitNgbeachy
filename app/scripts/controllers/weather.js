angular.module('gitNgbeachyApp')
	.controller('weatherCtrl', ['$scope', '$http', function ($scope, $http) {
	
		$scope.getWeather = function(){

		$http({method: 'GET', url: 'http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json'}).
    	success(function(data, status) {
    		console.log('success!');
    		console.log(data);

    	}).
    	error(function(data, status) {
    		console.log('there was an error getting the weather data' + error);

    });

	};	

	}]);

	


 
        

  //http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json

