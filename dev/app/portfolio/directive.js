App.directive('portfolio', function ($http) {
    return {
        restrict: 'E',
        scope: {

        },
        link: function (scope) {
            $http.get('data/projects.json').then(function(res){
                scope.projects = res.data.projects;
            });
        },
        templateUrl: 'app/portfolio/view.html'
    };
});