angular.module('nwng', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'nwng.fs',
    'nwng.dashboard']
  )
  .config(function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'ui/views/dashboard.html',
      controller: 'DashboardCtrl'
    });

    $routeProvider.otherwise({
      redirectTo: '/dashboard'
    });
  });