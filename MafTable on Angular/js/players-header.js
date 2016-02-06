var playerHeader = angular.module('players-header', [])
.directive('playersHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/players-header.html',
    };
});