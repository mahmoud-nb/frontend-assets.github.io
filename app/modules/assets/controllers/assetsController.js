'use strict';
/* Controllers */
angular.module("app.assets").controller('assetsController', ['$scope', '$rootScope', '$state', '$stateParams', '$location', 'requestService', 'codepenService',
	function($scope, $rootScope, $state, $stateParams, $location, requestService, codepenService) {


		$scope.data = {};
		$scope.page = 1;
		$rootScope.itmes = [];

		//console.log('assetsController', $stateParams.username, $rootScope.itmes);

		$scope.getItmes = function(page){



			$scope.api_params = {
				'username': 'mahmoud-nb',
				'page': $scope.page
			};

			if($stateParams.username)
				$scope.api_params.username = $stateParams.username ;


			//console.log('getItmes', $scope.api_params);

			codepenService.pens($scope.api_params).then(function(response) {

				if(response.success){
					//$rootScope.itmes = response.data ;
					console.log('getItmes before', $rootScope.itmes, response.data);
					$rootScope.itmes = $rootScope.itmes.concat(response.data);
					console.log('getItmes after', $rootScope.itmes);
				}


			}, function(response){
				console.log('error', response);
			});
		};

		$scope.loadMore = function(){
			$scope.page ++;
			$scope.getItmes();
		};

		$scope.getDetails = function(id){

			$rootScope.selectedItme = null;
			$rootScope.selectedItme = $rootScope.itmes.find(function(el){
				return el.id == id;
			});

			$state.go('app.assets.details', {'id': id});

			//console.log('SelectedItme >>>>',$rootScope.selectedItme);
		};




		// #################################################
		if(typeof $stateParams.username !== 'undefined' || $rootScope.itmes.length == 0){
			$scope.getItmes();
		}


	}
]);