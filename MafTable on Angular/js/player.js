const ROLES = ['Мирный', "Мафия", "Дон", "Шериф"];
var Player = angular.module('player', [])
.controller('PlayerCtrl', function ($scope) {
    this.number = $scope.$index + 1;
    this.nick = '';
    this.role = ROLES[0];
    this.falls = 0;
    this.decrFall = function () {
        this.falls--;
    };
    this.incrFall = function () {
        this.falls++;
    };
    $scope.$parent.Protocol.players[$scope.$index] = this;
    console.log($scope);
})
.directive('player', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html',
        controller: 'PlayerCtrl as player'
    };
});