"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServersComponent = void 0;
var core_1 = require("@angular/core");
var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = 'No Server Created';
        this.serverName = '2-Way Binding';
        this.showServerCreation = false;
        this.serverList = ['Server 1', 'Server 2'];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.onClickCreateServer = function () {
        this.serverList.push(this.serverName);
        this.showServerCreation = true;
        this.serverCreationStatus =
            'Server was created. Name is ' + this.serverName;
    };
    ServersComponent.prototype.onInputData = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent.prototype.ngOnInit = function () { };
    ServersComponent = __decorate([
        core_1.Component({
            selector: 'app-servers',
            templateUrl: './servers.component.html',
            // // template: `<ul>
            // //   <li class="item1">1</li>
            // //   <li class="item2">2</li>
            // //   <li class="item3">3</li>
            // //   <li class="item4">4</li>
            // //   <li class="item5">5</li>
            // // </ul>`,
            // template: '<app-server></app-server>',
            styleUrls: ['./servers.component.css']
        })
    ], ServersComponent);
    return ServersComponent;
}());
exports.ServersComponent = ServersComponent;
