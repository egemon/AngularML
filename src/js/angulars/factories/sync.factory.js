angular.module('sync')
.factory('sync', ['$http', 'club', syncService]);

function syncService ($http, club) {

    function _gamesSaved (data) {
        alert('Games was saved!');
    }

    function _errorDuringSaving (err) {
        console.log('_errorDuringSaving = ', err);

        alert('Error during saving!');
    }

    function formatGame(game) {
        console.log('[sync.factory] formatGame() ', arguments);

        var newGame = angular.copy(game);
        newGame.metadata.date = formatDate(newGame.metadata.date);

        for (var i = 0; i < newGame.playerLines.length; i++) {
            var player = newGame.playerLines[i];
            if (!player.BP) {
                delete player.BP;
            }
            if (!player.BR) {
                delete player.BR;
            }
            if (!player.falls) {
                delete player.falls;
            }

        }
        return {games: [newGame]};
    }

    function formatDate (date) {
        return date.toISOString().split('T')[0];
    }

    function pushToServer (game) {
        return $http.post(club.BASE_SERVER_URL + club.SYNC_URL, formatGame(game))
            .then(_gamesSaved, _errorDuringSaving);
    }

    return {
        push: pushToServer
    };
}