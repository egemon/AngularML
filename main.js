var app = angular.module('app', []);
app.factory('ListMdl', function(){
    return {
        TDList: ['Clean board']
    };
});

app.controller('AddTDCtr', function ($scope, ListMdl) {
    $scope.addTD = function (TD) {
        if (!$scope.newTD) {return; }
        console.log('TD added');
        ListMdl.TDList.push($scope.newTD);
        $('li').eq(0).clone()
        .find('span').text($scope.newTD)
        .end().appendTo('#TD_ul');
    };
});


app.controller('ListCtr', function ($scope, ListMdl) {
    $scope.ListMdl = ListMdl;
    $scope.showTDDetails = function () {
        console.log('[?TDCtr] showTDDetails()', ListMdl.TDList[0]);
    };
});
app.controller('TD_Ctr', function($scope) {
    $scope.money = 25;
    $scope.showTDDetails = function () {
        console.log('[firstTDCtr] showTDDetails()', $scope.ListMdl.TDList[0]);
    };
});

app.directive('td', function(){
    return {
        template: "<span> {{ListMdl.TDList[0]}}</span>" +
            "<span class='money'>{{money | moneyFilter}}</span>" +
            "<button ng-click='showTDDetails()' show >Show details</button>",
        link: function($scope, iElm, iAttrs, controller) {
            iElm.on('click', function(e) {
                console.log('[firstTDCtr] show some detail');
            });
        }
    };
});

app.filter('moneyFilter', function () {
    return function (str) {
        return str + '$';
    };
});