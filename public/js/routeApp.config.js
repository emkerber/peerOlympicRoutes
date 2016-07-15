angular.module('routeApp').config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/archery', {
      templateUrl:'../views/archery.html',
      controller:'ArcheryController'
    })
    .when('/canoe', {
      templateUrl:'../views/canoe.html',
      controller: 'CanoeController'
    })
    .when('/modernpentathlon', {
      templateUrl:'../views/modernpentathlon.html',
      controller: 'ModernPentathlonController'
    })
    .when('/tabletennis', {
      templateUrl:'../views/tabletennis.html',
      controller: 'TableTennisController'
    })
    .when('/taekwondo', {
      templateUrl:'../views/taekwondo.html',
      controller: 'TaekwondoController'
    })

  $locationProvider.html5Mode(true);
})
