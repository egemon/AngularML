var Protocol = angular.module('ProtocolApp', ['player', 'metadata', 'timer', 'players-header', 'sync', 'game', 'club'])
.controller('ProtocolCtrl', ['$scope', '$http', '$log', 'sync', 'game', 'club', function ($scope, $http, $log, sync, game, club) {
    $log.log('ProtocolCtrl init');
    $scope.game = game;
    $scope.ROLES = club.ROLES;

    this.saveGame = function() {
        $log.log('PROTOCOL saveGame()', this.game);
        sync.push($scope.game);
    };
}]);