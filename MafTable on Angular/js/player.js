const ROLES = ['Мирный', "Мафия", "Дон", "Шериф"];
var Player = angular.module('player', [])
.controller('PlayerCtrl', function ($scope) {
    this.nick = '';
    this.role = ROLES[0];
    this.falls = 0;
    this.decrFall = function () {
        this.falls--;
    };
    this.incrFall = function () {
        this.falls++;
    };
})
.directive('player', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/player.html'
    }
})