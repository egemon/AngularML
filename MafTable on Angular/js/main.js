var Protocol = angular.module('ProtocolApp', ['player'])
.controller('ProtocolCtrl', ['$http',function ($http, $scope) {

    this.players = new Array(10);

    this.saveGame = function () {
        console.log('Game saved');
    };

}])
