'use strict';

angular.module('gitNgbeachyApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'leaflet-directive',
  'geolocation'
  // 'directives',
  // 'layer-directives'
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
      .when('/beach/:id', {
        templateUrl: 'views/detail.html',
        controller: 'LocationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
});

// angular.module('gitNgbeachyApp.directives', []);
// angular.module('gitNgbeachyApp.layer-directives', []);