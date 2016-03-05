angular.module('game')
.factory('game',['club', game]);
function game (club) {
    var playerLines = new Array(club.PLAYER_NUMBER);
    return {
        playerLines: playerLines,
        metadata: {}
    };
}