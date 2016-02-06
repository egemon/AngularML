var Protocol = angular.module('ProtocolApp', ['player', 'metadata', 'timer', 'players-header', 'sync'])
.controller('ProtocolCtrl', ['$scope', '$http', 'sync', function ($scope, $http, sync) {
    var game = this;
    this.playerLines = new Array(10);

    function saveGame() {
        console.log('PROTOCOL saveGame()', game);
        sync.push(game);
    };

    $scope.saveGame = saveGame;
}]);