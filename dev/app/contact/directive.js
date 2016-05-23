App.directive('contact', function () {
    return {
        restrict: 'E',
        scope: {},
        link: function (scope) {
            scope.socialItems = [{
                icon: 'fa-at',
                label: 'pnmougel@gmail.com',
                link: 'pnmougel@gmail.com'
            },{
                icon: 'fa-skype',
                label: 'pnmougel',
                link: ''
            },{
                icon: 'fa-linkedin',
                label: 'linkedIn',
                link: 'https://www.linkedin.com/in/pierre-nicolas-mougel-3ba91848'
            },{
                icon: 'fa-facebook',
                label: 'facebook',
                link: 'https://www.facebook.com/pierrenicolas.mougel'
            },{
                icon: 'fa-twitter',
                label: 'twitter',
                link: 'https://twitter.com/pnmougel'
            }
            //     ,{
            //     icon: 'fa-github-alt',
            //     label: 'Github',
            //     link: ''
            // }
            //     ,{
            //     icon: 'fa-stack-overflow',
            //     label: 'Stackoverflow',
            //     link: ''
            // }
            ]
        },
        templateUrl: 'app/contact/view.html'
    };
});