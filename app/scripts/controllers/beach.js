'use strict';
 
angular.module('gitNgbeachyApp')
  .controller('LocationCtrl', [ '$scope', '$location', '$http', '$routeParams', 'MarkersSvc', function ($scope, $location, $http, $routeParams, MarkersSvc) {
     
    $scope.markersTest = MarkersSvc.getAll();
    $scope.marker = MarkersSvc.findOne(Number($routeParams.id));
    console.log($scope.markersTest);

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
