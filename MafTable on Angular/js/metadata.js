function MetadataCtrl ($scope, club) {

    //======= FIELDS =========
    this.table = club.TABLES[0];
    this.win = club.WIN[0];

    this.date = new Date();
    this.ref = 'Merlin';
    this.gameNumber = 1;
}

//======== METHODS ==========
// MetadataCtrl.prototype.method =

var Metadata = angular.module('metadata', ['club'])
.controller('MetadataCtrl', MetadataCtrl)
.directive('metadata', function () {
    return {
        restrict: 'E',
        require: ['^^protocol', 'metadata'],
        templateUrl: 'tmpls/metadata.html',
        controller: 'MetadataCtrl as metadata',
        link: function (scope, el, attrs, ctrls) {
            var protocol = ctrls[0],
                metadata = ctrls[1];
            protocol.game.metadata = metadata;
        }
    };
});