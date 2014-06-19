'use strict';

angular.module('gitNgbeachyApp')	
    .factory('GeoJSON', function($resource) {
        return $resource('scripts/beachdata.geo.json',{}, 
            {
                get: { method: 'GET'}
            })
    })

    // .factory('LocatonService', function($resource) {
    //     return $resource('scripts/beachdata.geo.json/:id',
    //         {
    //             id: '@_id'
    //         }, 
    //         {
    //             showBeach: { method: 'GET'}
    //         })
    // });

	.factory('LocationService', function() {
		
           var markers = [
                   { 
                   	"IOP Beach": {
                        "lat": 32.79639,
                        "lng": -79.765,
                        "message": "<button>Isle of Palms Beach</button>",
                        "id":1
                    	},
                    "Sullivans Island": {
                        "lat": 32.76333,
                        "lng": -79.83778,
                        "message": "<button>Sullivans Island Beach</button>",
                        "id":2
                        },
                    "Folly Beach": {
                        "lat": 32.666152,
                        "lng": -79.939213,
                        "message": "<button>Folly Beach</button>",
                         "id":3
                        },
                    "North Myrtle Beach": {
                        "lat": 33.822216,
                        "lng": -78.680974,
                        "message": "<button>North Myrtle Beach</button>",
                         "id":4
                        },
                    "Edisto Beach": {
                        "lat": 32.487613,
                        "lng": -80.324402,
                        "message": "<button>Edisto Beach</button>",
                        "id":5
                        },
                    "Surfside Beach": {
                        "lat": 33.606111,
                        "lng": -78.973056,
                        "message": "<button>Surfside Beach</button>",
                        "id":6
                        },
                    "Litchfield Beach": {
                        "lat": 33.4669,
                        "lng": -79.0997,
                        "message": "<button>Litchfield Beach</button>",
                        "id":7
                        },
                    "Pawley's Island Beach": {
                        "lat": 33.425833,
                        "lng": -79.125,
                        "message": "<button>Pawley's Island Beach</button>",
                        "id":8
                        },
                    "Huntington Beach State Park": {
                        "lat": 33.5139,
                        "lng": -79.0611,
                        "message": "<button>Huntington Beach State Park</button>",
                        "id":9
                        }
                    }
                      
                ];

	return	{
			     showBeaches: markers
                }

  
 //        var findOne = function ($routeParams, $scope){

 //            var i;
 //            var selected;
            
 //            for (i=0; i<arr.length; i++){

 //                 if (selected.id===$routeParams.id){

 //                    return $location.path("beach/:id");          

 //            };

 //        };

 //    }

            
	});


 
 // .factory('weatherService', ['$resource', '$http', '$q', function($resource, $http, $q){
	// return $resource('http://api.worldweatheronline.com/free/v1/marine.ashx?key=ab337e40b350996fe2070792b397287e7209e833&q=32.79639,-79.765&format=json',
	// 	{},
	// 	{
	// 		getWeather: { method: 'GET',
	// 		isArray: true
	// 	}	
	// 	});
	// });
   	
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

    // .factory('BeachService', function($resource){
 //        return $resource('scripts/markers.json',{},
 //            {
 //                getBeaches: {method: 'GET'}   
            
 //        })
 //    })


