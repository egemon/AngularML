const WIN = ['Мирные', "Мафия"];
const TABLES = ['BakerStreet', 'FleetStreet'];
var Header = angular.module('header', [])
.controller('MetadataCtrl', function ($scope) {
    $scope.TABLES = TABLES;
    $scope.WIN = WIN;

    this.table = TABLES[0];
    this.win = WIN[0];

    this.date = new Date();
    this.ref = 'Merlin';
    this.gameNumber = 1;

    console.log('MetadataCtrl', $scope);
    $scope.Protocol.metadata = this;
})
.directive('metadata', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/metadata.html',
        controller: 'MetadataCtrl as metadata'
    };
});