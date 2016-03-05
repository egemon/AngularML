angular.module('player')
.controller('PlayerCtrl', ['$scope', 'game', 'club', PlayerCtrl]);

function PlayerCtrl ($scope, game, club) {
    var vm = this;
    //======= FIELDS =========
    vm.number = $scope.$index + 1;
    vm.nick = 'Player' + ($scope.$index + 1);
    vm.role = club.ROLES[0];
    vm.falls = 0;
    vm.BP = false;
    vm.BR = false;

    //======== METHODS ==========
    vm.decrFall = decrFall;
    vm.incrFall = incrFall;

    ///////////////
    function decrFall() {
        vm.falls--;
    }
    function incrFall() {
        vm.falls++;
    }
}

