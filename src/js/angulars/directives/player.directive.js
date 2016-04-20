angular.module('ProtocolApp')
.directive('player', function () {
    return {
        restrict: 'EA',
        templateUrl: 'src/tmpls/pages/player.html',
        controller: 'PlayerCtrl as player',
        scope: {
            number: '=',
            maxFalls: '=',
            roles: '=',
            playerNicks: "="
        }
    };
});
