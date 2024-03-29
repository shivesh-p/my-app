'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var app_routing_module_1 = require('./app-routing.module');
var app_component_1 = require('./app.component');
var server_component_1 = require('./server/server.component');
var servers_component_1 = require('./servers/servers.component');
var success_component_1 = require('./success/success.component');
var warning_component_1 = require('./warning/warning.component');
var test_lifecycle_component_1 = require('./test-lifecycle/test-lifecycle.component');
var highlight_directive_1 = require('./directives/highlight.directive');
var AppModule = /** @class */ (function () {
  function AppModule() {}
  AppModule = __decorate(
    [
      core_1.NgModule({
        declarations: [
          app_component_1.AppComponent,
          server_component_1.ServerComponent,
          servers_component_1.ServersComponent,
          success_component_1.SuccessComponent,
          warning_component_1.WarningComponent,
          test_lifecycle_component_1.TestLifecycleComponent,
          highlight_directive_1.HighlightDirective,
        ],
        imports: [
          platform_browser_1.BrowserModule,
          app_routing_module_1.AppRoutingModule,
          forms_1.FormsModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
      }),
    ],
    AppModule
  );
  return AppModule;
})();
exports.AppModule = AppModule;
