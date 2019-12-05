(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-box/chat-box.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-box/chat-box.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"room\" #modalEle>\n  <div class=\"header\">\n    <button mat-icon-button [routerLink]=\"['/']\" [queryParams]=\"{local: LoginService.CLIENT_IP}\">\n      <mat-icon>close</mat-icon>\n    </button>\n    <span class=\"title\">\n      <img *ngIf=\"room.img\" [src]=\"room.img\" alt=\"HeadImg\">\n      <span style=\"height: 24px\">{{room.name}}</span>\n    </span>\n  </div>\n  <div class=\"body\">\n    <!--消息列表-->\n    <div class=\"col-sm-12\" *ngFor=\"let m of messages\" [@switchIn]\n         [ngClass]=\"{'bubble-container': m.senderPublicKey !== login.sSession.publicKey, 'my-bubble-container': m.senderPublicKey === login.sSession.publicKey}\">\n      <div class=\"name-bubble\">{{m.sender}}</div>\n      <div class=\"bubble\" matRipple>\n        <!--文件消息，带fileItemId-->\n        <img *ngIf=\"m.img\" [src]=\"m.img\" alt=\"SentImg\">\n        <!--常规消息-->\n        <span *ngIf=\"!m.img\">{{m.content}}</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <!--<mat-form-field>-->\n    <!--<input matInput type=\"text\" placeholder=\"\" required [(ngModel)]=\"inputMessage\"-->\n    <!--name=\"inputMessage\">-->\n    <!--</mat-form-field>-->\n    <!-- 上传图片的 -->\n    <input name=\"fileInput\" type=\"file\" style=\"display: none\" #fileInput (input)=\"changeFile($event)\">\n    <i class=\"material-icons send-button\" matRipple [matRippleRadius]=\"20\" [matRippleUnbounded]=\"true\"\n       [matRippleCentered]=\"true\" (click)=\"fileInput.click()\">photo</i>\n    <!-- 输入框 -->\n    <textarea placeholder=\"Text Here..\" #inputMessage name=\"inputMessage\" (input)=\"inputText($event)\"></textarea>\n    <!--(keydown.enter)=\"sendMessage(inputMessage.value, inputMessage);$event.stopPropagation()\"-->\n    <!-- 发送按钮 -->\n    <i class=\"material-icons send-button\" matRipple [matRippleRadius]=\"20\" [matRippleUnbounded]=\"true\"\n       [matRippleCentered]=\"true\" (click)=\"sendMessage(inputMessage.value, inputMessage)\">send</i>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-rooms/chat-rooms.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-rooms/chat-rooms.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar (createRoom)=\"ngOnInit()\"></app-toolbar>\n<div style=\"height: 192px;align-items: center;justify-content: center;display: flex;\" *ngIf=\"!rooms\"\n     [@fadeIn]>\n  <mat-spinner diameter=\"50\"></mat-spinner>\n</div>\n<ul class=\"chat-box\">\n  <!-- Tips -->\n  <!--<li class=\"chatlist\" *ngIf=\"!isConnected\" (click)=\"reloadPage()\"><a>\n    <mat-icon class=\"m-r-10\">cloud_off</mat-icon>与聊天服务器断开...点击刷新\n  </a></li>-->\n  <li class=\"chatlist\" *ngIf=\"rooms && rooms.length < 1\"><a>\n    <mat-icon class=\"m-r-10\">mood</mat-icon>No Rooms Available...\n  </a></li>\n  <!-- 最近聊天的列表 -->\n  <li class=\"chatlist\" *ngFor=\"let rm of rooms\" matRipple [routerLink]=\"[rm.publicKey]\"><a>\n    <div class=\"list__left\">\n      <img [src]=\"rm.img\" alt=\"HeadImg\" *ngIf=\"rm.img\">\n    </div>\n    <div class=\"list__content\">\n      <div class=\"title\">{{ rm.name }}\n        <small>{{ rm.recentDate | date: 'HH:mm' }}</small>\n      </div>\n      <div class=\"sub-title\">\n        <span>{{ rm.recentMessage }}</span>\n        <mat-icon class=\"delete-icon\" (click)=\"delete(rm);$event.stopPropagation();\">delete</mat-icon>\n      </div>\n    </div>\n  </a></li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-dialog/create-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/create-dialog/create-dialog.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"submit()\" #form=\"ngForm\">\n  <h2 mat-dialog-title>Create Room</h2>\n  <mat-dialog-content class=\"mat-typography\">\n    <mat-form-field appearance=\"standard\" style=\"width: 100%\">\n      <mat-label>Name of Room</mat-label>\n      <label>\n        <input matInput placeholder=\"Name of Room\" [(ngModel)]=\"input.name\" name=\"roomName\" required>\n      </label>\n    </mat-form-field>\n    <input name=\"fileInput\" type=\"file\" style=\"display: none\" #fileInput (input)=\"changeFile($event)\">\n    <button mat-button (click)=\"fileInput.click()\" type=\"button\">Upload Img for Room\n      <mat-icon>photo</mat-icon>\n    </button>\n    <canvas #imageCanvas style=\"display: none\"></canvas>\n    <mat-selection-list #peopleSelection>\n      <mat-list-option *ngFor=\"let p of people\" [value]=\"p\">\n        {{p.name}}\n      </mat-list-option>\n    </mat-selection-list>\n    <p>\n      Options selected: {{peopleSelection.selectedOptions.selected.length}}\n    </p>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close type=\"button\">Cancel</button>\n    <button mat-button color=\"primary\" type=\"submit\" [disabled]=\"form.invalid\">Create</button>\n  </mat-dialog-actions>\n</form>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <span>Encrypted Chatting Room</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-button (click)=\"openCreateDialog()\">\n    Create Room\n    <mat-icon>add</mat-icon>\n  </button>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-rooms/chat-rooms.component */ "./src/app/chat-rooms/chat-rooms.component.ts");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "./src/app/chat-box/chat-box.component.ts");





const routes = [
    { path: '', component: _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_3__["ChatRoomsComponent"] },
    { path: ':id', component: _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoxComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AppComponent = class AppComponent {
    constructor(login, route) {
        this.login = login;
        this.route = route;
        this.title = 'room-web';
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `<router-outlet></router-outlet>`,
        styles: [""]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-box/chat-box.component */ "./src/app/chat-box/chat-box.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-rooms/chat-rooms.component */ "./src/app/chat-rooms/chat-rooms.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-dialog/create-dialog.component */ "./src/app/create-dialog/create-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _chat_box_chat_box_component__WEBPACK_IMPORTED_MODULE_8__["ChatBoxComponent"],
            _chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_10__["ChatRoomsComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarComponent"],
            _create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_13__["CreateDialogComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        ],
        providers: [],
        exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"]],
        entryComponents: [
            _create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_13__["CreateDialogComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat-box/chat-box.component.css":
/*!*************************************************!*\
  !*** ./src/app/chat-box/chat-box.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 767px) {\r\n  /*手机版充满屏幕*/\r\n  .body {\r\n    min-height: calc(100vh - 140px);\r\n  }\r\n}\r\n/*头*/\r\n.header {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: #ffffff;\r\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);\r\n  padding: 10px;\r\n  z-index: 1;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n.header > .title {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.header > .title > img {\r\n   width: 40px;\r\n   height: 40px;\r\n   border-radius: 50%;\r\n   margin-right: 16px;\r\n}\r\n/*中间*/\r\n.body {\r\n  padding: 0 15px;\r\n}\r\n.body img{\r\n  max-width: 300px;\r\n}\r\n.name-bubble {\r\n  font-size: 14px;\r\n  color: #aaaaaa;\r\n  margin-bottom: 4px;\r\n  text-align: right;\r\n}\r\n/*别人的气泡*/\r\n.bubble-container {\r\n  text-align: left;\r\n  margin: 8px 0;\r\n}\r\n.bubble-container .bubble {\r\n  background-color: #f0f0f0;\r\n  border-radius: 15px 15px 15px 4px;\r\n  padding: 8px;\r\n  display: inline-block;\r\n}\r\n/*我的气泡*/\r\n.my-bubble-container {\r\n  text-align: right;\r\n  margin: 8px 0;\r\n}\r\n.my-bubble-container .bubble {\r\n  background-color: #1f91f3;\r\n  color: white;\r\n  border-radius: 15px 4px 15px 15px;\r\n  padding: 8px;\r\n  text-align: left;\r\n  display: inline-block;\r\n}\r\n.my-bubble-container > small {\r\n  color: white !important;\r\n}\r\n/*脚*/\r\n.footer {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  bottom: 0;\r\n  background-color: #ffffff;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  padding: 10px;\r\n}\r\n/*输入框*/\r\ntextarea {\r\n  flex: 1 0 auto;\r\n  border-radius: 15px;\r\n  padding: 5px 10px;\r\n  height: 20px;\r\n  margin: 0 10px 0 10px;\r\n  background: #f5f5f5;\r\n  border: none;\r\n  resize: none;\r\n  max-height: 210px;\r\n}\r\ntextarea:focus {\r\n  outline: none;\r\n}\r\n/*发送按钮*/\r\n.send-button {\r\n  color: #1f91f3;\r\n  padding: 3px;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n/*任务消息*/\r\n.bubble > h5{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1ib3gvY2hhdC1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVjtJQUNFLCtCQUErQjtFQUNqQztBQUNGO0FBQ0EsSUFBSTtBQUNKO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04seUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFBQztHQUNFLFdBQVc7R0FDWCxZQUFZO0dBQ1osa0JBQWtCO0dBQ2xCLGtCQUFrQjtBQUNyQjtBQUNBLEtBQUs7QUFDTDtFQUNFLGVBQWU7QUFDakI7QUFBQztFQUNDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0EsUUFBUTtBQUNSO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0EsT0FBTztBQUNQO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBLElBQUk7QUFDSjtFQUNFLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjtBQUNBLE1BQU07QUFDTjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQSxPQUFPO0FBQ1A7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0EsT0FBTztBQUNQO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtYm94L2NoYXQtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAvKuaJi+acuueJiOWFhea7oeWxj+W5lSovXHJcbiAgLmJvZHkge1xyXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4KTtcclxuICB9XHJcbn1cclxuLyrlpLQqL1xyXG4uaGVhZGVyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG4uaGVhZGVyID4gLnRpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0uaGVhZGVyID4gLnRpdGxlID4gaW1nIHtcclxuICAgd2lkdGg6IDQwcHg7XHJcbiAgIGhlaWdodDogNDBweDtcclxuICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuLyrkuK3pl7QqL1xyXG4uYm9keSB7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59LmJvZHkgaW1ne1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbn1cclxuLm5hbWUtYnViYmxlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICNhYWFhYWE7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi8q5Yir5Lq655qE5rCU5rOhKi9cclxuLmJ1YmJsZS1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG4uYnViYmxlLWNvbnRhaW5lciAuYnViYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAxNXB4IDRweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi8q5oiR55qE5rCU5rOhKi9cclxuLm15LWJ1YmJsZS1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbn1cclxuLm15LWJ1YmJsZS1jb250YWluZXIgLmJ1YmJsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmOTFmMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCA0cHggMTVweCAxNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubXktYnViYmxlLWNvbnRhaW5lciA+IHNtYWxsIHtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG4vKuiEmiovXHJcbi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4vKui+k+WFpeahhiovXHJcbnRleHRhcmVhIHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDAgMTBweCAwIDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG1heC1oZWlnaHQ6IDIxMHB4O1xyXG59XHJcblxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vKuWPkemAgeaMiemSriovXHJcbi5zZW5kLWJ1dHRvbiB7XHJcbiAgY29sb3I6ICMxZjkxZjM7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyrku7vliqHmtojmga8qL1xyXG4uYnViYmxlID4gaDV7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/chat-box/chat-box.component.ts":
/*!************************************************!*\
  !*** ./src/app/chat-box/chat-box.component.ts ***!
  \************************************************/
/*! exports provided: ChatBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoxComponent", function() { return ChatBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-animation */ "./src/app/data-animation.ts");
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/message.model */ "./src/app/models/message.model.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__);









let ChatBoxComponent = class ChatBoxComponent {
    constructor(login, messageService, route) {
        this.login = login;
        this.messageService = messageService;
        this.route = route;
        this.LoginService = _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"];
    }
    ngOnInit() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((param) => {
            const publicKey = param.get('id');
            return this.messageService.getRoom(publicKey);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((result) => {
            this.room = result;
            return this.messageService.getMessages(this.room.publicKey);
        })).subscribe((result) => {
            result.forEach(m => {
                m.sender = this.room.participants.find(v => v.publicKey === m.senderPublicKey).name;
            });
            this.messages = result;
            console.log(this.room[this.login.sSession.publicKey]);
            setTimeout(() => window.scrollTo(0, document.documentElement.clientHeight), 0);
        });
    }
    /** 发送消息 */
    sendMessage(content, inputBoxEl) {
        const message = this.basicMessageInfo();
        message.content = content;
        this.messageService.sendMessage(message, this.room);
        this.messages.push(message);
        inputBoxEl.value = '';
        inputBoxEl.focus();
        setTimeout(() => window.scrollTo(0, document.documentElement.clientHeight), 0);
    }
    /** 在输入框输入内容时会触发，主要用于调整UI */
    inputText(event) {
        // 把高进行重置，才会减小输入框。最小值是20px
        event.target.style.height = '20px';
        // 增加高度
        event.target.style.height = event.target.scrollHeight - 10 + 'px';
    }
    /** 上传文件方法 */
    changeFile(event) {
        const file = event.target.files[0];
        const message = this.basicMessageInfo();
        const fr = new FileReader();
        fr.addEventListener('load', (e) => {
            message.img = e.target.result;
            message.content = '[Image]';
            this.messageService.sendMessage(message, this.room);
            this.messages.push(message);
        });
        fr.readAsDataURL(file);
    }
    basicMessageInfo() {
        const message = new _models_message_model__WEBPACK_IMPORTED_MODULE_3__["MessageModel"]();
        message.senderPublicKey = this.login.sSession.publicKey;
        message.roomPublicKey = this.room.publicKey;
        message.datetime = new Date();
        if (this.messages.length < 1) {
            message.lastHash = JSON.stringify(this.room);
        }
        else {
            message.lastHash = JSON.stringify(this.messages[this.messages.length - 1]);
        }
        // md5 Hash
        message.lastHash = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"].hashStr(message.lastHash);
        return message;
    }
};
ChatBoxComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalEle', { static: false })
], ChatBoxComponent.prototype, "modalEle", void 0);
ChatBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-box/chat-box.component.html")).default,
        animations: [_data_animation__WEBPACK_IMPORTED_MODULE_2__["switchIn"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-box.component.css */ "./src/app/chat-box/chat-box.component.css")).default]
    })
], ChatBoxComponent);



