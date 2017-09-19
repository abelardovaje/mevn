"use strict";
exports.__esModule = true;
var express = require("express");
var Routes = require("./app/routes");
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
        this.app = express();
        this.run();
        console.log(Routes.Routes);
    }
    Server.prototype.routes = function () {
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