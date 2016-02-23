var playerHeader = angular.module('players-header', [])
//TODO @IL could be replaced with ng-include, extra entity
.directive('playersHeader', function () {
    return {
        restrict: 'E',
        templateUrl: 'tmpls/players-header.html',
    };
});