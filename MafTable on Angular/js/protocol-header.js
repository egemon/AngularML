const WIN = ['Мирные', "Мафия"];
const TABLES = ['BakerStreet', 'FleetStreet'];
var Header = angular.module('header', [])
.controller('HeaderCtrl', function ($scope) {
    $scope.TABLES = TABLES;
    $scope.WIN = WIN;

    this.table = TABLES[0];
    this.win = WIN[0];

    this.date = new Date();
    this.ref = 'Merlin';
    this.gameNumber = 1;

    console.log('HeaderCtrl', $scope);
    $scope.Protocol.metadata = this;
})
.directive('protocolHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/protocol-header.html',
        controller: 'HeaderCtrl as game'
    };
});