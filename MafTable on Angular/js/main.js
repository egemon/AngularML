var Protocol = angular.module('ProtocolApp', ['player', 'header'])
.controller('ProtocolCtrl', ['$http',function ($http, $scope) {

    this.players = new Array(10);

    this.saveGame = function () {
        console.log('Game saved');
        localStorage.setItem('game', JSON.stringify(this));
    };

}]);
