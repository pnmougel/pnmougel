App.directive('cv', function ($http) {
    return {
        restrict: 'E',
        scope: {},
        link: function (scope) {

            scope.categories = [{
                name: 'all',
                label: 'Complet'
            },{
                label: 'Diplômes',
                name: 'degree'
            },{
                label: 'Entreprises',
                name: 'jobexperience'
            },{
                label: 'Freelance',
                name: 'freelance'
            },{
                label: 'Projets',
                name: 'project'
            }];
            scope.selectedSkills = {};
            scope.showAllSkills = true;

            scope.selectCvItem = function(item) {
                if(item) {
                    item.selected = true;
                    scope.showAllSkills = false;
                    scope.selectedSkills = {};
                    var itemSkills = {};
                    item.skills.forEach(function(skill) {
                        itemSkills[skill] = true;
                    })
                    scope.skillCategories.forEach(function(skillCategory) {
                        skillCategory.skills.forEach(function(skill) {
                            skill.selected = skill.id in itemSkills;
                        })
                    });
                } else {
                    scope.showAllSkills = true;
                }

            };

            scope.category = 'all';
            scope.selectCategory = function(category) {
                scope.category  = category.name;
            };

            $http.get('data/cv.json').then(function(res){
                scope.cvItems = res.data;
                scope.cvItems.forEach(function(item) {
                    item.selected = false;
                })
            });
            $http.get('data/skills.json').then(function(res){
                scope.skillCategories = res.data;
            });
        },
        templateUrl: 'app/cv/view.html'
    };
});