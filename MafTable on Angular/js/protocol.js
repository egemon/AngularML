var Protocol = angular.module('ProtocolApp', ['player', 'metadata', 'timer', 'players-header', 'sync', 'game'])
.controller('ProtocolCtrl', ['$scope', '$http', '$log', 'sync', 'game', function ($scope, $http, $log, sync, game) {
    $log.log('ProtocolCtrl init');
    $scope.game = game;

    this.saveGame = function() {
        $log.log('PROTOCOL saveGame()', this.game);
        sync.push($scope.game);
    };
}]);