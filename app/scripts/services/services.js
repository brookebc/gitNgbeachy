'use strict';

angular.module('gitNgbeachyApp')	
	.factory('GeoJSON', function($resource) {
		return $resource('scripts/beachdata.geo.json',{}, 
			{
				get: { method: 'GET'}
			})
	})


	// .factory('MarkerService', function($resource) {
	// 	return $resource('scripts/markers.js',{}, 
	// 		{
	// 			get: { method: 'GET'}
	// 		})
	// })
// .factory('L.tileLayer', function($resource) {
// 	return $resource('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',{}, 
// 		{
// 			addToMap: { method: 'GET'}
// 		})
// })

	// .factory('L.tileLayer', function($resource) {
	// 	return $resource('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',{}, 
	// 		{
	// 			addToMap: { method: 'GET'}
	// 		})
	// })

	.factory('LocationService', function($resource) {
		return $resource('scripts/markers.js/:id', 
		{
			id: '@_id'
		}, 
		{
			showMarkers: { method: 'GET'}
		})
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