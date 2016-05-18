'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('pnmougel', [
  'ngRoute',
  'pnmougel.main'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
