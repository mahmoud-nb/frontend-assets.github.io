angular.module("app.init").factory('requestService', function($http) {
	var requestService = {

		getCodepenItmes: function(params, showLoader) {
			var itmes = [
				{
					'title': 'Integrating WordPress with Your Website',
					'date': '25 Feb, 2013',
					'tags' : ['Website Dev'],
					'likes': []
				},
				{
					'title': 'Integrating WordPress with Your Website',
					'date': '25 Feb, 2013',
					'tags' : ['Website Dev'],
					'likes': []
				},
				{
					'title': 'Integrating HTML',
					'date': '25 Feb, 2013',
					'tags' : ['Website Dev'],
					'likes': []
				}
			];

			return itmes;
		},

		getItmes: function(params, showLoader) {
			var itmes = [
				{
					'title': 'Integrating WordPress with Your Website',
					'date': '25 Feb, 2013',
					'tags' : ['Website Dev'],
					'likes': []
				},
				{
					'title': 'Integrating WordPress with Your Website',
					'date': '25 Feb, 2013',
					'tags' : ['Website Dev'],
					'likes': []
				},
				{
					'title': 'Integrating HTML',
					'date': '25 Feb, 2013',
					'tags' : ['Website Dev'],
					'likes': []
				}
			];

			return itmes;
		},

	    async: function(params, showLoader) {
	    	showLoader = typeof showLoader != 'undefined' ? showLoader : true ;

	    	if(showLoader)
		    	angular.element('#preloader').show();
	
			var promise = $http({
	        		method : "GET",
		        	url : params.api_url
		    	}).then(function (response) { 
		    		angular.element('#preloader').hide();
					return response.data;			
				});

			return promise;
	    },

	    post: function(params, showLoader) {
	    	showLoader = typeof showLoader != 'undefined' ? showLoader : true ;

	    	if(showLoader)
	    		angular.element('#preloader').show();
			
			var promise = $http.post(params.api_url, params.data, params.config).then(
				function (response) { 
		    		angular.element('#preloader').hide();
					return response.data;			
				},
				function (response) { 
		    		angular.element('#preloader').hide();
					return response.data;		
				}
			);

			return promise;
	    }
	};
	return requestService;
});