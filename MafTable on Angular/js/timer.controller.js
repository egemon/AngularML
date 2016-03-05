angular.module('timer')
.controller('timerCtrl', ['$scope', '$interval', timerCtrl]);

function timerCtrl ($scope, $interval) {
    var vm = this;
    //======= FIELDS =========
    vm.state = 'Start';
    vm.time = 0;


    //======== METHODS ==========
    vm.toggleState =  toggleState;
    vm.reset =  reset;

    //////////////

    function toggleState() {
        switch(vm.state) {
            case 'Start':
                intervalID = $interval(increaseTime, 1000);
                vm.state = 'Pause';
            break;
            case 'Pause':
                $interval.cancel(intervalID);
                vm.state = 'Start';
            break;
        }
    }

    function reset() {
        vm.time = 0;
        vm.state = 'Start';
        $interval.cancel(intervalID);
    }

    //private
    var intervalID = null;
    function increaseTime() {
        vm.time++;
    }
}
