angular.module('metadata')
.controller('MetadataCtrl', ['$scope', 'club', MetadataCtrl]);

function MetadataCtrl ($scope, club) {
    var vm = this;
    //======= FIELDS =========
    vm.table = club.TABLES[0];
    vm.win = club.WIN[0];

    vm.date = new Date();
    vm.ref = 'Merlin';
    vm.gameNumber = 1;
}
