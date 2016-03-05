
angular.module('player')
.directive('player', function ($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html',
        controller: 'PlayerCtrl as player',
        require: ['^protocol', 'player'],
        scope: {
            index: '='
        },
        link: function ($scope, el, attrs, ctrls) {
            var protocol = ctrls[0],
                player = ctrls[1];
            protocol.game.playerLines[$scope.index] = player;
        }
    };
});
