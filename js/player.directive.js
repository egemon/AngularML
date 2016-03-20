angular.module('ProtocolApp')
.directive('player', function () {
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
