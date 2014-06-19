'use strict';
 
angular.module('gitNgbeachyApp')
  .controller('LocationCtrl', [ '$scope', 'LocationService', '$location', '$http', '$routeParams', function ($scope, $location, $http, $routeParams, LocationService) {
    
    // 'LocationService',
    $scope.allBeaches = LocationService.showBeaches;
        console.log($scope.allBeaches);

    // $scope.yourbeach = LocationService.findOne;
   
        // var id = ({ id: $routeParams.id }).id;
        //     console.log("id="+id);

    // $scope.oneBeach = LocationService.showBeach({ id: $routeParams.id });
    //     console.log(LocationService.showBeach);

    // $scope.allDaBeaches = BeachService.showBeaches(); 

    $scope.getWeather = function(){

    	//take the lat and lng of each place that is selected and pass that info
    	//into the url for the weather http request
 
		$http({method: 'GET', url: 'http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json'}).
    		success(function(data, status) {
    		// console.log('success!');
    		// console.log(data);
    		$scope.forecastdata = data;
    		// console.log($scope.forecastdata);
 
    		// console.log($scope.forecastdata.data.weather[0].hourly);
 
    		$scope.todaysweather = $scope.forecastdata.data.weather[0].hourly;
    		
    		console.log($scope.todaysweather);
 
    		return $scope.todaysweather;
 
    	}).
    	error(function(data, status) {
    		console.log('there was an error getting the weather data' + error);
 
    	});
 
	};	
  
  }]);



   