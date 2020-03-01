function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-components-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/initial-page/initial-page.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/initial-page/initial-page.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInitialPageInitialPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"structure\">\n  <div class=\"text\">\n    DEMO\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"structure\">\n  <div class=\"header\">\n\n  </div>\n  <div class=\"body\">\n   \n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/login-signup.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/login-signup.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginSignupLoginSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"structure\">\n  <div class=\" header\">\n  </div>\n  <div class=\"body\">\n    <mat-card class=\"login-box\">\n      <div class=\"tab\">\n        <div [ngClass]=\"toggle ? 'tab-cont-active' : 'tab-cont-not-active'\" (click)=\"logInForm($event)\">Log In</div>\n        <div [ngClass]=\"!toggle ? 'tab-cont-active' : 'tab-cont-not-active'\" (click)=\"signupForm($event)\">Sign Up</div>\n      </div>\n      <div *ngIf=\"toggle;else signUp\" >  \n        <form [formGroup]=\"loginFormGroup\" (ngSubmit)=\"logInCB()\" class=\"login-form\">\n          <input  class=\"text-form-field-li\" \n                  type=\"text\"     \n                  formControlName=\"userId\"\n                  placeholder=\"User Name\"\n                  required>\n          <input  class=\"text-form-field-li\" \n                  type=\"password\"\n                  placeholder=\"Password\"\n                  formControlName=\"password\"\n                  required>\n          <input class=\"submit-button\" [disabled]=\"!loginFormGroup.valid\" type=\"submit\"  value=\"Log In\">\n        </form>\n      </div>\n    </mat-card>\n  </div>\n  \n  <ng-template #signUp>\n    <form [formGroup]=\"signupFormFroup\" (ngSubmit)=\"signUpCB()\" class=\"login-form\">\n      <input  class=\"text-form-field-su\" \n                  type=\"text\"     \n                  formControlName=\"name\"\n                  placeholder=\"name\"\n                  required>  \n      <input  class=\"text-form-field-su\" \n                  type=\"text\"     \n                  formControlName=\"userId\"\n                  placeholder=\"User Name\"\n                  required>  \n      <input  class=\"text-form-field-su\" \n                  type=\"password\"     \n                  formControlName=\"password\"\n                  placeholder=\"password\"\n                  required>  \n      <input  class=\"text-form-field-su\" \n                  type=\"number\"     \n                  formControlName=\"phoneNo\"\n                  placeholder=\"contact\"\n                  required> \n      <input class=\"submit-button\" [disabled]=\"!loginFormGroup.valid\" type=\"submit\"  value=\"Sign Up\">\n    </form>\n  </ng-template>\n</div>";
    /***/
  },

  /***/
  "./src/app/components/components-routing.ts":
  /*!**************************************************!*\
    !*** ./src/app/components/components-routing.ts ***!
    \**************************************************/

  /*! exports provided: AppComponentRouting */

  /***/
  function srcAppComponentsComponentsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentRouting", function () {
      return AppComponentRouting;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-signup/login-signup.component */
    "./src/app/components/login-signup/login-signup.component.ts");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/components/landing-page/landing-page.component.ts");
    /* harmony import */


    var _initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./initial-page/initial-page.component */
    "./src/app/components/initial-page/initial-page.component.ts");

    var routes = [{
      path: '',
      component: _initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_5__["InitialPageComponent"]
    }, {
      path: 'LoginSignupPage',
      component: _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_3__["LoginSignupComponent"]
    }, {
      path: 'LandingPage',
      component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"]
    }];

    var AppComponentRouting = function AppComponentRouting() {
      _classCallCheck(this, AppComponentRouting);
    };

    AppComponentRouting = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppComponentRouting);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-signup/login-signup.component */
    "./src/app/components/login-signup/login-signup.component.ts");
    /* harmony import */


    var _components_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components-routing */
    "./src/app/components/components-routing.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./landing-page/landing-page.component */
    "./src/app/components/landing-page/landing-page.component.ts");
    /* harmony import */


    var _initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./initial-page/initial-page.component */
    "./src/app/components/initial-page/initial-page.component.ts");

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_3__["LoginSignupComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"], _initial_page_initial_page_component__WEBPACK_IMPORTED_MODULE_8__["InitialPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _components_routing__WEBPACK_IMPORTED_MODULE_4__["AppComponentRouting"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/initial-page/initial-page.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/initial-page/initial-page.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInitialPageInitialPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".structure {\n  height: 100%;\n  width: 100%;\n  background-image: -webkit-gradient(linear, left top, right top, from(#000046), to(#1CB5E0));\n  background-image: linear-gradient(to right, #000046, #1CB5E0);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.text {\n  font-weight: bolder;\n  font-style: italic;\n  color: aliceblue;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbml0aWFsLXBhZ2UvaW5pdGlhbC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDJGQUE2RDtFQUE3RCw2REFBNkQ7RUFDN0Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5pdGlhbC1wYWdlL2luaXRpYWwtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cnVjdHVyZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDA0NiwgIzFDQjVFMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgZm9udC1zaXplOiAycmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/initial-page/initial-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/initial-page/initial-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: InitialPageComponent */

  /***/
  function srcAppComponentsInitialPageInitialPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InitialPageComponent", function () {
      return InitialPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var InitialPageComponent =
    /*#__PURE__*/
    function () {
      function InitialPageComponent(router) {
        _classCallCheck(this, InitialPageComponent);

        this.router = router;
      }

      _createClass(InitialPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.networkStatus();
        }
      }, {
        key: "networkStatus",
        value: function networkStatus() {
          var _this = this;

          setTimeout(function () {
            _this.router.navigate(['./LoginSignupPage']);
          }, 5000);
        }
      }]);

      return InitialPageComponent;
    }();

    InitialPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    InitialPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-initial-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./initial-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/initial-page/initial-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./initial-page.component.css */
      "./src/app/components/initial-page/initial-page.component.css")).default]
    })], InitialPageComponent);
    /***/
  },

  /***/
  "./src/app/components/landing-page/landing-page.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/landing-page/landing-page.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLandingPageLandingPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".structure {\n  background-color:#c4c4c4;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: 10vh;\n  width: 100vw;\n  background-image: -webkit-gradient(linear, left top, right top, from(#000046), to(#1CB5E0));\n  background-image: linear-gradient(to right, #000046, #1CB5E0);\n}\n\n.body {\n  height: 90vh;\n  width: 100vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMkZBQTZEO0VBQTdELDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RydWN0dXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojYzRjNGM0O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDQ2LCAjMUNCNUUwKTtcbn1cblxuLmJvZHkge1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/landing-page/landing-page.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/landing-page/landing-page.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppComponentsLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LandingPageComponent =
    /*#__PURE__*/
    function () {
      function LandingPageComponent() {
        _classCallCheck(this, LandingPageComponent);
      }

      _createClass(LandingPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LandingPageComponent;
    }();

    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/landing-page/landing-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing-page.component.css */
      "./src/app/components/landing-page/landing-page.component.css")).default]
    })], LandingPageComponent);
    /***/
  },

  /***/
  "./src/app/components/login-signup/login-signup.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/login-signup/login-signup.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginSignupLoginSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".structure {\n  background-color:#c4c4c4;\n  height: 100vh;\n  width: 100vw;\n}\n\n.header {\n  height: 10vh;\n  width: 100vw;\n  background-image: -webkit-gradient(linear, left top, right top, from(#000046), to(#1CB5E0));\n  background-image: linear-gradient(to right, #000046, #1CB5E0);\n}\n\n.body {\n  height: 90vh;\n  width: 100vw;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.login-box {\n  width: calc(100% - 16px);\n  height: calc(100% - 16px);\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.login-form-header {\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 3vh;\n}\n\n.login-form {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  display: flex;  \n  -webkit-box-align: center;  \n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.text-form-field-li {\n  height: 5vh;\n  width: 80%;\n  margin-top: 9vh;\n  border-radius: 15px;\n  border-color: #c4c4c4;\n  background-color: whitesmoke;\n  padding: 3px 3%;\n  font-size: 14px;\n}\n\n.text-form-field-su {\n  height: 5vh;\n  width: 80%;\n  margin-top: 6vh;\n  border-radius: 15px;\n  border-color: #c4c4c4;\n  background-color: whitesmoke;\n  padding: 3px 3%;\n  font-size: 14px;\n}\n\n.submit-button {\n  position: absolute;\n  z-index: 1000;\n  top: 85%;\n  height: 8vh;\n  width: 50%;\n  color: white;\n  background-image: -webkit-gradient(linear, left top, right top, from(#000046), to(#1CB5E0));\n  background-image: linear-gradient(to right, #000046, #1CB5E0);\n  border-radius: 20px;\n  font-size: 1rem;\n  font-style: italic ;\n}\n\n.tab {\n  height: 8%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.tab-cont-not-active {\n  height: 100%;\n  width: calc(50% - 2px);\n  border: 1px solid black;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.tab-cont-active {\n  height: 100%;\n  width: calc(50% - 2px);\n  border: 1px solid black;\n  background-image: -webkit-gradient(linear, left top, right top, from(#000046), to(#1CB5E0));\n  background-image: linear-gradient(to right, #000046, #1CB5E0);\n  color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n/* GLOBAL CSS */\n\nmat-card {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1zaWdudXAvbG9naW4tc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osMkZBQTZEO0VBQTdELDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IsOEJBQTZCO1VBQTdCLDZCQUE2QjtFQUM3Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw4QkFBNkI7VUFBN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJGQUE2RDtFQUE3RCw2REFBNkQ7RUFDN0QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw4QkFBNkI7VUFBN0IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsMkZBQTZEO0VBQTdELDZEQUE2RDtFQUM3RCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw4QkFBNkI7VUFBN0IsNkJBQTZCO0FBQy9COztBQUdBLGVBQWU7O0FBQ2Y7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1zaWdudXAvbG9naW4tc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RydWN0dXJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjojYzRjNGM0O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbi5oZWFkZXIge1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDAwMDQ2LCAjMUNCNUUwKTtcbn1cblxuLmJvZHkge1xuICBoZWlnaHQ6IDkwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1ib3gge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTZweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTZweCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubG9naW4tZm9ybS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbWFyZ2luLXRvcDogM3ZoO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGRpc3BsYXk6IGZsZXg7ICBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi50ZXh0LWZvcm0tZmllbGQtbGkge1xuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luLXRvcDogOXZoO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXItY29sb3I6ICNjNGM0YzQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDNweCAzJTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udGV4dC1mb3JtLWZpZWxkLXN1IHtcbiAgaGVpZ2h0OiA1dmg7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm9yZGVyLWNvbG9yOiAjYzRjNGM0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBwYWRkaW5nOiAzcHggMyU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHRvcDogODUlO1xuICBoZWlnaHQ6IDh2aDtcbiAgd2lkdGg6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwNDYsICMxQ0I1RTApO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XG59XG5cbi50YWIge1xuICBoZWlnaHQ6IDglO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnRhYi1jb250LW5vdC1hY3RpdmUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDJweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnRhYi1jb250LWFjdGl2ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMnB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDA0NiwgIzFDQjVFMCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cblxuLyogR0xPQkFMIENTUyAqL1xubWF0LWNhcmQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/login-signup/login-signup.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/login-signup/login-signup.component.ts ***!
    \*******************************************************************/

  /*! exports provided: LoginSignupComponent */

  /***/
  function srcAppComponentsLoginSignupLoginSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginSignupComponent", function () {
      return LoginSignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginSignupComponent =
    /*#__PURE__*/
    function () {
      function LoginSignupComponent(fb, router) {
        _classCallCheck(this, LoginSignupComponent);

        this.fb = fb;
        this.router = router;
        this.toggle = true;
        this.loginFormGroup = this.fb.group({
          userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.signupFormFroup = this.fb.group({
          name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phoneNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(LoginSignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} ///////////////////////////////// CALL BACKS /////////////////////////////////////////  

      }, {
        key: "logInForm",
        value: function logInForm(event) {
          this.toggle = true;
        }
      }, {
        key: "signupForm",
        value: function signupForm(event) {
          this.toggle = false;
        }
      }, {
        key: "logInCB",
        value: function logInCB() {
          console.log(this.loginFormGroup.value, this.loginFormGroup.status);
          this.router.navigate(['/LandingPage']);
        }
      }, {
        key: "signUpCB",
        value: function signUpCB() {
          console.log('resp');
        }
      }]);

      return LoginSignupComponent;
    }();

    LoginSignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login-signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-signup/login-signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login-signup.component.css */
      "./src/app/components/login-signup/login-signup.component.css")).default]
    })], LoginSignupComponent);
    /***/
  }
}]);
//# sourceMappingURL=components-components-module-es5.js.map