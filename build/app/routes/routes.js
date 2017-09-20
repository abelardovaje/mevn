"use strict";
exports.__esModule = true;
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.app = app;
        this.run();
    }
    Routes.prototype.run = function () {
        this.app.get('/home', function (req, res) {
            res.send(true);
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map