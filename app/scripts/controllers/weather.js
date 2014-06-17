angular.module('gitNgbeachyApp')
	.controller('weatherCtrl', ['$scope', '$http', function ($scope, $http) {
	
		$scope.getWeather = function(){

		$http({method: 'GET', url: 'http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json'}).
    	success(function(data, status) {
    		console.log('success!');
    		console.log(data);

    		var forecastdata = data;

    		// window.reviewdata = data;
          
    		console.log(forecastdata);
    		console.log(forecastdata.data.weather);

    		var todaysWeather = forecastdata.data.weather;
    		console.log(todaysWeather.length);
    		console.log(todaysWeather[0].hourly[0]);

    		// var html= '';
      //     	for (var i = 0; i < forecastdata.data.weather.length.hourly; i++){
          
      //     	html += '<h3>'+ forecastdata.data.weather.hourly.cloudcover + "</h3><br>";
          	
      //   		$(".weatherhere").html(html);
      //   	};


    		// var forecast = forecastdata.data.weather.hourly;

    		// var forecast = {};

    		// console.log(forecast);
    	}).
    	error(function(data, status) {
    		console.log('there was an error getting the weather data' + error);

    });

	};	

	}]);

	


 
        

  //http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json

