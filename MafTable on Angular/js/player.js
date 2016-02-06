const ROLES = ['Мирный', "Мафия", "Дон", "Шериф"];
var Player = angular.module('player', [])
.controller('PlayerCtrl', function ($scope) {
    $scope.ROLES = ROLES;

    this.number = $scope.$index + 1;
    this.nick = '';
    this.role = ROLES[0];
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
})
.directive('player', function ($templateCache) {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html',
        controller: 'PlayerCtrl as player'
    };
});