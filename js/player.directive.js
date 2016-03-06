
angular.module('player')
.directive('player', function ($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html',
        controller: 'PlayerCtrl as player',
        scope: {
            number: '=',
            maxFalls: '=',
            roles: '='
        }
    };
});
