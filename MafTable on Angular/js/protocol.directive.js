angular.module('ProtocolApp')
.directive('protocol', function () {
    return {
        restrict: "E",
        templateUrl: 'tmpls/protocol.html',
        controller: 'ProtocolCtrl as protocol'
    };
});