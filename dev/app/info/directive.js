App.directive('info', function () {
    return {
        restrict: 'E',
        scope: {},
        link: function (scope) {
            scope.services = [{
                label: 'Conseil',
                description: "Je suis à votre écoute pour comprendre vos besoins et vous proposer la meilleur solution afin de vous satisfaire",
                icon: 'fa fa-thumbs-o-up'
            }, {
                label: 'Expérience',
                description: "Avec plus de 10 ans d'expérience, je peux vous faire profiter de mon expertise technique",
                icon: 'fa fa-trophy'
            }, {
                label: 'Réactivité',
                description: "Une seule mission à la fois pour répondre à vos besoins dans les meilleurs délais",
                icon: 'fa fa fa-clock-o'
            }]
        },
        templateUrl: 'app/info/view.html'
    };
});