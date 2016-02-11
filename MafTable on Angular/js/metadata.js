var Metadata = angular.module('metadata', ['club', 'game'])
.controller('MetadataCtrl', function ($scope, club, game) {
    this.TABLES = club.TABLES;
    this.WIN = club.WIN;

    this.table = club.TABLES[0];
    this.win = club.WIN[0];

    this.date = new Date();
    this.ref = 'Merlin';
    this.gameNumber = 1;

    console.log('MetadataCtrl', $scope);

    game.metadata = this;
})
.directive('metadata', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/metadata.html',
        controller: 'MetadataCtrl as metadata'
    };
});