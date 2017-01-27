/* Service */
angular.module("app.assets").factory('assetsService', ['$q','$log',
	    function($q, $log) {
        publicFunction = function(){
	        return true;
        };       
        return{
        	publicFunction: publicFunction
        };
	  }]
	);