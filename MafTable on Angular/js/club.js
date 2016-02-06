angular.module('club', [])
.factory('club', function(){
    const ROLES = ['Мирный', "Мафия", "Дон", "Шериф"];
    const WIN = ['Мирные', "Мафия"];
    const TABLES = ['BakerStreet', 'FleetStreet'];

    return {
        ROLES: ROLES,
        WIN: WIN,
        TABLES: TABLES
    };
});
