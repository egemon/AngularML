(function () {
    var app = angular.module('todoapp', []);
    // console.log = function (string) {
    //     $('body').append(string);
    // };

    app.controller('ListCtr', function($scope){
        this.formatTime = function () {
            var args = Array.prototype.slice.call(arguments);
            return (new Date(args)).getTime();
        };


        console.log('[ListCtr] Starts()');
        this.todoList = [
        {
            task: 'Create friends meeting in VK',
            timeline: this.formatTime(2015, 9, 31),
            description: 'go to VK and create polylog',
            isDone: false,
            doneable: true,
            img: {
                small:'friends.jpg'
            }
        },{
            task: 'Think about Helloween',
            timeline: this.formatTime(2015, 9, 30),
            description: 'Say to Olya',
            isDone: false,
            doneable: false,
            img: {
                small:'helloween.jpg'
            }
        }];
    });

    app.controller('PanelController', function(){
        this.tab = 1;
        this.selectTab = function (tab) {
            this.tab = tab;
        };
        this.isSelected = function  (tab) {
            return this.tab == tab;
        };
    });

    app.filter('task',function(){
        return function (str) {
            console.log('args = ', arguments);
            return 'Summary:' + str;
        };
    });
    app.filter('desc',function(){
        return function (str) {
            console.log('args = ', arguments);
            return 'You should: ' + str;
        };
    });



})();