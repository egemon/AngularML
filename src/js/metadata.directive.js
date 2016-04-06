angular.module('ProtocolApp')
.directive('metadata', function () {
    return {
        restrict: 'EA',
        templateUrl: 'src/tmpls/metadata.html',
        controller: 'MetadataCtrl as metadata',
        scope: {
            tables: '=',
            wins: '='
        }
    };
});