'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('pnmougel', [
  'ngRoute',
  'pnmougel.main'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.otherwise({redirectTo: '/'});
}]);
