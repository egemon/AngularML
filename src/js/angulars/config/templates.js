angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("src/tmpls/pages/metadata.html","<caption>Информация об игре</caption>\n<tbody>\n    <tr>\n        <td>Стол</td>\n        <td>\n            <select class=\"form-control\" required ng-model=\"metadata.data.table\" name=\"\" id=\"\">\n                <option ng-repeat=\"table in tables\">{{table}}</option>\n            </select>\n        </td>\n    </tr>\n    <tr>\n        <td>Дата</td>\n        <td>\n            <input class=\"form-control\" required ng-model=\"metadata.data.date\" type=\"date\" name=\"\" value=\"\" placeholder=\"\">\n        </td>\n    </tr>\n    <tr>\n        <td>Ведущий</td>\n        <td>\n            <input class=\"form-control\" required ng-model=\"metadata.data.ref\" type=\"text\" name=\"\" value=\"\" placeholder=\"\">\n        </td>\n    </tr>\n    <tr>\n        <td>Победа</td>\n        <td>\n            <select class=\"form-control\" required ng-model=\"metadata.data.win\" name=\"\" id=\"\">\n                <option ng-repeat=\"win in wins\">{{win}}</option>\n            </select>\n        </td>\n    </tr>\n    <tr>\n        <td>Номер игры</td>\n        <td>\n            <input class=\"form-control\" required ng-model=\"metadata.data.gameNumber\" type=\"number\" name=\"\" value=\"\" placeholder=\"\" min=\"0\" step=\"1\">\n        </td>\n    </tr>\n\n</tbody>\n");
$templateCache.put("src/tmpls/pages/player.html","<td>{{player.data.number}}</td>\n<td>\n    <input class=\"best-checkbox\" type=\"checkbox\" name=\"best\" value=\"\" ng-model=\"player.data.BP\">\n</td>\n<td>\n    <input class=\"best-checkbox\" type=\"checkbox\" name=\"best\" value=\"\" ng-model=\"player.data.BR\">\n</td>\n<td>\n    <input required class=\"player-nick form-control\" type=\"text\" ng-model=\"player.data.nick\">\n</td>\n<td>\n    <select required class=\"player-role form-control\" name=\"\" id=\"\" ng-model=\"player.data.role\">\n        <option ng-repeat= \"role in roles\">{{role}}</option>\n    </select>\n</td>\n<td class=\"falls\">\n    <button type=\"\" class=\"decrFall btn btn-primary\" ng-disabled=\"player.data.falls == 0\" ng-click=\"player.decrFall()\">-</button>\n    <span>{{player.data.falls}}</span>\n    <button type=\"\" class=\"incrFall btn btn-primary\" ng-disabled=\"player.data.falls == maxFalls\" ng-click=\"player.incrFall()\">+</button>\n</td>\n\n<!--     <input type=\"checkbox\">Убит\n<input type=\"checkbox\">Проверен шерифом\n<input type=\"checkbox\">Проверен доном -->\n");
$templateCache.put("src/tmpls/pages/players-header.html","<th>#</th>\n<th>И</th>\n<th>В</th>\n<th>Ник Игрока</th>\n<th>Роль</th>\n<th>Фоллы</th>");
$templateCache.put("src/tmpls/pages/protocol.html","<form novalidate accept-charset=\"utf-8\" name=\"ProtocolForm\" ng-submit=\"\">\n  <div class=\"metadata-container\">\n    <table metadata\n      wins=\"protocol.WIN\"\n      tables=\"protocol.TABLES\"\n      class=\"table table-bordered table-hover\"\n    >\n    </table >\n    <div class=\"button-container\">\n      <timer></timer>\n      <button class= \"btn btn-success\" ng-disabled=\"ProtocolForm.$invalid\" ng-click=\"protocol.saveGame(ProtocolForm)\">Внести</button>\n    </div>\n    <div ng-show=\"ProtocolForm.$invalid\">\n      Пожалуйста заполните все игровые ники и необходимые поля!\n    </div>\n  </div>\n  <div class=\"protocol-container\">\n    <table class=\"table table-bordered table-hover clearfix\">\n      <caption>Бланк</caption>\n      <thead>\n        <tr ng-include=\"\'src/tmpls/pages/players-header.html\'\"></tr>\n      </thead>\n      <tbody class=\"player-container\">\n        <tr player\n          ng-repeat=\"player in protocol.game.playerLines track by $index\"\n          number=\"$index\"\n          max-falls=\"protocol.MAX_FALLS\"\n          roles=\"protocol.ROLES\"\n        >\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</form>");
$templateCache.put("src/tmpls/pages/timer.html","<div class=\"control-group\" id=\"timerContainer\">\n    <button class=\"btn btn-success start\"  ng-click=\"timer.toggleState()\" id=\"startTimerBtn\">{{timer.state}}</button>\n    <button class=\"btn btn-warning\" ng-click=\"timer.reset()\" id=\"resetTimerBtn\">Сброс</button>\n    <div id=\"timerTime\">\n    {{timer.time}}\n    </div>\n</div>");}]);