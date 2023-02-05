"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WarningComponent = void 0;
var core_1 = require("@angular/core");
var WarningComponent = /** @class */ (function () {
    function WarningComponent() {
        this.userName = '';
    }
    WarningComponent.prototype.onClickButton = function () {
        this.userName = '';
    };
    WarningComponent = __decorate([
        core_1.Component({
            templateUrl: './warning.component.html',
            selector: 'app-warning',
            styles: [
                "\n      p {\n        color: rgb(142, 142, 215);\n      }\n    ",
            ]
        })
    ], WarningComponent);
    return WarningComponent;
}());
exports.WarningComponent = WarningComponent;
