'use strict';
/* Controllers */
angular.module("app.home").controller('homeController', ['$scope', '$rootScope', '$state', 'requestService',
	function($scope, $rootScope,$state, requestService) {


		$scope.data = {};

		$scope.itmes = requestService.getItmes();


		$scope.find = function(){
			alert('dfds');
			console.log('dfds');
		};


	}
]);