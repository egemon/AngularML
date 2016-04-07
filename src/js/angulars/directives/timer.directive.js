angular.module('timer')
.directive('timer', function () {
    return {
        restrict: 'E',
        templateUrl: 'src/tmpls/pages/timer.html',
        controller: 'timerCtrl as timer'
    };
});