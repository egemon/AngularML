angular.module('ProtocolApp')
.controller('MetadataCtrl', ['$scope', 'game', MetadataCtrl]);

function MetadataCtrl ($scope, game) {
    var vm = this;
    vm.data = game.metadata;
    //======= FIELDS =========

    vm.data.table = $scope.tables[0];
    vm.data.win = $scope.wins[0];

    vm.data.date = new Date();
    vm.data.ref = 'Merlin';
    vm.data.gameNumber = 1;
}
