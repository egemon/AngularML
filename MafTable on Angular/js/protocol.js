var Protocol = angular.module('ProtocolApp', ['player', 'metadata', 'timer', 'players-header', 'sync', 'club'])
.controller('ProtocolCtrl', function ($scope, $http, $log, sync, club) {
    $log.log('ProtocolCtrl init');
    this.game = {
        playerLines: new Array(club.PLAYER_NUMBER),
        metadata: {}
    };
    this.ROLES = club.ROLES;
    this.MAX_FALLS = club.MAX_FALLS;
    this.TABLES = club.TABLES;
    this.WIN = club.WIN;

    this.saveGame = function(ProtocolForm) {
        glo = ProtocolForm;
        $log.log(ProtocolForm);
        if (ProtocolForm.$submitted) {
            console.log(ProtocolForm.$submitted);
        }

        $log.log('PROTOCOL saveGame()', this.game);
        sync.push(this.game);
    };

    this.save = function () {
        console.log(arguments);
    };
})
.directive('protocol', function () {
    return {
        restrict: "E",
        templateUrl: 'tmpls/protocol.html',
        controller: 'ProtocolCtrl as Protocol'
    };
});