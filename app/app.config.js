angular.module('app', [  
    'app.init',
    'app.home',
    'app.assets'
  ])

  .config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
    // lazy controller, directive and service
    controller = $controllerProvider.register;
    directive = $compileProvider.directive;
    filter = $filterProvider.register;
    factory = $provide.factory;
    service = $provide.service;
    constant = $provide.constant;
    value = $provide.value;
    }
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/assets/');	    
    
    $stateProvider  
      .state('app', {
        templateUrl: 'app/main/views/app.html'
      })
      // HOME 
      .state('app.main', {
        title:'Main',
        url: '/main',
        templateUrl: 'app/main/views/main.html',
        controllers: ['mainController.js']
      });
  })

  .run(['$rootScope', '$state',
    function ($rootScope, $state) {
      $rootScope.$on('$stateChangeSuccess', function (event, current, previous) {
      $rootScope.title = current.title;
    });            
  }])
;