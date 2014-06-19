 
'use strict';

angular.module('gitNgbeachyApp')    
    .factory('WeatherSvc', function($http) {
         var allbeaches = function(){
            return [
                        { 
                        "name": "IOP Beach",
                        "lat": 32.79639,
                        "lng": -79.765,
                        "message": "<a class='btn btn-success' href='#/beach/1'>Isle of Palms Beach</a>",
                        "id":1
                        },
                        {
                        "name": "Sullivans Island",
                        "lat": 32.76333,
                        "lng": -79.83778,
                        "message": "<a class='btn btn-success' href='#/beach/2'>Sullivans Island Beach</a>",
                        "id":2
                        },
                        {
                        "name": "Folly Beach",
                        "lat": 32.666152,
                        "lng": -79.939213,
                        "message": "<a class='btn btn-success' href='#/beach/3'>Folly Beach</a>",
                         "id":3
                        },
                        {
                        "name": "North Myrtle Beach",
                        "lat": 33.822216,
                        "lng": -78.680974,
                        "message": "<a class='btn btn-success' href='#/beach/4'>North Myrtle Beach</a>",
                        "id":4
                        },
                        {
                        "name": "Edisto Beach",
                        "lat": 32.487613,
                        "lng": -80.324402,
                        "message": "<a class='btn btn-success' href='#/beach/5'>Edisto Beach</a>",
                        "id":5
                        },
                        {
                        "name": "Surfside Beach",
                        "lat": 33.606111,
                        "lng": -78.973056,
                        "message": "<a class='btn btn-success' href='#/beach/6'>Surfside Beach</a>",
                        "id":6
                        },
                        {
                        "name": "Litchfield Beach",
                        "lat": 33.4669,
                        "lng": -79.0997,
                        "message": "<a class='btn btn-success' href='#/beach/7'>Litchfield Beach</a>",
                        "id":7
                        },
                        {
                        "name": "Pawley's Island Beach",
                        "lat": 33.425833,
                        "lng": -79.125,
                        "message": "<a class='btn btn success' href='#/beach/8'>Pawley's Island Beach</a>",
                        "id":8
                        },
                        {
                        "name": "Huntington Beach State Park",
                        "lat": 33.5139,
                        "lng": -79.0611,
                        "message": "<a class='btn btn success' href='#/beach/9'>Huntington Beach State Park</a>",
                        "id":9
                        }
                    
                         
                    ]
                };

                // weatherSvc.allbeaches 


         
            

            var findOne = function(id) {
                var selected;
                var beaches = allbeaches();
                var len = allbeaches().length
                for(var i = 0; i< len; i++) {
                        if(beaches[i].id === id) {
                            selected = beaches[i];
                        }
                }
                return selected;
                console.log(selected);
            };
 
        return {
            allbeaches: allbeaches,
            findOne: findOne
          
            }

          
        })

  // $scope.getWeather = function(){

//     var blat = marker[i].lat;
//     var blng = marker[i].lng;

//     var beachlocal = 'blat'+'blng'
//     console.log(beachlocal);

//     return $scope.beachlocal;
//     console.log($scope.beachlocal);

// };

 // $scope.getWeather = function(){
 
 //        $http({method: 'GET', url: 'http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json'}).
 //            success(function(data, status) {
 //            // console.log('success!');
 //            // console.log(data);
 //             var forecastdata = data;
 //            // console.log($scope.forecastdata);
 
 //            // console.log($scope.forecastdata.data.weather[0].hourly);
 
 //            $scope.todaysweather = forecastdata.data.weather[0].hourly
            
 //            console.log($scope.todaysweather);
 
 //            return $scope.todaysweather;
 
 //        }).
 //        error(function(data, status) {
 //            console.log('there was an error getting the weather data' + error);
 
 //        });
 
 //    };  
  
 //  }]);
