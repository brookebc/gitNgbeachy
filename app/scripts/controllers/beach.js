'use strict';
 
angular.module('gitNgbeachyApp')
  .controller('LocationCtrl', [ '$scope', '$location', '$http', '$routeParams', 'MarkersSvc', function ($scope, $location, $http, $routeParams, MarkersSvc) {
     
    $scope.markersTest = MarkersSvc.getAll();

    $scope.marker = MarkersSvc.findOne(Number($routeParams.id));

    $scope.weathermarker = MarkersSvc.findOne(Number($routeParams.id));
    console.log($scope.weathermarker);

    var marklat = $scope.weathermarker.lat;
    var marklng = $scope.weathermarker.lng;

    console.log(marklat);

    console.log(marklng);

    // console.log(weatherurl);

   var weatherurl = "http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=" + marklat + ","+ marklng + "&format=json";

    console.log(weatherurl);

$scope.getWeather = function(weatherurl){

        $http({method: 'GET', url: weatherurl }).
            success(function(data, status) {
            console.log('success!');
            console.log(data);

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

$scope.getWeather(weatherurl); 


}]);

