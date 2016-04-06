angular.module('sync')
.factory('sync', ['$http', 'club', syncService]);

function syncService ($http, club) {
    function _stringify (object) {
        try {
            return JSON.stringify(object);
        } catch(e) {
            alert('Incorrect game couldn"t been stringified!');
            throw new Error('Incorrect game couldn"t been stringified!');
        }
    }
    function _gamesSaved (data) {
        alert('Games was saved!');
    }

    function _errorDuringSaving (err) {
        console.log('_errorDuringSaving = ', err);
        alert('Error during saving!');
    }

    function pushToServer (game) {
        return $http.post(club.BASE_SERVER_URL, _stringify({games: [game]}))
            .then(_gamesSaved, _errorDuringSaving);
    }

    return {
        push: pushToServer
    };
}