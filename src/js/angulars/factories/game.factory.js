angular.module('ProtocolApp')
.factory('game',['club', game]);
function game (club) {
    var playerLines = [];
    for (var i = 0; i < club.PLAYER_NUMBER; i++) {
        playerLines.push({});
    }

    return {
        playerLines: playerLines,
        metadata: {},
        days: []
    };
}