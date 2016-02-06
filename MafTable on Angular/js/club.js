angular.module('club', [])
.factory('club', [function(){
    var ROLES = ['Мирный', "Мафия", "Дон", "Шериф"];
    var WIN = ['Мирные', "Мафия"];
    var TABLES = ['BakerStreet', 'FleetStreet'];
    var BASE_SERVER_URL = 'http://bs-mafiaclub.rhcloud.com/sync';
    return {
        ROLES: ROLES,
        WIN: WIN,
        TABLES: TABLES,
        BASE_SERVER_URL: BASE_SERVER_URL
    };
}]);
