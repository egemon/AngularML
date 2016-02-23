function PlayerCtrl ($scope, game, club) {

    //======= FIELDS =========
    //TODO @IL try to replace $scope.$index via "controllerAs" style
    this.number = $scope.$index + 1;
    this.nick = 'Player' + ($scope.$index + 1);
    this.role = club.ROLES[0];
    this.falls = 0;
    this.BP = false;
    this.BR = false;
}

//======== METHODS ==========
PlayerCtrl.prototype.decrFall = function () {
    this.falls--;
};
PlayerCtrl.prototype.incrFall = function () {
    this.falls++;
};


var Player = angular.module('player', ['game'])
.controller('PlayerCtrl', PlayerCtrl)
.directive('player', function ($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html',
        controller: 'PlayerCtrl as player',
        require: ['^protocol', 'player'],
        link: function ($scope, el, attrs, ctrls) {
            console.log('attrs', attrs);
            console.log('el', el);
            var protocol = ctrls[0],
                player = ctrls[1];

            //TODO @IL  are you sure, that you have to assign "player Controller" to "protocol" field? especially
            // inside directive
            protocol.game.playerLines[$scope.$index] = player;
            console.log('protocol.game', protocol.game);
        }
    };
});
