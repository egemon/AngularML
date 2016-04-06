angular.module('ProtocolApp')
.directive('protocol', function () {
    return {
        restrict: "E",
        templateUrl: 'src/tmpls/protocol.html',
        controller: 'ProtocolCtrl as protocol'
    };
});