var app = angular.module('app', ['ui.router'])
    .config(function config ($stateProvider) {
        $stateProvider.state('index', {
            url:'',
            controller:"indexCtrl as index",
            templateUrl: 'tmpls/index.html'
        });
        $stateProvider.state('search', {
            url:'/search',
            controller:"searchCtrl as search",
            templateUrl: 'tmpls/search.html'
        })
    })

    .service('service', function service () {
        var service = this;
        service.serData = "serData";
    })

    .controller('indexCtrl', function indexCtrl (service) {
        this.index = 'some data for index';
        this.ctrlData = service.serData;
    })
    .controller('searchCtrl', function searchCtrl (service) {
        this.search = 'some data for search';
        this.ctrlData = service.serData;
    })