/***/ }),

/***/ "./src/app/chat-rooms/chat-rooms.component.css":
/*!*****************************************************!*\
  !*** ./src/app/chat-rooms/chat-rooms.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*聊天列表的样式*/\r\nul.chat-box {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n.chatlist {\r\n  height: 72px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n.chatlist img {\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  margin-right: 16px;\r\n}\r\n.chatlist a {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  height: 72px;\r\n  margin: 0;\r\n  padding: 0 16px;\r\n  position: relative;\r\n  text-decoration: none;\r\n  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.chatlist a:hover {\r\n  text-decoration: none;\r\n  color: #3f51b5;\r\n}\r\n.list__left {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  min-width: 56px;\r\n  height: 40px;\r\n}\r\n.list__content {\r\n  text-align: left;\r\n  flex: 1 1 auto;\r\n  overflow: hidden;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  height: 72px;\r\n}\r\n.title {\r\n  height: 24px;\r\n  line-height: 24px;\r\n  position: relative;\r\n  text-align: left;\r\n  font-size: 16px;\r\n}\r\n.title, .sub-title {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.sub-title {\r\n  color: rgba(0, 0, 0, 0.54);\r\n  font-size: 14px;\r\n}\r\n.title small {\r\n  color: #9e9e9e;\r\n  font-size: 12px;\r\n}\r\n.delete-icon {\r\n  color: #9e9e9e;\r\n  transition: all 0.33s ease;\r\n}\r\n.delete-icon:hover {\r\n  color: red;\r\n  transition: all 0.33s ease;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yb29tcy9jaGF0LXJvb21zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVTtBQUNWO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLDJEQUEyRDtFQUMzRCx5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnREFBZ0Q7RUFDaEQsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9jaGF0LXJvb21zL2NoYXQtcm9vbXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8q6IGK5aSp5YiX6KGo55qE5qC35byPKi9cclxudWwuY2hhdC1ib3gge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jaGF0bGlzdCB7XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uY2hhdGxpc3QgaW1nIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmNoYXRsaXN0IGEge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBoZWlnaHQ6IDcycHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4uY2hhdGxpc3QgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4ubGlzdF9fbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWluLXdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmxpc3RfX2NvbnRlbnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiA3MnB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnRpdGxlLCAuc3ViLXRpdGxlIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnRpdGxlIHNtYWxsIHtcclxuICBjb2xvcjogIzllOWU5ZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmRlbGV0ZS1pY29uIHtcclxuICBjb2xvcjogIzllOWU5ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zM3MgZWFzZTtcclxufVxyXG4uZGVsZXRlLWljb246aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzNzIGVhc2U7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/chat-rooms/chat-rooms.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chat-rooms/chat-rooms.component.ts ***!
  \****************************************************/
/*! exports provided: ChatRoomsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomsComponent", function() { return ChatRoomsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-animation */ "./src/app/data-animation.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ChatRoomsComponent = class ChatRoomsComponent {
    constructor(messageService, login, route) {
        this.messageService = messageService;
        this.login = login;
        this.route = route;
    }
    ngOnInit() {
        const client = this.route.snapshot.queryParamMap.get('local');
        if (client) {
            _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"].CLIENT_IP = client;
            _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"].CLIENT_AD = 'http://' + client + '/';
        }
        this.login.getSession();
        this.messageService.getRooms().subscribe((result) => this.rooms = result);
    }
    delete(rm) {
        this.messageService.deleteRoom(rm.publicKey).subscribe(() => {
            this.ngOnInit();
        });
    }
};
ChatRoomsComponent.ctorParameters = () => [
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ChatRoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-rooms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-rooms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-rooms/chat-rooms.component.html")).default,
        animations: [_data_animation__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-rooms.component.css */ "./src/app/chat-rooms/chat-rooms.component.css")).default]
    })
], ChatRoomsComponent);



