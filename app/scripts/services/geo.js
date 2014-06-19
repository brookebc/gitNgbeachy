'use strict';

angular.module('gitNgbeachyApp')	
    .factory('GeoJSON', function($resource) {
        return $resource('scripts/beachdata.geo.json',{}, 
            {
                get: { method: 'GET'}
            })
    })