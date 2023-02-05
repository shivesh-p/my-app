"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SuccessComponent = void 0;
var core_1 = require("@angular/core");
var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
        this.toggleDisplay = false;
        this.logArray = [];
    }
    SuccessComponent.prototype.ngOnInit = function () { };
    SuccessComponent.prototype.onClickLog = function (event) {
        this.toggleDisplay = !this.toggleDisplay;
        this.logArray.push(event);
    };
    SuccessComponent.prototype.getColorForBackground = function (log) {
        return this.logArray.indexOf(log) >= 4 ? 'dodgerblue' : 'white';
    };
    SuccessComponent.prototype.getClassForLogs = function (log) {
        return this.logArray.indexOf(log) >= 4 ? true : false;
    };
    SuccessComponent = __decorate([
        core_1.Component({
            selector: 'app-success',
            templateUrl: './success.component.html',
            styleUrls: ['./success.component.css']
        })
    ], SuccessComponent);
    return SuccessComponent;
}());
exports.SuccessComponent = SuccessComponent;
