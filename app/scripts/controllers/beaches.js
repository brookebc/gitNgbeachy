'use strict';

angular.module('gitNgbeachyApp')
	.controller('BeachesCtrl', [ '$scope', 'BeachService', function ($scope, BeachService) {

		$scope.getBeaches = $scope.getthoseBeaches();

	}]);