'use strict';

angular.module('gitNgbeachyApp')	
	.factory('TidesSvc', function($http) {
         var getAll = function(){

         	$http({method: 'GET', url:'http://api.wunderground.com/api/a49e1180e24abdee/tide/q/SC/Charleston.json'}).
            success(function(data, status) {
            console.log('success!');
            console.log(data);

            $scope.forecastdata = data;
            console.log($scope.forecastdata);
 
            // console.log($scope.forecastdata.data.weather[0].hourly);
 
            $scope.todaysweather = $scope.forecastdata.data.weather[0].hourly;
            $scope.todaysdate = $scope.forecastdata.data.weather[0].date;
            // console.log($scope.todaysdate);

            // var fixtime = $scope.forecastdata.data.weather[0].hourly.time;

            // console.log(fixtime);

            // $scope readytime = function (){


            // };

            
            console.log($scope.todaysweather);
 
            return $scope.todaysweather;
 
        }).
        error(function(data, status) {
            console.log('there was an error getting the weather data' + error);
 
        });
 
    };  


//http://api.wunderground.com/api/a49e1180e24abdee/tide/q/SC/Charleston.json