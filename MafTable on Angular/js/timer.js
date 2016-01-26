var Timer = angular.module('timer', [])
.controller('timerCtrl', function ($scope) {
    var intervalId = null;
    
    this.state = 'Start';
    this.time = 0;
    

    this.toggleState = function () {
        switch(this.state) {
            case 'Start':
                intervalId = setInterval(function() {
                    this.time++;
                    $scope.$digest()
                }.bind(this), 1000);
                this.state = 'Pause';
            break;
            case 'Pause':
                clearInterval(intervalId);
                this.state = 'Start';
            break;
        }  
    };
    this.reset = function () {
        this.time = 0;
        this.state = 'Start';
        clearInterval(intervalId);
    };

})
.directive('timer', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/timer.html',
        controller: 'timerCtrl as timer'
    };
});