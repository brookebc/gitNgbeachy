'use strict';

angular.module('gitNgbeachyApp')	
	.factory('TidesSvc', function($http) {

         var getTides = function(){

         $http({method: 'GET', url:'http://api.wunderground.com/api/a49e1180e24abdee/tide/q/SC/Charleston.json'}).
            success(function(data, status) {
            console.log('success!');
            console.log(data);

          
           
            return $scope.todaysTides;

            console.log($scope.todaysTides);
 
        }).
        error(function(data, status) {
            console.log('there was an error getting the weather data' + error);
 
        });
 
    };  

});

$scope.theseTides = var TidesSvc.getTides;

// console.log($scope.theseTides);

// $scope.getTides();

// console.log(TidesSvc.getTides(););
// TidesSvc.getTides;



//http://api.wunderground.com/api/a49e1180e24abdee/tide/q/SC/Charleston.json