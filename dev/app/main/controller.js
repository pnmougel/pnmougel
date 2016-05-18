'use strict';

angular.module('pnmougel.main', ['ngRoute', 'ngMap', 'duScroll']).value('duScrollOffset', 50)

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'app/main/view.html',
    controller: 'MainCtrl'
  });
}])


.controller('MainCtrl', function($scope, $window, $document, $rootScope) {

  $rootScope.scroll = {
    goToTop: 2000,
    lastPosition: 0,
    atTop: true,
    skipScroll: false
  };

  var screenWidth = $window.innerWidth;
  var portfolio = document.getElementById('portfolio');
  var linearEasing = function(x) { return x; }


  angular.element($window).bind("scroll", function() {
    console.log($rootScope.scroll.skipScroll);
    if(!($rootScope.scroll.skipScroll) && screenWidth > 800) {
      var st = $window.pageYOffset;
      if (st > $rootScope.scroll.lastPosition){
        if(st < $rootScope.scroll.goToTop) {
          $rootScope.scroll.atTop = false;
          $document.scrollToElement(portfolio, 0, 70, linearEasing).then(function() {
            $rootScope.scroll.goToTop = $window.pageYOffset;
            $rootScope.scroll.atTop = false;
          });
        }
      } else {
        if(st < $scope.scroll.goToTop - 50) {
          $rootScope.scroll.atTop = true;
          $document.scrollTopAnimated(0, 70, linearEasing).then(function() {
            $rootScope.scroll.atTop = true;
          });
        }
      }
      $scope.scroll.lastPosition = st;
    }
  });
});