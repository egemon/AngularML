angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("src/tmpls/pages/days.html","<div class=\"day\" ng-repeat=\"(i, day) in DaysCtrl.days track by $index\">\n    <div class=\"day-title\">\n        День {{::i}}\n        <button class=\"btn btn-primary\" ng-click=\"DaysCtrl.removeItem(day, DaysCtrl.days)\">-</button>\n    </div>\n    <div class=\"votes\" ng-repeat=\"(j, details) in day.votes\">\n        <span>\n            Кто\n            <select\n                class=\"days-input\"\n                ng-model=\"details.who\"\n                ng-options=\"player.nick for player in players\">\n            </select>\n        </span>\n        <span>\n            Кого\n            <select\n                class=\"days-input\"\n                ng-model=\"details.whom\"\n                ng-options=\"player.nick for player in players\">\n            </select>\n        </span>\n        <div>\n            <span>\n                Голосов\n        <!--             <button type=\"\" class=\"decrFall btn btn-primary\" ng-disabled=\"details.sum == 0\" ng-click=\"DaysCtrl.decrNumber(details, \'sum\')\">-</button>\n                <span>{{details.sum}}</span>\n                <button type=\"\" class=\"incrFall btn btn-primary\" ng-disabled=\"details.sum == 10\" ng-click=\"DaysCtrl.incrNumber(details, \'sum\')\">+</button> -->\n                <input class=\"votes-number-input\" type=\"number\" ng-model=\"details.sum\">\n            </span>\n            <button class=\"btn btn-primary\" ng-click=\"DaysCtrl.removeItem(details, day.votes)\">-</button>\n        </div>\n    </div>\n\n    <button class=\"btn btn-primary\" ng-click=\"DaysCtrl.addVote(day.votes)\">Добавить выставление</button>\n    <div class=\"results\">\n            <span\n                ng-repeat=\"(key, value) in day.results\"\n                class=\"{{::key}}-container\"\n            >\n                {{::key | translate}}\n                <select\n                    class=\"days-input\"\n                    ng-model=\"day.results[key]\"\n                    ng-options=\"player.nick for player in players\"\n                >\n                </select>\n            </span>\n    </div>\n</div>\n<button class=\"btn btn-primary\" ng-click=\"DaysCtrl.addDay()\">Следующий день</button>\n");
$templateCache.put("src/tmpls/pages/metadata.html","<caption>Информация об игре</caption>\n<tbody>\n    <tr>\n        <td>Стол</td>\n        <td>\n            <select class=\"metadata-input\" required ng-model=\"metadata.data.table\" name=\"\" id=\"\">\n                <option ng-repeat=\"table in tables\">{{table}}</option>\n            </select>\n        </td>\n    </tr>\n    <tr>\n        <td>Дата</td>\n        <td>\n            <input class=\"metadata-input\" required ng-model=\"metadata.data.date\" type=\"date\" name=\"\" value=\"\" placeholder=\"\">\n        </td>\n    </tr>\n    <tr>\n        <td>Ведущий</td>\n        <td>\n            <autocomplete class=\"metadata-input\" required ng-model=\"metadata.data.ref\" data=\"playerNicks\"></autocomplete>\n        </td>\n    </tr>\n    <tr>\n        <td>Победа</td>\n        <td>\n            <select class=\"metadata-input\" required ng-model=\"metadata.data.win\" name=\"\" id=\"\">\n                <option ng-repeat=\"win in wins\">{{win}}</option>\n            </select>\n        </td>\n    </tr>\n    <tr>\n        <td>Номер игры</td>\n        <td>\n            <input class=\"metadata-input\" required ng-model=\"metadata.data.gameNumber\" type=\"number\" name=\"\" value=\"\" placeholder=\"\" min=\"0\" step=\"1\">\n        </td>\n    </tr>\n\n</tbody>\n");
$templateCache.put("src/tmpls/pages/player.html","<td>{{::number + 1}}</td>\n<td>\n    <input class=\"best-checkbox\" type=\"checkbox\" name=\"best\" value=\"\" ng-model=\"player.data.BP\">\n</td>\n<td>\n    <input class=\"best-checkbox\" type=\"checkbox\" name=\"best\" value=\"\" ng-model=\"player.data.BR\">\n</td>\n<td>\n    <autocomplete class=\"\" required ng-model=\"player.data.nick\" data=\"playerNicks\"></autocomplete>\n    <!-- <input required class=\"player-nick-input form-control\" type=\"text\" ng-model=\"player.data.nick\"> -->\n</td>\n<td>\n    <select required class=\"player-role metadata-input\" name=\"\" id=\"\" ng-model=\"player.data.role\">\n        <option ng-repeat= \"role in roles\">{{role}}</option>\n    </select>\n</td>\n<td class=\"falls\">\n    <button type=\"\" class=\"decrFall btn btn-primary\" ng-disabled=\"player.data.falls == 0\" ng-click=\"player.decrFall()\">-</button>\n    <span>{{player.data.falls}}</span>\n    <button type=\"\" class=\"incrFall btn btn-primary\" ng-disabled=\"player.data.falls == maxFalls\" ng-click=\"player.incrFall()\">+</button>\n</td>\n\n<!--     <input type=\"checkbox\">Убит\n<input type=\"checkbox\">Проверен шерифом\n<input type=\"checkbox\">Проверен доном -->\n");
$templateCache.put("src/tmpls/pages/players-header.html","<th>#</th>\n<th>И</th>\n<th>В</th>\n<th>Ник Игрока</th>\n<th>Роль</th>\n<th>Фоллы</th>");
$templateCache.put("src/tmpls/pages/protocol.html","<form novalidate accept-charset=\"utf-8\" name=\"ProtocolForm\" ng-submit=\"\">\n\n  <div class=\"metadata-container\">\n    <table metadata\n      wins=\"protocol.WIN\"\n      tables=\"protocol.TABLES\"\n      class=\"table table-bordered table-hover\"\n      player-nicks=\"protocol.playerNicks\"\n    >\n    </table >\n    <div class=\"button-container\">\n      <timer></timer>\n      <button class= \"btn btn-primary\" id=\"control-btn\" ng-disabled=\"ProtocolForm.$invalid\" ng-click=\"protocol.saveGame()\">Внести</button>\n      <!-- <button class= \"btn btn-primary\" id=\"control-btn\" ng-disabled=\"ProtocolForm.$invalid\" ng-click=\"protocol.startGame()\">Начать игру</button> -->\n    </div>\n    <div class=\"player-hint\" ng-show=\"ProtocolForm.$invalid\">\n      Пожалуйста заполните все игровые ники и необходимые поля!\n    </div>\n  </div>\n\n  <div class=\"protocol-container\">\n    <table class=\"table table-bordered table-hover clearfix\">\n      <caption>Бланк</caption>\n      <thead>\n        <tr ng-include=\"\'src/tmpls/pages/players-header.html\'\"></tr>\n      </thead>\n      <tbody class=\"player-container\">\n        <tr player\n          ng-repeat=\"player in protocol.game.playerLines track by $index\"\n          number=\"$index\"\n          max-falls=\"protocol.MAX_FALLS\"\n          roles=\"protocol.ROLES\"\n          player-nicks=\"protocol.playerNicks\"\n        >\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <days\n  state=\"protocol.state\"\n  days=\"protocol.days\"\n  players=\"protocol.game.playerLines\"\n  ></days>\n</form>");
$templateCache.put("src/tmpls/pages/timer.html","<div class=\"control-group\" id=\"timerContainer\">\n    <button class=\"btn btn-primary start\"  ng-click=\"timer.toggleState()\" id=\"startTimerBtn\">{{timer.state}}</button>\n    <button class=\"btn btn-primary\" ng-click=\"timer.reset()\" id=\"resetTimerBtn\">Сброс</button>\n    <div id=\"timerTime\">\n    {{timer.time}}\n    </div>\n</div>");}]);