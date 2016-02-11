var Timer = angular.module('timer', [])
.controller('timerCtrl', function ($scope, $interval) {
    var intervalID = null;

    this.state = 'Start';
    this.time = 0;

    function increaseTime() {
        this.time++;
    }

    this.toggleState = function () {
        switch(this.state) {
            case 'Start':
                intervalID = $interval(increaseTime.bind(this), 1000);
                this.state = 'Pause';
            break;
            case 'Pause':
                $interval.cancel(intervalID);
                this.state = 'Start';
            break;
        }
    };
    this.reset = function () {
        this.time = 0;
        this.state = 'Start';
        $interval.cancel(intervalID);
    };

})
.directive('timer', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/timer.html',
        controller: 'timerCtrl as timer'
    };
});