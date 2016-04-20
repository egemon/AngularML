angular.module('ProtocolApp')
.controller('ProtocolCtrl', ['$scope', '$http', 'sync','club', 'game', ProtocolCtrl]);

function ProtocolCtrl ($scope, $http, sync, club, game) {
    console.log('ProtocolCtrl init');
    var vm = this;

    //========== FIELDS ========
    vm.game = game;
    vm.ROLES = club.ROLES;
    vm.MAX_FALLS = club.MAX_FALLS;
    vm.TABLES = club.TABLES;
    vm.WIN = club.WIN;
    vm.playerNicks = [];
    sync.getNicks().then(function (nicks) {
        vm.playerNicks = nicks;
    });

    //========== Methods ========
    vm.saveGame = saveGame;

    /////////////
    function saveGame () {
        console.log('PROTOCOL saveGame()', vm.game);
        sync.push(vm.game);
    }

}