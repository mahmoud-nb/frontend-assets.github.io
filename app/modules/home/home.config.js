/**
 * home Module Configuration
 */

angular.module('app.home', [])

    .config([ '$stateProvider', function( $stateProvider ) {


        var moduleUrl='app/modules/home/';
        var moduleName='app.home';
        
        $stateProvider
            .state('app.home', {
                url: '/home',
                templateUrl: moduleUrl+'views/default.html',
                //resolve: scriptUtils.getResolved(moduleName,[moduleUrl+'services/publicService.js'])
            });

}]);