'use strict';

angular.module('pnmougel.main', ['ui.router', 'ngRoute', 'ngMap', 'duScroll', 'ngAnimate', 'scroll-animate-directive']).value('duScrollOffset', 0)

.config(function($stateProvider) {
  $stateProvider
      .state('main', {
        url: "/",
        templateUrl: 'app/main/view.html',
        controller: 'MainCtrl'
      });
})


.controller('MainCtrl', function($scope, $window, $document, $rootScope) {
  $rootScope.scroll = {
    goToTop: 2000,
    lastPosition: 0,
    skipScroll: false,
    inScroll: false,
    menuClasses: 'menu-header at-top'
  };

  var screenWidth = $window.innerWidth;
  var portfolio = $("#portfolio");
  var linearEasing = function(x) { return x; }

  $scope.ids = ['header', 'portfolio', 'info', 'cv', 'contact'];
  $scope.elements = $scope.ids.map(function(id) {
    return {element: $('#' + id), id: id}
  });


  angular.element($window).bind("scroll", function() {
    const top = $window.pageYOffset;

    $scope.elements.forEach(function(element) {
      const topElement = element.element.offset().top;
      const elementHeight = element.element.children().height();

      if(top > topElement - 5 && top < topElement + elementHeight) {
        $rootScope.scroll.menuClasses = 'menu-' + element.id;
        // $rootScope.scroll.menuClasses += topElement === 0 ? ' at-top' : ' not-at-top'
        $scope.$apply();
      }
    });

    const fooElement = $('#foo');
    if(fooElement.offset()) {
      if(!($rootScope.scroll.skipScroll) && screenWidth > 800) {
        if(top > fooElement.offset().top - 50 && top < $("#contact").offset().top - 600) {
          $(".skills-container").css('top', (top - fooElement.offset().top + 80) + 'px')
        } else if(top < $("#foo").offset().top - 50) {
          $(".skills-container").css('top', '0px')
        }
      }
    }
  });
});