/***/ }),

/***/ "./src/app/create-dialog/create-dialog.component.css":
/*!***********************************************************!*\
  !*** ./src/app/create-dialog/create-dialog.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1kaWFsb2cvY3JlYXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/create-dialog/create-dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-dialog/create-dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: CreateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateDialogComponent", function() { return CreateDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _models_room_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/room.model */ "./src/app/models/room.model.ts");






let CreateDialogComponent = class CreateDialogComponent {
    constructor(login, messageService, dialogRef) {
        this.login = login;
        this.messageService = messageService;
        this.dialogRef = dialogRef;
        this.input = new _models_room_model__WEBPACK_IMPORTED_MODULE_5__["RoomModel"]();
        this.isCreating = false;
    }
    ngOnInit() {
        this.login.getPeople().subscribe((result) => {
            this.people = result.filter(p => p.publicKey !== this.login.sSession.publicKey);
            console.log(this.login.sSession);
        });
    }
    changeFile(event) {
        const file = event.target.files[0];
        const fr = new FileReader();
        fr.addEventListener('load', (e) => {
            this.input.img = e.target.result;
        });
        fr.readAsDataURL(file);
    }
    submit() {
        this.input.participants = this.peopleSelection.selectedOptions.selected.map((o) => o.value);
        this.messageService.createRoom(this.input);
        this.dialogRef.close();
    }
};
CreateDialogComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('peopleSelection', { static: true })
], CreateDialogComponent.prototype, "peopleSelection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageCanvas', { static: true })
], CreateDialogComponent.prototype, "imageCanvas", void 0);
CreateDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/create-dialog/create-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-dialog.component.css */ "./src/app/create-dialog/create-dialog.component.css")).default]
    })
], CreateDialogComponent);



