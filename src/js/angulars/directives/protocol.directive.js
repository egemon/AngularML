angular.module('ProtocolApp')
.directive('protocol', function () {
    return {
        restrict: "E",
        templateUrl: 'src/tmpls/pages/protocol.html',
        controller: 'ProtocolCtrl as protocol'
    };
});