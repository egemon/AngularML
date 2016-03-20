angular.module('ProtocolApp')
.directive('metadata', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/metadata.html',
        controller: 'MetadataCtrl as metadata',
        scope: {
            tables: '=',
            wins: '='
        }
    };
});