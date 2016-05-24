'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('pnmougel', [
  'ui.router',
  'ngAnimate',
  'pnmougel.main',
  'pnmougel.project'
]).
config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});
