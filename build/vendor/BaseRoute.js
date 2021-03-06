"use strict";
exports.__esModule = true;
var Middlewares = require("../config/Middlewares");
var path = require("path");
var Controller_1 = require("./Controller");
var BaseRoute = /** @class */ (function () {
    function BaseRoute(app) {
        this.app = app;
        this.Middlewares = Middlewares;
    }
    BaseRoute.prototype.get = function (url, controllerName, middlewareArray) {
        var arry = controllerName.split('@');
        var method = new Controller_1.Controller(arry[0]);
        var middlewares = [];
        if (middlewareArray) {
            if (middlewareArray.length > 0) {
                for (var x in middlewareArray) {
                    var newMiddleware = this.Middlewares[middlewareArray[x]];
                    if (newMiddleware) {
                        middlewares.push(newMiddleware);
                    }
                    else {
                        throw new Error(middlewareArray[x] + ' Middleware is not defined');
                    }
                }
            }
        }
        if (method) {
            if (!method[arry[1]]) {
                throw new Error('Method ' + arry[1] + ' is not declared');
            }
            this.app.get(url, middlewares, method[arry[1]]);
        }
        else {
            throw new Error('Controller ' + arry[0] + ' is not created');
        }
    };
    BaseRoute.prototype.post = function (url, controllerName, middlewareArray) {
        var arry = controllerName.split('@');
        var method = new Controller_1.Controller(arry[0]);
        var middlewares = [];
        if (middlewareArray) {
            if (middlewareArray.length > 0) {
                for (var x in middlewareArray) {
                    var newMiddleware = this.Middlewares[middlewareArray[x]];
                    if (newMiddleware) {
                        middlewares.push(newMiddleware);
                    }
                    else {
                        throw new Error(middlewareArray[x] + ' Middleware is not defined');
                    }
                }
            }
        }
        if (method) {
            if (!method[arry[1]]) {
                throw new Error('Method ' + arry[1] + ' is not declared');
            }
            this.app.post(url, middlewares, method[arry[1]]);
        }
        else {
            throw new Error('Controller ' + arry[0] + ' is not created');
        }
    };
    BaseRoute.prototype.view = function (url, viewName) {
        this.app.get(url, function (req, res, next) {
            res.sendFile(path.join(__dirname, '../../resources/views', viewName + '.html'), function (err) {
                if (err) {
                    console.log(err);
                    res.status(err.status).end();
                }
            });
        });
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=BaseRoute.js.map