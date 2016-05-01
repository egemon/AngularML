angular.module('sync')
.factory('sync', ['$http', 'club', syncService]);

function syncService ($http, club) {

    function handleResponse(response) {
        console.log('[syncService] handleResponse()', arguments);
        if (response.data.errorText) {
            alert(response.data.errorText);
            throw response.data.errorText;
        } else {
            return response.data;
        }
    }

    function formatGame(game) {
        console.log('[sync.factory] formatGame() ', arguments);

        var newGame = angular.copy(game);
        formatDate(newGame.metadata);

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

    function formatDate (metadata) {
        metadata.date = metadata.date.toISOString().split('T')[0];
        return metadata;
    }

    function pushToServer (game) {
        return $http.post(club.BASE_SERVER_URL + club.SYNC_URL, formatGame(game))
            .then(handleResponse);
    }

    function pullFromServer(metadata) {
        metadata = angular.copy(metadata);
        return $http.post(club.BASE_SERVER_URL + club.LOAD_URL, formatDate(metadata))
            .then(handleResponse);
    }

    function deleteFromServer(metadata) {
        metadata = angular.copy(metadata);
        return $http.post(club.BASE_SERVER_URL + club.DELETE_URL, formatDate(metadata))
            .then(handleResponse);
    }

    function getNicks() {
        return $http.post(club.BASE_SERVER_URL + club.PLAYERS_URL).then(function (data) {
            console.log('[sync.factory] getNicks() data ', arguments);
            var players =  data.data.data;
            return players.map(function(el) {
                return el.nick;
            });
        }, function (err) {
            alert(err);
        });
    }

    return {
        push: pushToServer,
        pull: pullFromServer,
        delete: deleteFromServer,
        getNicks: getNicks
    };
}