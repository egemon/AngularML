angular.module('timer')
.directive('timer', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/tmpls/timer.html',
        controller: 'timerCtrl as timer'
    };
});