'use strict';

angular.module('gitNgbeachyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'leaflet-directive',
  'geolocation'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/map', {
        templateUrl: 'views/mapview.html',
        controller: 'MapCtrl'
      })
      .when('/geo', {
        templateUrl: 'views/geolocate.html',
        controller: 'geoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
