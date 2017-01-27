/**
 * assets Module Configuration
 */

angular.module('app.assets', [])

    .config([ '$stateProvider', function( $stateProvider ) {


        var moduleUrl='app/modules/assets/';
        var moduleName='app.assets';
        
        $stateProvider
            .state('app.assets', {
            	abstract:true,
                url: '/assets',
                template: '<div ui-view ></div>',
                //resolve: scriptUtils.getResolved(moduleName,[moduleUrl+'services/publicService.js'])
            })
            
            .state('app.assets.all', {
                url: '/',
                templateUrl: moduleUrl+'views/default.html',
            })
            .state('app.assets.byusername', {
                url: '/:username',
                templateUrl: moduleUrl+'views/default.html',
            })
            
            .state('app.assets.details', {
                url: '/details/:id',
                templateUrl: moduleUrl+'views/details.html',
            })
        ;

}]);