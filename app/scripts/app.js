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
        templateUrl: 'views/map.html',
        controller: 'MapCtrl'
      })
      .when('/beach', {
        templateUrl: 'views/detail.html',
        controller: 'LocationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});
