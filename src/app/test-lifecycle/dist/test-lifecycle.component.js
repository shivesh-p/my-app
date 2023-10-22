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
exports.TestLifecycleComponent = void 0;
var core_1 = require('@angular/core');
var TestLifecycleComponent = /** @class */ (function () {
  function TestLifecycleComponent() {
    console.log('constructorTEST===', this.elementP);
  }
  TestLifecycleComponent.prototype.ngOnInit = function () {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('ngoninitTEST===', this.elementP);
  };
  TestLifecycleComponent.prototype.ngAfterViewInit = function () {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngafterviewinitTEST===', this.elementP);
  };
  __decorate(
    [core_1.ViewChild('pElement')],
    TestLifecycleComponent.prototype,
    'elementP'
  );
  TestLifecycleComponent = __decorate(
    [
      core_1.Component({
        selector: 'app-test-lifecycle',
        templateUrl: './test-lifecycle.component.html',
        styleUrls: ['./test-lifecycle.component.css'],
      }),
    ],
    TestLifecycleComponent
  );
  return TestLifecycleComponent;
})();
exports.TestLifecycleComponent = TestLifecycleComponent;
