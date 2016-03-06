angular.module('timer')
.directive('timer', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/timer.html',
        controller: 'timerCtrl as timer'
    };
});