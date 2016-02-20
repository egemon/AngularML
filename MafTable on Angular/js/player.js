function PlayerCtrl ($scope, game, club) {

    //======= FIELDS =========
    this.number = $scope.$index + 1;
    this.nick = '';
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
            var protocol = ctrls[0],
                player = ctrls[1];
            protocol.game.playerLines[$scope.$index] = player;
        }
    };
});
