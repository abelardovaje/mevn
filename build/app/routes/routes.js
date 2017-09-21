"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var _1 = require("../../vendor/");
var Routes = /** @class */ (function (_super) {
    __extends(Routes, _super);
    function Routes(app) {
        var _this = _super.call(this, app) || this;
        _this.app = app;
        _this.run();
        return _this;
    }
    Routes.prototype.run = function () {
        this.get('/home', 'UserController@index');
        this.get('/about', 'UserController@about');
    };
    return Routes;
}(_1.BaseRoute));
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map