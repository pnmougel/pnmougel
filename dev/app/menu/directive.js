App.directive('menu', function ($document, $rootScope) {
    return {
        restrict: 'E',
        // scope: null,
        link: function (scope) {
            scope.doScroll = function(elementId) {
                $rootScope.scroll.atTop = false;
                scope.scroll.skipScroll = true;
                $document.scrollToElementAnimated($(elementId)).then(function() {
                    $rootScope.scroll.skipScroll = false;
                });
            }
        },
        templateUrl: 'app/menu/view.html'
    };
});