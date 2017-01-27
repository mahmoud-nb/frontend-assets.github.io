angular.module("app.init").factory('codepenService', function($http) {
	var codepenService = {

		// http://cpv2api.com/
		// http://cpv2api.com/pens/public/mahmoud-nb?page=2
		base_url:'http://cpv2api.com',

		/**
		 * ### pens ( /pens/PENS_TYPE )
		 * picks : Get the latest picked pens
		 * popular : Get the most popular pens
		 * recent : Get recently created pens
		 *
		 * ### Pens by User (/pens/PENS_TYPE/USERNAME )
		 * public : get username's public pens
		 * popular : Get tmrDevelops's popular pens
		 * loved : Get chriscoyier's loved pens
		 * forked : Get cathbailh's forked pens
		 * showcase : Get MichaelArestad's showcase pens 
		*/
		pens : function(params){
			params.username = typeof params.username != 'undefined' ? params.username : '' ;
			params.type = typeof params.type != 'undefined' ? params.type : ( params.username != '' ? 'public' : 'recent') ;
			params.page = typeof params.page != 'undefined' ? params.page : 1 ;

			params.url = this.base_url + '/pens' ; 

			if(params.type)
				params.url += '/'+params.type;

			if(params.username)
				params.url += '/'+params.username;

			return this.load(params);
		},


		load: function(params, showLoader){
			showLoader = typeof showLoader != 'undefined' ? showLoader : true ;

	    	if(showLoader)
		    	angular.element('#preloader').show();

		    if(params.page)
		    	params.url = params.url+'?page='+params.page;

		    console.log('load', params);
	
			var promise = $http({
	        		method : "GET",
		        	url : params.url
		    	}).then(function (response) { 
		    		angular.element('#preloader').hide();
					return response.data;			
				});

			return promise;
		},

		// Pens

		getPublicPens: function(params, showLoader) {

			


			showLoader = typeof showLoader != 'undefined' ? showLoader : true ;

			var url = this.base_url + '/pens/public/' + params.username ;
			if(params.page)
				url += '?page='+ params.page ;

	    	if(showLoader)
		    	angular.element('#preloader').show();
	
			var promise = $http({
	        		method : "GET",
		        	url : url
		    	}).then(function (response) { 
		    		angular.element('#preloader').hide();
					return response.data;			
				});

			return promise;


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
	return codepenService;
});