var Protocol = angular.module('ProtocolApp', ['player', 'metadata', 'timer', 'players-header', 'sync', 'game', 'club'])
.controller('ProtocolCtrl', function ($scope, $http, $log, sync, game, club) {
    $log.log('ProtocolCtrl init');
    this.game = game;
    this.ROLES = club.ROLES;
    this.MAX_FALLS = club.MAX_FALLS;

    this.saveGame = function() {
        $log.log('PROTOCOL saveGame()', this.game);
        sync.push($scope.game);
    };
});