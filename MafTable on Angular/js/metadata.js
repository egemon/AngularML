var Metadata = angular.module('metadata', ['club'])
.controller('MetadataCtrl', ['club', '$scope', function (club, $scope) {
    $scope.TABLES = club.TABLES;
    $scope.WIN = club.WIN;

    this.table = $scope.TABLES[0];
    this.win = $scope.WIN[0];

    this.date = new Date();
    this.ref = 'Merlin';
    this.gameNumber = 1;

    console.log('MetadataCtrl', $scope);
    $scope.Protocol.metadata = this;
}])
.directive('metadata', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/metadata.html',
        controller: 'MetadataCtrl as metadata'
    };
});