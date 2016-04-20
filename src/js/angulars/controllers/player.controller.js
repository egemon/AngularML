angular.module('ProtocolApp')
.controller('PlayerCtrl', ['$scope', 'game', PlayerCtrl]);

function PlayerCtrl ($scope, game) {
    var vm = this;
    //======= FIELDS =========
    vm.data = game.playerLines[$scope.number];
    vm.data.nick = 'Player' + ($scope.number + 1);
    vm.data.role = $scope.roles[0];
    vm.data.falls = 0;
    vm.data.BP = false;
    vm.data.BR = false;

    //======== METHODS ==========
    vm.decrFall = decrFall;
    vm.incrFall = incrFall;

    ///////////////
    function decrFall() {
        vm.data.falls--;
    }
    function incrFall() {
        vm.data.falls++;
    }

}

