angular.module('metadata')
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