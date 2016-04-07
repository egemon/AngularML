angular.module('ProtocolApp')
.directive('metadata', function () {
    return {
        restrict: 'EA',
        templateUrl: 'src/tmpls/pages/metadata.html',
        controller: 'MetadataCtrl as metadata',
        scope: {
            tables: '=',
            wins: '='
        }
    };
});