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

    //========== Methods ========
    vm.saveGame = saveGame;

    /////////////
    function saveGame (ProtocolForm) {
        console.log('PROTOCOL saveGame()', vm.game);
        sync.push(vm.game);
    }
}