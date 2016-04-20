angular.module('ProtocolApp')
.controller('DaysCtrl', ['$scope','game', DaysCtrl]);

function DaysCtrl ($scope, game) {
    console.log('[days.controller] init');
    var defaultVote = {
        who: '',
        whom: '',
        sum: 0
    };

    var defaultDay = {
        votes:[angular.copy(defaultVote)],
        results: {
            hanged: '',
            killed: '',
            checkedS: '',
            checkedD: '',
        }
    };

    this.state = 'stopped';

    game.days = this.days = [angular.copy(defaultDay)];
    var currentDay = 0;


    this.decrNumber = decrNumber;
    this.incrNumber = incrNumber;
    this.startGame = startGame;
    this.addVote = addVote;
    this.addDay = addDay;
    this.removeVote = removeVote;

    function startGame () {
        console.log('[days.controller] startGame()');
        this.state = 'started';
    }

    function decrNumber(details, key) {
        console.log('[days.controller] decrNumber()', arguments);
        details[key]--;
    }

    function incrNumber(details, key) {
        console.log('[days.controller] incrNumber()', arguments);
        details[key]++;
    }

    function addVote(votes) {
        console.log('[days.controller] addVote()', arguments);
        votes.push(angular.copy(defaultVote));
    }

    function addDay() {
        this.days.push(angular.copy(defaultDay));
        currentDay++;
    }

    function removeVote(vote ,arr) {
        var i = arr.indexOf(vote);
        arr.splice(i, 1);
    }
}
