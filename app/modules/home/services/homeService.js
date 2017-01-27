/* Service */
angular.module("app.home").factory('homeService', ['$q','$log',
	    function($q, $log) {
        publicFunction = function(){
	        return true;
        };       
        return{
        	publicFunction: publicFunction
        };
	  }]
	);