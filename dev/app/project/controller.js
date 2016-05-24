'use strict';

angular.module('pnmougel.project', ['ui.router', 'bootstrapLightbox'])
    .config(function($stateProvider) {
        $stateProvider
            .state('project', {
                url: "/project/:id",
                templateUrl: 'app/project/view.html',
                controller: 'ProjectCtrl'
            });
    })

    .controller('ProjectCtrl', function ($scope, $http, $stateParams, $window, Lightbox, $state) {
        Lightbox.templateUrl = '/app/project/lightbox-template.html';
        Lightbox.fullScreenMode = true;
        Lightbox.calculateImageDimensionLimits = function (dimensions) {
            return {
                'maxWidth': dimensions.windowWidth >= 768 ? // default
                dimensions.windowWidth - 92 :
                dimensions.windowWidth - 52,
                'maxHeight': 1600                           // custom
            };
        };
        $scope.prevProject = function () {
            $state.go('project', $scope.project.prevUrl)
        };
        $scope.nextProject = function () {
            $state.go('project', $scope.project.nextUrl)
        };

        $http.get('data/projects.json').then(function (res) {
            var projects = res.data.projects.sort(function(a, b) {
                return a.order - b.order;
            });
            projects.forEach(function(project, i) {
                if(project.name === $stateParams.id) {
                    $scope.project = project;
                    $scope.project.images.forEach(function(image) {
                        image.thumbUrl = $scope.project.imagePath + 'thumbs/' + image.id + '.png';
                        image.url = $scope.project.imagePath + image.id + '.png';
                    })
                    const prevIdx = i == 0 ? projects.length - 1 : i - 1;
                    const nextIdx = i == projects.length + 1 ? 0 : i + 1;
                    $scope.project.prevUrl = { id: projects[prevIdx].name };
                    $scope.project.nextUrl = { id: projects[nextIdx].name };
                }
            })
        });

        $scope.goBack = function() {
            $state.go('main')
        };

        $scope.openLightboxModal = function (index) {
            Lightbox.openModal($scope.project.images, index);
        };
    });