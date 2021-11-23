function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/create-employee/create-employee.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/create-employee/create-employee.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCreateEmployeeCreateEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<button id=\"close\" (click)=\"CloseEmployeePopUp()\" class=\"registerbtn\">Close</button>\n\n<form [formGroup]=\"employeesFormGroup\" class=\"container\" style=\"text-align: center\">\n    <h2>Create Employee</h2>\n    <label style=\"color: blue\"><b>Employee ID :</b></label>\n      <div>\n      <input type=\"text\" formControlName=\"employeeId\" > \n      <div *ngIf=\"employeesFormGroup.controls.employeeId.invalid && (employeesFormGroup.controls.employeeId.dirty||\n      employeesFormGroup.controls.employeeId.touched )\">\n     <div *ngIf=\"employeesFormGroup.controls.employeeId.errors.required\"  class=\"error_msg\">\n      Employee Id is required.\n     </div>    \n     </div>\n    </div>\n    <label style=\"color: blue\"><b> First Name :</b></label>\n    <div>\n    <input type=\"text\" formControlName=\"employeefirstName\" >\n      <div *ngIf=\"employeesFormGroup.controls.employeefirstName.invalid && (employeesFormGroup.controls.employeefirstName.dirty||\n      employeesFormGroup.controls.employeefirstName.touched )\">\n     <div *ngIf=\"employeesFormGroup.controls.employeefirstName.errors.required\"  class=\"error_msg\">\n      First Name  is required.\n     </div>    \n     </div>\n     </div>\n      <br>\n      <br>\n      <label style=\"color: blue\"><b> Last Name :</b> </label>\n      <div>\n      <input type=\"text\" formControlName=\"employeelastName\" >\n      <div *ngIf=\"employeesFormGroup.controls.employeelastName.invalid && (employeesFormGroup.controls.employeelastName.dirty||\n      employeesFormGroup.controls.employeelastName.touched )\">\n     <div *ngIf=\"employeesFormGroup.controls.employeelastName.errors.required\"  class=\"error_msg\">\n      Last Name is required.\n     </div>    \n     </div>\n     </div>\n       <label style=\"color: blue\"><b> Address : </b></label>\n       <div>\n      <input type=\"text\" formControlName=\"employeeAddress\">\n      <div *ngIf=\"employeesFormGroup.controls.employeeAddress.invalid && (employeesFormGroup.controls.employeeAddress.dirty||\n       employeesFormGroup.controls.employeeAddress.touched )\">\n      <div *ngIf=\"employeesFormGroup.controls.employeeAddress.errors.required\"  class=\"error_msg\">\n         Address is required.\n      </div>    \n      </div>\n      </div>\n       <br>\n       <br>\n       <label style=\"color: blue\"><b>Date Of Birth : </b></label>\n       <div>\n      <input type=\"date\" formControlName=\"employeeDob\" >\n      <div *ngIf=\"employeesFormGroup.controls.employeeDob.invalid && (employeesFormGroup.controls.employeeDob.dirty||\n       employeesFormGroup.controls.employeeDob.touched )\">\n      <div *ngIf=\"employeesFormGroup.controls.employeeDob.errors.required\"  class=\"error_msg\">\n         Date Of Birth is required.\n      </div>    \n      </div>\n      </div>\n      \n      <label style=\"color: blue\"><b>  Mobile No. :</b> </label>\n      <div>\n      <input type=\"text\" formControlName=\"employeemMobileNo\">\n      <div *ngIf=\"employeesFormGroup.controls.employeemMobileNo.invalid && (employeesFormGroup.controls.employeemMobileNo.dirty||\n       employeesFormGroup.controls.employeemMobileNo.touched )\">\n      <div *ngIf=\"employeesFormGroup.controls.employeemMobileNo.errors.required\"  class=\"error_msg\">\n         Mobile No. is required.\n      </div>    \n      </div>\n      </div>\n       <br>\n       <br>\n       <div style=\"position: relative;right: 112px;\">\n      <label style=\"color: blue;\"><b>  City : </b></label>\n      <input type=\"text\" formControlName=\"employeeCity\" >\n      <div *ngIf=\"employeesFormGroup.controls.employeeCity.invalid && (employeesFormGroup.controls.employeeCity.dirty||\n       employeesFormGroup.controls.employeeCity.touched )\">\n      <div *ngIf=\"employeesFormGroup.controls.employeeCity.errors.required\"  class=\"error_msg\">\n         City  is required.\n      </div>    \n      </div>\n      </div>\n       <br>\n       <div>\n      <button id=\"Submit\" (click)=\"SubmitEmployeeRecords(employeesFormGroup)\" class=\"registerbtn\">Save </button>\n      <button id=\"Submit\" (click)=\"onClear()\" class=\"registerbtn\" style=\"left: 11px;\n      position: relative;\">Clear </button>\n      </div>\n  \n  </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/employees/employees.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/employees/employees.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEmployeesEmployeesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button id=\"Logout\" (click)=\"logout()\" class=\"registerbtn logoutButton\">Log Out </button>\n\n<button id=\"Logout\" (click)=\"createEmployee()\" class=\"registerbtn createButton\" >Create Employee </button>\n<br>\n<br>\n<br>\n<hr>\n<div>\n<table>\n<thead>\n    <tr>\n    <th>Employee ID</th>\n    <th>First Name</th>\n    <th>Last Name</th>\n    <th>Address</th>\n    <th>Date Of Birth</th>\n    <th>Mobile No.</th>\n    <th>City</th>\n    </tr>\n</thead>\n<tbody>\n<tr *ngFor=\"let employee of EmployeesList; let i=index;trackBy:trackByEmployeeId\">\n<td>{{employee.employeeId}}</td>\n<td>{{employee.employeefirstName}}</td>\n<td>{{employee.employeelastName}}</td>\n<td>{{employee.employeeAddress}}</td>\n<td>{{employee.employeeDob}}</td>\n<td>{{employee.employeemMobileNo}}</td>\n<td>{{employee.employeeCity}}</td>\n<td><button id=\"update\" (click)=\"onUpdate(employee)\" class=\"registerbtn\" style=\"height: 35px;width: 85px\" >Update </button></td>\n<td><button id=\"delete\" (click)=\"onDelete(employee)\" class=\"registerbtn\" style=\"height: 35px;width: 85px\" >Delete </button></td>\n</tr>\n</tbody>\n</table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"loginFormGroup\" style=\"text-align: center\" class=\"container\">\n\n    <label style=\"color: blue\"> <b> User Name:</b></label>\n    <div>\n    <input type=\"text\" formControlName=\"userName\" >\n    <div *ngIf=\"loginFormGroup.controls.userName.invalid && (loginFormGroup.controls.userName.dirty||\n    loginFormGroup.controls.userName.touched )\">\n    <div *ngIf=\"loginFormGroup.controls.userName.errors.required\"  class=\"error_msg\">\n                User Name is required.\n    </div>    \n    </div>\n    </div>\n    <br>\n    <br>\n    <label style=\"color: blue\"><b>Password: </b></label>\n    <div>\n    <input type=\"password\" formControlName=\"password\" >\n    <div *ngIf=\"loginFormGroup.controls.password.invalid && (loginFormGroup.controls.password.dirty||\n    loginFormGroup.controls.password.touched )\">\n    <div *ngIf=\"loginFormGroup.controls.password.errors.required\" class=\"error_msg\" >\n                Password is required.\n    </div>    \n    </div>\n    </div>\n     <br>\n     <br>\n     <hr style=\"width: 50%\">\n    <button id=\"Submit\" (click)=\"authencateCredentials(loginFormGroup)\" class=\"registerbtn\">Login</button>\n\n    <br>\n     Create an account? <a (click)=\"NavigateToSignUp()\" >Sign up</a>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sign-up/sign-up.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sign-up/sign-up.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"registerFormGroup\" class=\"container\" style=\"text-align: center\">\n\n    <h2>Register</h2>\n    <p>Please fill in this form to create an account.</p>\n    <hr style=\"width: 50%\">\n\n    <label style=\"color: blue\"><b>  First Name :</b>:</label>\n    <div>\n      <input type=\"text\" formControlName=\"firstName\" >\n      <div *ngIf=\"registerFormGroup.controls.firstName.invalid && (registerFormGroup.controls.firstName.dirty||\n            registerFormGroup.controls.firstName.touched )\">\n      <div *ngIf=\"registerFormGroup.controls.firstName.errors.required\"  class=\"error_msg\">\n            First Name is required.\n      </div>    \n    </div>\n    </div>\n      <br>\n      <br>\n      <label style=\"color: blue\"><b> Last Name :</b> </label>\n      <input type=\"password\" formControlName=\"lastName\" >\n      <div *ngIf=\"registerFormGroup.controls.lastName.invalid && (registerFormGroup.controls.lastName.dirty||\n            registerFormGroup.controls.lastName.touched )\">\n      <div *ngIf=\"registerFormGroup.controls.lastName.errors.required\"  class=\"error_msg\">\n            Last Name is required.\n      </div>    \n    </div>\n       <br>\n       <br>\n       <label style=\"color: blue\"><b> Password : </b></label>\n      <input type=\"password\" formControlName=\"password\" >\n      <div *ngIf=\"registerFormGroup.controls.password.invalid && (registerFormGroup.controls.password.dirty||\n            registerFormGroup.controls.password.touched )\">\n      <div *ngIf=\"registerFormGroup.controls.password.errors.required\"  class=\"error_msg\">\n            Password is required.\n      </div>    \n    </div>\n       <br>\n       <br>\n       <label style=\"color: blue\"><b>    Email : </b></label>\n      <input type=\"text\" formControlName=\"email\" >\n      <div *ngIf=\"registerFormGroup.controls.email.invalid && (registerFormGroup.controls.email.dirty||\n            registerFormGroup.controls.email.touched )\">\n      <div *ngIf=\"registerFormGroup.controls.email.errors.required\"  class=\"error_msg\">\n            Email is required.\n      </div>    \n      </div>\n       <br>\n       <br>\n       <label style=\"color: blue\"><b>  Address :</b> </label>\n       <div>\n      <input type=\"text\" formControlName=\"address\">\n      <div *ngIf=\"registerFormGroup.controls.address.invalid && (registerFormGroup.controls.address.dirty||\n            registerFormGroup.controls.address.touched )\">\n      <div *ngIf=\"registerFormGroup.controls.address.errors.required\"  class=\"error_msg\">\n            Address is required.\n      </div>    \n      </div>\n      </div>\n       <br>\n       <br>\n<label style=\"color: blue\"><b>   Date Of Birth : </b></label>\n      <div>\n      <input type=\"date\" formControlName=\"dob\" >\n      <div *ngIf=\"registerFormGroup.controls.dob.invalid && (registerFormGroup.controls.dob.dirty||\n      registerFormGroup.controls.dob.touched )\">\n     <div *ngIf=\"registerFormGroup.controls.dob.errors.required\"  class=\"error_msg\">\n      Date Of Birth is required.\n     </div>    \n     </div>\n     </div>\n       <br>\n       <br>\n      <label style=\"color: blue\"><b>Organization Name : </b></label>\n      <div>\n      <input type=\"text\" formControlName=\"company\" >\n      <div *ngIf=\"registerFormGroup.controls.company.invalid && (registerFormGroup.controls.company.dirty||\n            registerFormGroup.controls.company.touched )\">\n      <div *ngIf=\"registerFormGroup.controls.company.errors.required\"  class=\"error_msg\">\n            Company is required.\n      </div>    \n      </div>\n      </div>\n       <br>\n       <br>\n\n      <button id=\"Submit\" (click)=\"registerUserRecords(registerFormGroup)\" class=\"registerbtn\">Register</button>\n  \n      <br>\n      <br>\n       Already have an account? <a (click)=\"NavigateToLogin()\" style=\"color:green;cursor: pointer;\">Sign in</a>\n  </form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 style=\"color: red;font-family: 'Times New Roman', Times, serif;text-align: center\">Employee Management System</h1>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/CommonClasses/common-url.ts":
  /*!*********************************************!*\
    !*** ./src/app/CommonClasses/common-url.ts ***!
    \*********************************************/

  /*! exports provided: CommonUrl */

  /***/
  function srcAppCommonClassesCommonUrlTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonUrl", function () {
      return CommonUrl;
    });

    var CommonUrl = /*#__PURE__*/function () {
      function CommonUrl() {
        _classCallCheck(this, CommonUrl);
      }

      _createClass(CommonUrl, null, [{
        key: "getBaseHttpUrl",
        value: function getBaseHttpUrl() {
          return this.BaseUrl;
        }
      }]);

      return CommonUrl;
    }();

    CommonUrl.BaseUrl = "http://192.168.43.185:8080";
    /***/
  },

  /***/
  "./src/app/Components/create-employee/create-employee.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/Components/create-employee/create-employee.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCreateEmployeeCreateEmployeeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY3JlYXRlLWVtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/Components/create-employee/create-employee.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/Components/create-employee/create-employee.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CreateEmployeeComponent */

  /***/
  function srcAppComponentsCreateEmployeeCreateEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function () {
      return CreateEmployeeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_Services_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/employee.service */
    "./src/app/Services/employee.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_Services_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/snack-bar.service */
    "./src/app/Services/snack-bar.service.ts");
    /* harmony import */


    var src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/common-validation.service */
    "./src/app/Services/common-validation.service.ts");

    var CreateEmployeeComponent = /*#__PURE__*/function () {
      function CreateEmployeeComponent(formBuilder, employeeService, matDialog, commonValidationService, snackBarService) {
        _classCallCheck(this, CreateEmployeeComponent);

        this.formBuilder = formBuilder;
        this.employeeService = employeeService;
        this.matDialog = matDialog;
        this.commonValidationService = commonValidationService;
        this.snackBarService = snackBarService;
      }

      _createClass(CreateEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.employeesFormGroup = this.commonValidationService.commonEmployeeFormGroup;
        }
      }, {
        key: "SubmitEmployeeRecords",
        value: function SubmitEmployeeRecords(EmployeeFormGroup) {
          var _this = this;

          this.commonValidationService.validateWholeFormGroup(EmployeeFormGroup);

          if (EmployeeFormGroup.valid) {
            this.matDialog.closeAll();

            if (EmployeeFormGroup.get('empTrId').value === '') {
              this.employeeService.submitEmployeeRecord(EmployeeFormGroup.value).subscribe(function (flag) {
                _this.snackBarService.openSnackBar(flag);

                _this.commonValidationService.setStateToSubject("Load Employee List.");

                _this.onClear();
              });
            } else {
              this.employeeService.updateEmployeeRecord(EmployeeFormGroup.value).subscribe(function (flag) {
                _this.commonValidationService.setStateToSubject("Load Employee List.");

                _this.snackBarService.openSnackBar(flag);

                _this.onClear();
              });
            }
          }
        }
      }, {
        key: "CloseEmployeePopUp",
        value: function CloseEmployeePopUp() {
          this.matDialog.closeAll();
        }
      }, {
        key: "onClear",
        value: function onClear() {
          this.employeesFormGroup = this.commonValidationService.InitializeCommonFormGroup();
        }
      }]);

      return CreateEmployeeComponent;
    }();

    CreateEmployeeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_Services_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_6__["CommonValidationServiceService"]
      }, {
        type: src_app_Services_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]
      }];
    };

    CreateEmployeeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-employee',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-employee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/create-employee/create-employee.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-employee.component.css */
      "./src/app/Components/create-employee/create-employee.component.css"))["default"]]
    })], CreateEmployeeComponent);
    /***/
  },

  /***/
  "./src/app/Components/employees/employees.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/Components/employees/employees.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEmployeesEmployeesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".createButton{\n    float: right;\n    position: relative;\n    right: 265px;\n    height: 45px;\n    width: 143px;\n    background-color: green\n}\n\n.logoutButton{\n    float: right;\n    position: relative;\n    bottom:70px;\n    top:0px;\n    right:15%;\n    height: 45px;\n    width: 100px;\n    background-color:darkred\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9lbXBsb3llZXMvZW1wbG95ZWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7SUFDWixZQUFZO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZUJ1dHRvbntcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAyNjVweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDE0M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuXG59XG5cbi5sb2dvdXRCdXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206NzBweDtcbiAgICB0b3A6MHB4O1xuICAgIHJpZ2h0OjE1JTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ZGFya3JlZFxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/Components/employees/employees.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Components/employees/employees.component.ts ***!
    \*************************************************************/

  /*! exports provided: EmployeesComponent */

  /***/
  function srcAppComponentsEmployeesEmployeesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function () {
      return EmployeesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_Services_token_management_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Services/token-management.service */
    "./src/app/Services/token-management.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/employee.service */
    "./src/app/Services/employee.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../create-employee/create-employee.component */
    "./src/app/Components/create-employee/create-employee.component.ts");
    /* harmony import */


    var src_app_Services_snack_bar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/Services/snack-bar.service */
    "./src/app/Services/snack-bar.service.ts");
    /* harmony import */


    var src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/Services/common-validation.service */
    "./src/app/Services/common-validation.service.ts"); //import { CommonValidationServiceService } from 'src/app/Services/common-validation-service.service';


    var EmployeesComponent = /*#__PURE__*/function () {
      function EmployeesComponent(formBuilder, tokenService, router, employeeService, matDialog, matDialogConfig, commonValidationService, snackBarService) {
        var _this2 = this;

        _classCallCheck(this, EmployeesComponent);

        this.formBuilder = formBuilder;
        this.tokenService = tokenService;
        this.router = router;
        this.employeeService = employeeService;
        this.matDialog = matDialog;
        this.matDialogConfig = matDialogConfig;
        this.commonValidationService = commonValidationService;
        this.snackBarService = snackBarService;
        this.commonValidationService.getStateFromSubject().subscribe(function (StateChangeFlag) {
          _this2.getAllEmployeesList();
        });
      }

      _createClass(EmployeesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.EmployeesList = [];
          this.getAllEmployeesList();
        }
      }, {
        key: "logout",
        value: function logout() {
          //============Log Out===================
          this.tokenService.clearTokenFromStorage();
          this.router.navigateByUrl('/Login');
        }
      }, {
        key: "createEmployee",
        value: function createEmployee() {
          var matdialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
          matdialogConfig.disableClose = true;
          matdialogConfig.autoFocus = true;
          matdialogConfig.height = '50%';
          matdialogConfig.width = '50%';
          this.commonValidationService.setcommonEmployeeFormGroup();
          this.matDialog.open(_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_7__["CreateEmployeeComponent"], matdialogConfig);
        }
      }, {
        key: "getAllEmployeesList",
        value: function getAllEmployeesList() {
          var _this3 = this;

          this.employeeService.getAllEmployeeRecord().subscribe(function (employeeList) {
            _this3.EmployeesList = employeeList;
            console.log(_this3.EmployeesList);
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(employeeDetails) {
          this.commonValidationService.populateForm(employeeDetails);
          console.log(employeeDetails); //loaded Create Employee Component dynamically

          var matdialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]();
          matdialogConfig.disableClose = true;
          matdialogConfig.autoFocus = true;
          matdialogConfig.height = '50%';
          matdialogConfig.width = '50%';
          this.matDialog.open(_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_7__["CreateEmployeeComponent"], matdialogConfig);
        }
      }, {
        key: "onDelete",
        value: function onDelete(employeeDetails) {
          var _this4 = this;

          console.log(employeeDetails.empTrId);
          this.employeeService.deleteEmployeeRecord(employeeDetails.empTrId).subscribe(function (Flag) {
            _this4.snackBarService.openSnackBar(Flag);
          });
        } //=========For Performance optimization in case of delete and insert row into table=========

      }, {
        key: "trackByEmployeeId",
        value: function trackByEmployeeId(index, employee) {
          return employee.employeeId;
        }
      }]);

      return EmployeesComponent;
    }();

    EmployeesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_Services_token_management_service__WEBPACK_IMPORTED_MODULE_3__["TokenManagementService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_Services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogConfig"]
      }, {
        type: src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_9__["CommonValidationServiceService"]
      }, {
        type: src_app_Services_snack_bar_service__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"]
      }];
    };

    EmployeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employees',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./employees.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/employees/employees.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./employees.component.css */
      "./src/app/Components/employees/employees.component.css"))["default"]]
    })], EmployeesComponent);
    /***/
  },

  /***/
  "./src/app/Components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/Components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/Components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_token_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/token-management.service */
    "./src/app/Services/token-management.service.ts");
    /* harmony import */


    var src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/login.service */
    "./src/app/Services/login.service.ts");
    /* harmony import */


    var src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Services/common-validation.service */
    "./src/app/Services/common-validation.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, router, tokenService, loginService, commonValidationService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.tokenService = tokenService;
        this.loginService = loginService;
        this.commonValidationService = commonValidationService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //====If token available then redirect to home screen to avoid multitab login======
          if (this.tokenService.checkTokenAvailability()) {
            this.router.navigateByUrl('/Home');
          }

          this.InitializeLoginFormGroup();
        }
      }, {
        key: "InitializeLoginFormGroup",
        value: function InitializeLoginFormGroup() {
          this.loginFormGroup = this.formBuilder.group({
            userName: [''],
            password: ['']
          });
        }
      }, {
        key: "authencateCredentials",
        value: function authencateCredentials(formGroup) {
          var _this5 = this;

          this.commonValidationService.validateWholeFormGroup(formGroup);

          if (formGroup.valid) {
            this.loginService.authenticateUser(formGroup.value).subscribe(function (value) {
              if (value !== null && value !== '') {
                _this5.tokenService.setTokenToLocalStorage(value);

                _this5.router.navigateByUrl('/Home');
              } else {
                alert(" Please Enter Correct UserName and Password .");
              }
            }, function (error) {
              alert(error);
            });
          }
        }
      }, {
        key: "NavigateToSignUp",
        value: function NavigateToSignUp() {
          this.router.navigateByUrl('/SignUp');
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_Services_token_management_service__WEBPACK_IMPORTED_MODULE_4__["TokenManagementService"]
      }, {
        type: src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }, {
        type: src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_6__["CommonValidationServiceService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/Components/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/Components/sign-up/sign-up.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/Components/sign-up/sign-up.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/Components/sign-up/sign-up.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Components/sign-up/sign-up.component.ts ***!
    \*********************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppComponentsSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_Services_sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Services/sign-up.service */
    "./src/app/Services/sign-up.service.ts");
    /* harmony import */


    var src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Services/common-validation.service */
    "./src/app/Services/common-validation.service.ts");

    var SignUpComponent = /*#__PURE__*/function () {
      function SignUpComponent(formBuilder, router, signUpService, commonValidationService) {
        _classCallCheck(this, SignUpComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.signUpService = signUpService;
        this.commonValidationService = commonValidationService;
      }

      _createClass(SignUpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.InitailizeFormGroup();
        }
      }, {
        key: "InitailizeFormGroup",
        value: function InitailizeFormGroup() {
          this.registerFormGroup = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            password: [''],
            emailAddress: [''],
            address: [''],
            dob: [''],
            company: ['']
          });
        }
      }, {
        key: "NavigateToLogin",
        value: function NavigateToLogin() {
          this.router.navigateByUrl('/Login');
        }
      }, {
        key: "registerUserRecords",
        value: function registerUserRecords(formGroup) {
          this.commonValidationService.validateWholeFormGroup(formGroup);

          if (formGroup.valid) {
            this.signUpService.registerRecords(formGroup.value).subscribe(function (flag) {
              alert(flag);
            });
          }
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_Services_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"]
      }, {
        type: src_app_Services_common_validation_service__WEBPACK_IMPORTED_MODULE_5__["CommonValidationServiceService"]
      }];
    };

    SignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/sign-up/sign-up.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/Components/sign-up/sign-up.component.css"))["default"]]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/Services/common-validation.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/common-validation.service.ts ***!
    \*******************************************************/

  /*! exports provided: CommonValidationServiceService */

  /***/
  function srcAppServicesCommonValidationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonValidationServiceService", function () {
      return CommonValidationServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CommonValidationServiceService = /*#__PURE__*/function () {
      function CommonValidationServiceService(formBuilder) {
        _classCallCheck(this, CommonValidationServiceService);

        this.formBuilder = formBuilder;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.setcommonEmployeeFormGroup();
      }

      _createClass(CommonValidationServiceService, [{
        key: "setcommonEmployeeFormGroup",
        value: function setcommonEmployeeFormGroup() {
          this.commonEmployeeFormGroup = this.InitializeCommonFormGroup();
        }
      }, {
        key: "InitializeCommonFormGroup",
        value: function InitializeCommonFormGroup() {
          return this.formBuilder.group({
            empTrId: [''],
            employeeId: [''],
            employeefirstName: [''],
            employeelastName: [''],
            employeeAddress: [''],
            employeeDob: [''],
            employeemMobileNo: [''],
            employeeCity: ['']
          });
        }
      }, {
        key: "setStateToSubject",
        value: function setStateToSubject(state) {
          this.subject.next(state);
        }
      }, {
        key: "getStateFromSubject",
        value: function getStateFromSubject() {
          return this.subject;
        }
      }, {
        key: "populateForm",
        value: function populateForm(employee) {
          this.commonEmployeeFormGroup.setValue(employee);
        }
      }, {
        key: "clearFormGroup",
        value: function clearFormGroup(formGroup) {
          Object.keys(formGroup).forEach(function (formControlKey) {
            var formControl = formGroup.get(formControlKey);
            formControl.setValue('');
          });
        } //===========Validate Whole Form Group=================

      }, {
        key: "validateWholeFormGroup",
        value: function validateWholeFormGroup(formGroup) {
          var _this6 = this;

          Object.keys(formGroup).forEach(function (field) {
            var control = formGroup.get(field);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]) {
              control.markAsDirty({
                onlySelf: true
              });
              control.markAsDirty({
                onlySelf: true
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]) {
              _this6.validateWholeFormGroup(control);
            }
          });
        }
      }]);

      return CommonValidationServiceService;
    }();

    CommonValidationServiceService.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    CommonValidationServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonValidationServiceService);
    /***/
  },

  /***/
  "./src/app/Services/employee.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/Services/employee.service.ts ***!
    \**********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _CommonClasses_common_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../CommonClasses/common-url */
    "./src/app/CommonClasses/common-url.ts");

    var EmployeeService = /*#__PURE__*/function () {
      function EmployeeService(http) {
        _classCallCheck(this, EmployeeService);

        this.http = http;
        this.BaseUrl = _CommonClasses_common_url__WEBPACK_IMPORTED_MODULE_3__["CommonUrl"].getBaseHttpUrl();
      }

      _createClass(EmployeeService, [{
        key: "submitEmployeeRecord",
        value: function submitEmployeeRecord(employeeDetails) {
          return this.http.post(this.BaseUrl + '/createEmployee', {
            employeeDetails: employeeDetails
          }, {
            responseType: 'text'
          });
        }
      }, {
        key: "updateEmployeeRecord",
        value: function updateEmployeeRecord(employeeDetails) {
          return this.http.put(this.BaseUrl + '/updateEmployee', {
            employeeDetails: employeeDetails
          }, {
            responseType: 'text'
          });
        }
      }, {
        key: "deleteEmployeeRecord",
        value: function deleteEmployeeRecord(employeeId) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("empId", employeeId);
          return this.http["delete"](this.BaseUrl + '/deleteEmployee', {
            params: params,
            responseType: 'text'
          });
        }
      }, {
        key: "getAllEmployeeRecord",
        value: function getAllEmployeeRecord() {
          return this.http.get(this.BaseUrl + '/getAllEmployeesRecords');
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EmployeeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EmployeeService);
    /***/
  },

  /***/
  "./src/app/Services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/Services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _CommonClasses_common_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../CommonClasses/common-url */
    "./src/app/CommonClasses/common-url.ts");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http; //==============Get Base Url =========

        this.BaseUrl = _CommonClasses_common_url__WEBPACK_IMPORTED_MODULE_3__["CommonUrl"].getBaseHttpUrl();
      }

      _createClass(LoginService, [{
        key: "authenticateUser",
        value: function authenticateUser(userCredintials) {
          return this.http.post(this.BaseUrl + '/authenticate', userCredintials, {
            responseType: 'text'
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/Services/sign-up.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/Services/sign-up.service.ts ***!
    \*********************************************/

  /*! exports provided: SignUpService */

  /***/
  function srcAppServicesSignUpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpService", function () {
      return SignUpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _CommonClasses_common_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../CommonClasses/common-url */
    "./src/app/CommonClasses/common-url.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SignUpService = /*#__PURE__*/function () {
      function SignUpService(http) {
        _classCallCheck(this, SignUpService);

        this.http = http; //==============Get Base Url =========

        this.BaseUrl = _CommonClasses_common_url__WEBPACK_IMPORTED_MODULE_2__["CommonUrl"].getBaseHttpUrl();
      }

      _createClass(SignUpService, [{
        key: "registerRecords",
        value: function registerRecords(registerDetails) {
          return this.http.post(this.BaseUrl + '/register', {
            registerDetails: registerDetails
          }, {
            responseType: 'text'
          });
        }
      }]);

      return SignUpService;
    }();

    SignUpService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SignUpService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SignUpService);
    /***/
  },

  /***/
  "./src/app/Services/snack-bar.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Services/snack-bar.service.ts ***!
    \***********************************************/

  /*! exports provided: SnackBarService */

  /***/
  function srcAppServicesSnackBarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
      return SnackBarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SnackBarService = /*#__PURE__*/function () {
      function SnackBarService(snackBar) {
        _classCallCheck(this, SnackBarService);

        this.snackBar = snackBar;
        this.horizontalPosition = 'center';
        this.verticalPosition = 'top';
        this.snackBarAutoHide = '1500';
      }

      _createClass(SnackBarService, [{
        key: "openSnackBar",
        value: function openSnackBar(message) {
          this.snackBarConfig = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarConfig"]();
          this.snackBarConfig.horizontalPosition = this.horizontalPosition;
          this.snackBarConfig.verticalPosition = this.verticalPosition;
          this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
          this.snackBarConfig.panelClass = 'glam-snackbar';
          this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
        }
      }]);

      return SnackBarService;
    }();

    SnackBarService.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    SnackBarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SnackBarService);
    /***/
  },

  /***/
  "./src/app/Services/token-interceptor.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Services/token-interceptor.service.ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServicesTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _token_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./token-management.service */
    "./src/app/Services/token-management.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(tokenService, router) {
        _classCallCheck(this, TokenInterceptorService);

        this.tokenService = tokenService;
        this.router = router;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this7 = this;

          var modifiedRequest = this.addTokenToRequest(request);
          console.log(modifiedRequest);
          return next.handle(modifiedRequest).pipe( //==================Error/Exception Handling Code=============
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (errorResponse) {
            var errorMassage;

            if (errorResponse.error instanceof ErrorEvent) {
              errorMassage = "Client Side Error Occured.";
            } else {
              //==========if token expired =================
              if (errorResponse.status == 401 || errorResponse.status == 403) {
                alert("There was an error trying to log you in.");

                _this7.tokenService.clearTokenFromStorage();

                _this7.router.navigateByUrl('/Login');
              } else if (errorResponse.status == 0 && (errorResponse.url == null || errorResponse.url != null)) //i.e Progress Event 
                {
                  errorMassage = "Network Error:Connection Timed Out.";
                } else {
                console.log(errorResponse);
                errorMassage = "Server Side Error Occured.";
              }
            } //========return Custom error notification to Observer==========


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMassage);
          }));
        }
      }, {
        key: "addTokenToRequest",
        value: function addTokenToRequest(request) {
          var token = this.tokenService.getTokenFromLocalStorage();

          if (token) {
            return request.clone({
              setHeaders: {
                'Access-Control-Allow-Origin': '*',
                'Authorization': "Bearer".concat(token)
              }
            });
          }

          return request;
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ctorParameters = function () {
      return [{
        type: _token_management_service__WEBPACK_IMPORTED_MODULE_4__["TokenManagementService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenInterceptorService);
    /***/
  },

  /***/
  "./src/app/Services/token-management.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/Services/token-management.service.ts ***!
    \******************************************************/

  /*! exports provided: TokenManagementService */

  /***/
  function srcAppServicesTokenManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenManagementService", function () {
      return TokenManagementService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);

    var TokenManagementService = /*#__PURE__*/function () {
      function TokenManagementService() {
        _classCallCheck(this, TokenManagementService);
      }

      _createClass(TokenManagementService, [{
        key: "checkTokenAvailability",
        value: function checkTokenAvailability() {
          return localStorage.getItem('UserDetails') != null;
        }
      }, {
        key: "setTokenToLocalStorage",
        value: function setTokenToLocalStorage(Token) {
          localStorage.setItem('UserDetails', Token);
        }
      }, {
        key: "getTokenFromLocalStorage",
        value: function getTokenFromLocalStorage() {
          return localStorage.getItem('UserDetails');
        }
      }, {
        key: "getUserdetailsFromToken",
        value: function getUserdetailsFromToken(token) {
          return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["jwt_decode"])(token);
        }
      }, {
        key: "clearTokenFromStorage",
        value: function clearTokenFromStorage() {
          localStorage.removeItem('UserDetails');
        }
      }]);

      return TokenManagementService;
    }();

    TokenManagementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TokenManagementService);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Components/login/login.component */
    "./src/app/Components/login/login.component.ts");
    /* harmony import */


    var _Components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Components/sign-up/sign-up.component */
    "./src/app/Components/sign-up/sign-up.component.ts");
    /* harmony import */


    var _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Components/employees/employees.component */
    "./src/app/Components/employees/employees.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'Login',
      pathMatch: 'full'
    }, {
      path: 'Login',
      component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'SignUp',
      component: _Components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    }, {
      path: 'Home',
      component: _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_5__["EmployeesComponent"]
    } //canActivate:[AuthenticationGuardService]},
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'EmployeeManagement';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Components/sign-up/sign-up.component */
    "./src/app/Components/sign-up/sign-up.component.ts");
    /* harmony import */


    var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Components/login/login.component */
    "./src/app/Components/login/login.component.ts");
    /* harmony import */


    var _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Components/employees/employees.component */
    "./src/app/Components/employees/employees.component.ts");
    /* harmony import */


    var _Services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Services/token-interceptor.service */
    "./src/app/Services/token-interceptor.service.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _Components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Components/create-employee/create-employee.component */
    "./src/app/Components/create-employee/create-employee.component.ts"); //import { CreateEmployeeComponent } from './Components/create-employee/create-employee.component';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _Components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _Components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"], _Components_employees_employees_component__WEBPACK_IMPORTED_MODULE_9__["EmployeesComponent"], _Components_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_18__["CreateEmployeeComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"]],
      providers: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogConfig"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__["MatSnackBar"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _Services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptorService"],
        multi: true
      }],
      // entryComponents:[CreateEmployeeComponent],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/milindjaid/AngularIonicIntegration/EmployeeManagement/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map