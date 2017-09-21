"use strict";
exports.__esModule = true;
var Controller_1 = require("./Controller");
var BaseRoute = /** @class */ (function () {
    function BaseRoute(app) {
        this.app = app;
    }
    BaseRoute.prototype.get = function (url, controllerName) {
        var arry = controllerName.split('@');
        var method = new Controller_1.Controller(arry[0]);
        if (method) {
            if (!method[arry[1]]) {
                throw new Error('Method ' + arry[1] + ' is not declared');
            }
            this.app.get(url, method[arry[1]]);
        }
        else {
            throw new Error('Controller ' + arry[0] + ' is not created');
        }
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=BaseRoute.js.map