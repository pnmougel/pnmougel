App.directive('portfolio', function ($http) {
    return {
        restrict: 'E',
        scope: {},
        link: function (scope) {
            scope.nbColsLg = 4;
            scope.nbColsMd = 2;
            scope.nbColsSm = 2;
            scope.nbColsXs = 2;

            scope.projectHover = function (project, isHover) {
                project.logo = isHover ? '/logo.png' : '/logo_dark.png'
            };

            var computeNbCols = function(nbItems, nbCols, prefix) {
                var res = (12 / nbCols) * ((nbCols - (nbItems % nbCols)) % nbCols);
                return res === 0 ? 'hidden-' + prefix : 'col-' + prefix + '-' + res;
            };

            $http.get('data/projects.json').then(function (res) {
                scope.projects = res.data.projects;
                scope.projects.sort(function(a, b) {
                    return a.order - b.order;
                } ).forEach(function(project) {
                    project.logo = '/logo_dark.png';
                    project.urlParams = {
                        id: project.name
                    }
                });
                var nbProjects = scope.projects.length;
                var classLg = computeNbCols(nbProjects, scope.nbColsLg, 'lg');
                var classMd = computeNbCols(nbProjects, scope.nbColsMd, 'md');
                var classSm = computeNbCols(nbProjects, scope.nbColsSm, 'sm');
                var classXs = computeNbCols(nbProjects, scope.nbColsXs, 'xs');
                scope.fillClasses = [classXs, classSm, classMd, classLg].join(' ')
            });
        },
        templateUrl: 'app/portfolio/view.html'
    };
});