/***/ }),

/***/ "./src/app/data-animation.ts":
/*!***********************************!*\
  !*** ./src/app/data-animation.ts ***!
  \***********************************/
/*! exports provided: fadeIn, switchIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeIn", function() { return fadeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchIn", function() { return switchIn; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");


// 高度逐渐加大渐变进入
const fadeIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.33s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '*', opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.33s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ height: '0', opacity: 0 }))
    ]),
]);
// 右侧渐变进入
const switchIn = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('switchIn', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ display: 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, 'margin-left': '15px' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.33s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, 'margin-left': '*' })),
    ]),
]);


/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var LoginService_1;



let LoginService = LoginService_1 = class LoginService {
    constructor(http) {
        this.http = http;
    }
    get sSession() {
        return LoginService_1.sSession;
    }
    getSession() {
        this.http.get(LoginService_1.CLIENT_AD).subscribe((result) => {
            LoginService_1.sOnlineServer = result.onlineApi;
            LoginService_1.sSession = result.session;
        });
    }
    getPeople() {
        return this.http.get(LoginService_1.sOnlineServer);
    }
};
LoginService.CLIENT_IP = '';
LoginService.CLIENT_AD = '';
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = LoginService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let MessageService = class MessageService {
    constructor(http) {
        this.http = http;
    }
    getMessages(publicKey) {
        let httpParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        httpParam = httpParam.append('publicKey', publicKey);
        return this.http.get(_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].CLIENT_AD + 'messages', { params: httpParam });
    }
    getRooms() {
        return this.http.get(_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].CLIENT_AD + 'rooms');
    }
    getRoom(publicKey) {
        let httpParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        httpParam = httpParam.append('publicKey', publicKey);
        return this.http.get(_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].CLIENT_AD + 'rooms', { params: httpParam });
    }
    deleteRoom(publicKey) {
        let httpParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        httpParam = httpParam.append('publicKey', publicKey);
        return this.http.delete(_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].CLIENT_AD + 'rooms', { params: httpParam });
    }
    createRoom(input) {
        let ob = this.http.post(_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].CLIENT_AD + 'rooms', input);
        // Notify others in the group
        for (const p of input.participants) {
            if (p.publicKey !== _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].sSession.publicKey) {
                const url = 'http://' + p.ip + '/';
                // Construct the http
                ob = ob.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.http.post(url + 'rooms', input)));
            }
        }
        return ob;
    }
    sendMessage(message, room) {
        let httpParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        httpParam = httpParam.append('publicKey', room.publicKey);
        this.http.post(_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].CLIENT_AD + 'messages', message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((result) => {
            message = result;
            return this.http.post(_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"].CLIENT_AD + 'receiveMessage', result, { params: httpParam });
        })).subscribe();
        // TODO p.ip filter user in the group
        // for (const p of room.participants) {
        //   if (p.publicKey !== LoginService.sSession.publicKey) {
        //   }
        // }
    }
};
MessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/models/message.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/message.model.ts ***!
  \*****************************************/
/*! exports provided: MessageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModel", function() { return MessageModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class MessageModel {
}


/***/ }),

/***/ "./src/app/models/room.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/room.model.ts ***!
  \**************************************/
/*! exports provided: RoomModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomModel", function() { return RoomModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class RoomModel {
}


/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\r\n  flex: 1 1 auto;\r\n}\r\n:host {\r\n  display: block;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsd0NBQXdDO0FBQzFDIiwiZmlsZSI6InNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create-dialog/create-dialog.component */ "./src/app/create-dialog/create-dialog.component.ts");




let ToolbarComponent = class ToolbarComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.createRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openCreateDialog() {
        const dialogRef = this.dialog.open(_create_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CreateDialogComponent"]);
        dialogRef.afterClosed().subscribe(() => {
            this.createRoom.emit();
        });
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ToolbarComponent.prototype, "createRoom", void 0);
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zhang\Desktop\Distributed Systems\Project\room-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map