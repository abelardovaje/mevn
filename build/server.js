"use strict";
exports.__esModule = true;
var express = require("express");
var routes_1 = require("./app/routes");
var database_1 = require("./config/database");
var Middlewares_1 = require("./config/Middlewares");
var StaticPaths_1 = require("./config/StaticPaths");
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
        this.staticPaths();
        this.middlewares();
        this.routes();
        this.db();
        this.run();
    }
    /*
        Load all routes
    */
    Server.prototype.routes = function () {
        new routes_1.Routes(this.app);
    };
    /*
        Connect to database
    */
    Server.prototype.db = function () {
        new database_1.Database('localhost', 'test');
    };
    /*
        Load all middlewares
    */
    Server.prototype.middlewares = function () {
        new Middlewares_1.Middlewares(this.app).run();
    };
    /*
        Load all static paths
    */
    Server.prototype.staticPaths = function () {
        new StaticPaths_1.StaticPaths(this.app);
    };
    /*
        Run server
    */
    Server.prototype.run = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Server is running on port ' + _this.port);
        });
    };
    return Server;
}());
new Server(9000);
//# sourceMappingURL=server.js.map