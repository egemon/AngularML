angular.module('club').constant('club', {
    ROLES: ['Мирный', "Мафия", "Дон", "Шериф"],
    WIN: ['Мирные', "Мафия"],
    TABLES: ['BakerStreet', 'FleetStreet', 'DowningStreet', 'AbbeyRoad'],
    BASE_SERVER_URL: 'http://bs-mafiaclub.rhcloud.com/',
    SYNC_URL: 'sync',
    LOAD_URL: 'load',
    DELETE_URL: 'delete',
    PLAYERS_URL: 'players',
    PLAYER_NUMBER: 10,
    CRITICAL_FALLS: 3,
    MAX_FALLS: 4
});
