"use strict";
exports.__esModule = true;
var Controllers = require("../app/http/controllers");
var Controller = /** @class */ (function () {
    function Controller(controllerName) {
        this.controllerName = controllerName;
        var CTRL = Controllers;
        if (CTRL[controllerName]) {
            return new CTRL[controllerName]();
        }
    }
    return Controller;
}());
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map