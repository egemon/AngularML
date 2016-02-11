var Player = angular.module('player', ['game'])
.controller('PlayerCtrl', function ($scope, game) {

    this.number = $scope.$index + 1;
    this.nick = '';
    this.role = $scope.ROLES[0];
    this.falls = 0;
    this.BP = false;
    this.BR = false;

    this.decrFall = function () {
        this.falls--;
    };
    this.incrFall = function () {
        this.falls++;
    };
    game.playerLines[$scope.$index] = this;
})
.directive('player', function ($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html',
        controller: 'PlayerCtrl as player'
    };
});