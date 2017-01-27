'use strict';

/* Controllers */

angular.module("app").controller('mainController', ['$scope', '$window', '$location','$rootScope', '$timeout','$state',
    function($scope, $window, $location,$rootScope,$timeout,$state ) {
	
      $scope.routeIs = function(routeName) {
	    return $location.path() === routeName;
	  };

	  $scope.app = {
        settings: {
          test: 1
        }
	  };

      
	  


      
      //Menu
      $scope.showmenu=false;
      $scope.toggleMenu = function(){
    	  $scope.showmenu=($scope.showmenu) ? false : true;
    	  $scope.titleView=$rootScope.currentView;
      }

      $rootScope.currentView="Home";
      $scope.titleView=$rootScope.currentView;
      



  }]);