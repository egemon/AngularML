var Protocol = angular.module('ProtocolApp', ['player', 'metadata', 'timer', 'players-header', 'sync', 'game', 'club'])
.controller('ProtocolCtrl', function ($scope, $http, $log, sync, game, club) {
    $log.log('ProtocolCtrl init');
    $scope.game = game;
    $scope.ROLES = club.ROLES;
    $scope.MAX_FALLS = club.MAX_FALLS;

    this.saveGame = function() {
        $log.log('PROTOCOL saveGame()', this.game);
        sync.push($scope.game);
    };
});