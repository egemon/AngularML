angular.module('game', ['club'])
.factory('game', ['club', function (club) {
    var playerLines = new Array(club.PLAYER_NUMBER);
    return {
        playerLines: playerLines,
        metadata: {}
    }
}]);