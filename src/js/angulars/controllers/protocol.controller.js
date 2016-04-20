angular.module('ProtocolApp')
.controller('ProtocolCtrl', ['$scope', '$http', 'sync','club', 'game', ProtocolCtrl]);

function ProtocolCtrl ($scope, $http, sync, club, game) {
    console.log('ProtocolCtrl init');

    // ========== INIT BLOCK ===========
    var vm = this;
    sync.getNicks().then(function (nicks) {
        vm.playerNicks = nicks;
    });

    //========== PUBLIC FIELDS ========
    vm.game = game;
    vm.ROLES = club.ROLES;
    vm.MAX_FALLS = club.MAX_FALLS;
    vm.TABLES = club.TABLES;
    vm.WIN = club.WIN;
    vm.playerNicks = [];

    //========== PUBLIC API ========
    vm.saveGame = saveGame;
    vm.loadGame = loadGame;
    vm.deleteGame = deleteGame;


    // ============ PUBLIC FUNCTIONS ========
    function saveGame () {
        console.log('PROTOCOL saveGame()', vm.game);
        sync.push(vm.game);
    }

    function loadGame() {
        sync.pull(vm.game.metadata).then(handleLoadedGame.bind(this, vm.game));
    }

    function deleteGame () {
        console.log('PROTOCOL deleteGame()', vm.game);
        sync.delete(vm.game.metadata);
    }

    // ============ PRIVATE FUNCTIONS ========

    function handleLoadedGame (oldGame, newGame) {
        console.log('[protocol.controller] handleLoadedGame() ', oldGame, newGame);
        loadMetadata(oldGame.metadata, newGame.metadata);
        loadPlayerLines(oldGame.playerLines, newGame.playerLines);
        loadDays(oldGame.days, newGame.days);
    }

    function loadMetadata(oldMetadata, newMetadata) {
        for(var key in newMetadata) {
            if (key === 'date') {
                continue;
            }
            oldMetadata[key] = newMetadata[key];
        };
    };

    function loadPlayerLines (oldPlayers, newPlayers) {
        newPlayers.forEach(function(newPlayer, i) {
            var oldPlayer = oldPlayers[i];
            for(var key in oldPlayer) {
                oldPlayer[key] = newPlayer[key];
            };
        });
    };

    function loadDays (oldDays, newDays) {
        oldDays.length = 0;
        newDays.forEach(function(newDay, i) {
            oldDays.push(newDay)
        });
    };
}