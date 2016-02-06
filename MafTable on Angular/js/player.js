var Player = angular.module('player', ['club'])
.controller('PlayerCtrl', ['club', '$scope', function (club, $scope) {
    $scope.ROLES = club.ROLES;

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
    $scope.$parent.Protocol.playerLines[$scope.$index] = this;
}])
.directive('player', function ($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html',
        controller: 'PlayerCtrl as player'
    };
});