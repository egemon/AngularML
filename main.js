var app = angular.module('app', []);
app.factory('ListMdl', function(){
    return {
        TDList: ['Clean board']
    };
});

app.controller('AddTDCtr', function ($scope, ListMdl) {
    $scope.addTD = function (TD) {
        ListMdl.TDList.push($scope.newTD);
        console.log('TDList', ListMdl.TDList);
    };
});


app.controller('ListCtr', function ($scope, ListMdl) {
    console.log('ListCtr: this ==', this);
    this.ListCtrVar = 'ListCtrString';
    $scope.ListMdl = ListMdl;
    $scope.showTDDetails = function () {
        console.log('[?TDCtr] showTDDetails()', ListMdl.TDList[0]);
    };
});
app.controller('firstTDCtr', function($scope) {
    console.log('firstTDCtr: this ==', this);
    this.firstTDCtrVar = 'firstTDCtrString';
    $scope.showTDDetails = function () {
        console.log('[firstTDCtr] showTDDetails()', $scope.ListMdl.TDList[0]);
    };
});
app.controller('secondTDCtr', function($scope) {
    console.log('secondTDCtr: this ==', this);
    this.secondTDCtrVar = 'secondTDCtrString';
    $scope.showTDDetails = function () {
        console.log('[secondTDCtr] showTDDetails()', $scope.ListMdl.TDList[1]);
    };
});