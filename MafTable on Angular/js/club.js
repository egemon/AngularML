// TODO @IL module and factory declarations should be in separate files.
// TODO @IL also - are you sure, that you need factory here? Seems constant fit better for this case
angular.module('club', [])
.factory('club', [function(){
    return {
        ROLES: ['Мирный', "Мафия", "Дон", "Шериф"],
        WIN: ['Мирные', "Мафия"],
        TABLES: ['BakerStreet', 'FleetStreet'],
        BASE_SERVER_URL: 'http://bs-mafiaclub.rhcloud.com/sync',
        PLAYER_NUMBER: 10,
        CRITICAL_FALLS: 3,
        MAX_FALLS: 4
    };
}]);
