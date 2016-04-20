angular.module('ProtocolApp')
.directive('days', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/tmpls/pages/days.html',
        controller: 'DaysCtrl as DaysCtrl',
        scope: {
            state: '=',
            days: '=',
            players: '=',
        }
    };
});
