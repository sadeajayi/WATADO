webpackJsonp([1,4],{

/***/ 1101:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(499);


/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"]();
    }
    SocketService.prototype.on = function (eventName, callback) {
        if (this.socket) {
            this.socket.on(eventName, function (data) {
                callback(data);
            });
        }
    };
    ;
    SocketService.prototype.emit = function (eventName, data) {
        if (this.socket) {
            this.socket.emit(eventName, data);
        }
    };
    ;
    SocketService.prototype.removeListener = function (eventName) {
        if (this.socket) {
            this.socket.removeListener(eventName);
        }
    };
    ;
    SocketService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/socket.service.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__init_markers__ = __webpack_require__(633);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkerService; });
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MarkerService = (function (_super) {
    __extends(MarkerService, _super);
    function MarkerService() {
        var _this = _super.call(this) || this;
        console.log("Marker Service Initialized ");
        _this.load();
        return _this;
    }
    MarkerService.prototype.getMarkers = function () {
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    };
    MarkerService.prototype.addMarker = function (newMarker) {
        //fetch markers that are already there
        var markers = JSON.parse(localStorage.getItem('markers'));
        // Push to array
        markers.push(newMarker);
        //set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    MarkerService.prototype.updateMarker = function (marker, newLat, newLng) {
        var markers = JSON.parse(localStorage.getItem('markers'));
        for (var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
                markers[i].lat = newLat;
                markers[i].lng = newLng;
            }
        }
        //set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    MarkerService.prototype.removeMarker = function (marker) {
        var markers = JSON.parse(localStorage.getItem('markers'));
        for (var i = 0; i < markers.length; i++) {
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng) {
                markers.splice(i, 1);
            }
        }
        //set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    MarkerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MarkerService);
    return MarkerService;
}(__WEBPACK_IMPORTED_MODULE_1__init_markers__["a" /* Init */]));

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/marker.service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.username == undefined || user.password == undefined ||
            user.passwordConf == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password !== user.passwordConf) {
            var err = new Error('Passwords do not match.');
            console.log("passwords don't match");
            return err;
        }
        else {
            return user.password;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/validate.service.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 498;


/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(635);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(624);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/main.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(821),
            styles: [__webpack_require__(813)]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/app.component.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agm_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_js_marker_clusterer__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_modal__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__map_cluster__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_map_page_map_page_component__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_meet_the_team_meet_the_team_component__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_validate_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_marker_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_shared_socket_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_js_marker_clusterer_src_markerclusterer_js__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_js_marker_clusterer_src_markerclusterer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_js_marker_clusterer_src_markerclusterer_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//All Modules imported go under here









//import { MdCardModule, MdButtonModule, MdCheckboxModule, MdDialogModule } from '@angular/material';


// All components imported go under here








// All services imported go under here




//Importing socket-io services


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'map-page', component: __WEBPACK_IMPORTED_MODULE_15__components_map_page_map_page_component__["a" /* MapPageComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'meet-the-team', component: __WEBPACK_IMPORTED_MODULE_17__components_meet_the_team_meet_the_team_component__["a" /* MeetTheTeamComponent */] },
    { path: 'footer', component: __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__["a" /* FooterComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_map_page_map_page_component__["a" /* MapPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_meet_the_team_meet_the_team_component__["a" /* MeetTheTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__map_cluster__["a" /* MapCluster */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBfW8ETNs6vnLAlGqcqHIZg52NI9lupHxM',
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_8__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_modal__["ModalModule"],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_marker_service__["a" /* MarkerService */], __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_23__components_shared_socket_service__["a" /* SocketService */], __WEBPACK_IMPORTED_MODULE_8__agm_js_marker_clusterer__["b" /* ClusterManager */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/app.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = (function () {
    function AboutComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(822),
            styles: [__webpack_require__(814)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/about.component.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(823),
            styles: [__webpack_require__(815)]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/footer.component.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.dialogResult = "";
    }
    /*
    loginOpenDialog(): void {
      let dialogRef = this.dialog.open(LoginComponent, {
        width: '600px',
        data: 'This was passed in'
        //data: { name: this.username, password: this.password }
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log(`The dialog was closed: ${result}`);
          this.dialogResult = result;
        });
    }
    */
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.onLoginSubmit = function () {
        var user = {
            email: this.email,
            password: this.password
        };
    };
    HomeComponent.prototype.onLogoutClick = function () {
        //this.authService.logout();
        this.flashMessage.show('You are logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(824),
            styles: [__webpack_require__(816)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/home.component.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundColor = "#1289e8";
        document.body.style.backgroundSize = "cover";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['map-page']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(825),
            styles: [__webpack_require__(817)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/login.component.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_marker_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_marker_clusterer_src_markerclusterer_js__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_marker_clusterer_src_markerclusterer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_marker_clusterer_src_markerclusterer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_socket_service__ = __webpack_require__(267);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Importing socket-io services for real-time interactions

var MapPageComponent = (function () {
    /*Gets pre-defined markers from MarkerServices and adds them to the map */
    function MapPageComponent(markerService, _socketService, mapsAPILoader, ngZone) {
        this.markerService = markerService;
        this._socketService = _socketService;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        // socket: SocketIOClient.Socket
        this.lat = 6.4471;
        this.lng = 3.4182;
        this.zoom = 14;
        this.markers = [];
        document.body.style.backgroundColor = "#FFFFFF";
        this.markers = this.markerService.getMarkers();
        //this.socket = io.connect();
    }
    /* Testing to respond to user clicking marker on client */
    MapPageComponent.prototype.clickedMarker = function (marker, index) {
        console.log("clicked the marker:" + marker.name + index);
    };
    /*Should render new marker onclick on map */
    /*
      mapClicked($event:any) {
          var newMarker = {
            name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
          }
          this.markers.push(newMarker);
          this._socketService.emit('add-marker', newMarker);
      }
    */
    MapPageComponent.prototype.markerDragEnd = function (marker, $event) {
        console.log('dragEnd', marker, $event);
        var updMarker = {
            name: marker.name,
            lat: parseFloat(marker.lat),
            lng: parseFloat(marker.lng),
            draggable: false
        };
        var newLat = $event.coords.lat;
        var newLng = $event.coords.lng;
        this.markerService.updateMarker(updMarker, newLat, newLng);
    };
    //Allows user add new marker to the map 
    MapPageComponent.prototype.addMarker = function ($event) {
        if (this.markerDraggable == 'yes') {
            var isDraggable = true;
        }
        else {
            var isDraggable = false;
        }
        var newMarker = {
            name: this.markerName,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            draggable: isDraggable
        };
        this.markers.push(newMarker);
        //this.markerService.addMarker(newMarker);
        this._socketService.emit('add-marker', newMarker);
    };
    MapPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._socketService.on('marker-added', function (marker) {
            _this.markers.push(marker);
        });
        this.zoom = 14;
        this.lat = 6.4471;
        this.lng = 3.4182;
        //create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormControl */]();
        /*
        //set current position
        //this.setCurrentPosition();
          */
        //load Google Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                bounds: {
                    east: 3.696728,
                    north: 6.702798,
                    south: 6.393351,
                    west: 3.098273
                },
                types: ["establishment"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    //var input = document.getElementById('pac-input');
                    //var autocomplete = new google.maps.places.Autocomplete(input);
                    // Bind the map's bounds (viewport) property to the autocomplete object,
                    // so that the autocomplete requests use the current map bounds for the
                    // bounds option in the request.
                    //autocomplete.bindTo('bounds', map);
                    var place = google.maps.places.PlaceResult = autocomplete.getPlace();
                    //var boundsByViewport = place.geometry.viewport;
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.zoom = 18;
                });
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
    ], MapPageComponent.prototype, "searchElementRef", void 0);
    MapPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map-page',
            template: __webpack_require__(826),
            styles: [__webpack_require__(818)],
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_marker_service__["a" /* MarkerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_marker_service__["a" /* MarkerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_socket_service__["a" /* SocketService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["d" /* MapsAPILoader */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _e || Object])
    ], MapPageComponent);
    return MapPageComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/map-page.component.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetTheTeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MeetTheTeamComponent = (function () {
    function MeetTheTeamComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    MeetTheTeamComponent.prototype.ngOnInit = function () {
    };
    MeetTheTeamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meet-the-team',
            template: __webpack_require__(827),
            styles: [__webpack_require__(819)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
    ], MeetTheTeamComponent);
    return MeetTheTeamComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/meet-the-team.component.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        //document.body.style.background = "linear-gradient(to right, #ffb75e, #ed8f03)";
        //document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.background = "linear-gradient(to right, #ffb75e, #ed8f03)";
        document.body.style.backgroundSize = "cover";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            username: this.username,
            password: this.password,
            passwordConf: this.passwordConf
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                console.log('TRYING TO GO WRONG');
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(828),
            styles: [__webpack_require__(820)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _d || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/register.component.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/auth.guard.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Init; });
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('markers') === null || localStorage.getItem('markers') === undefined) {
            console.log("No markers found .... creating...");
            var markers = [
                {
                    name: 'Company One',
                    lat: 6.4338,
                    lng: 3.4220,
                    draggable: true
                },
                {
                    name: 'Company Two',
                    lat: 6.4561,
                    lng: 3.4306,
                    draggable: true
                },
                {
                    name: 'Company Three',
                    lat: 6.5244,
                    lng: 3.3792,
                    draggable: false
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        }
        else {
            console.log('Loading markers...');
            var markers = [
                {
                    name: 'Company One',
                    lat: 6.4338,
                    lng: 3.4220,
                    draggable: true
                },
                {
                    name: 'Company Two',
                    lat: 6.4561,
                    lng: 3.4306,
                    draggable: true
                },
                {
                    name: 'Company Three',
                    lat: 6.4471,
                    lng: 3.4182,
                    draggable: false
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        }
    };
    return Init;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/init-markers.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_marker_service__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shared_socket_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_marker_clusterer_src_markerclusterer_js__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_marker_clusterer_src_markerclusterer_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_marker_clusterer_src_markerclusterer_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapCluster; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { GoogleMap, Marker } from 'angular2-google-maps/core/services/google-maps-types';
//import { MarkerManager } from 'angular2-google-maps/core/services/managers/marker-manager';
//import {ClusterManager} from '@agm/js-marker-clusterer/services/managers/cluster-manager';
// npm install js-marker-clusterer --save




var MapCluster = (function () {
    function MapCluster(gmapsApi, markerService, _socketService) {
        //this.markers = this.markerService.getMarkers();
        this.gmapsApi = gmapsApi;
        this.markerService = markerService;
        this._socketService = _socketService;
        this.markers = [];
        this.lat = 6.4471;
        this.lng = 3.4182;
        this.zoom = 14;
    }
    MapCluster.prototype.initMarkers = function () {
        var i = 0;
        var markers = this.markers;
        var result = [];
        for (; i < markers.length; ++i) {
            result.push(new google.maps.Marker({
                position: markers[i]
            }));
        }
        return result;
    };
    MapCluster.prototype.mapClicked = function ($event) {
        var newMarker = {
            name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        };
        this.markers.push(newMarker);
        this._socketService.emit('add-marker', newMarker);
    };
    MapCluster.prototype.ngOnInit = function () {
        var _this = this;
        this.gmapsApi.getNativeMap().then(function (map) {
            var markerIcon = {
                url: '/assets/m.png' // url
                //scaledSize: new google.maps.Size(50, 50)
            };
            var style = {
                url: '/assets/m2.png',
                height: 60,
                width: 60,
                textColor: '#FFF',
                textSize: 18,
                backgroundPosition: 'center center'
            };
            var options = {
                imagePath: '/assets/m2',
                gridSize: 70,
                styles: [style, style, style]
            };
            __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"]
                .interval(500)
                .skipWhile(function (s) { return _this.points == null || _this.points.length <= 0; })
                .take(1)
                .subscribe(function () {
                if (_this.markerCluster) {
                    _this.markerCluster.clearMarkers();
                }
                if (_this.points.length > 0) {
                    var _loop_1 = function (point) {
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(point.Latitude, point.Longitude),
                            icon: markerIcon
                        });
                        var contentString = '<div id="info-window"><strong>InfoWindow for Marker with:</strong> <br>' +
                            'Latitude: ' + point.Latitude + '<br>' +
                            'Longitude: ' + point.Longitude +
                            '</div>';
                        var infowindow = new google.maps.InfoWindow({
                            content: contentString
                        });
                        google.maps.event.addListener(map, 'click', function ($event) {
                            console.log('tester');
                            var location = $event.latLng;
                            //var lng = e.lng;
                            //Create a marker and placed it on the map.
                            var newMarker = new google.maps.Marker({
                                loc: location,
                                map: map
                            });
                            //this.markers.push(newMarker);            
                            this.markerCluster = new MarkerClusterer(map, this.newMarker, options);
                            /*
                            google.maps.event.addListener(marker, "click", function (e) {
                              var infoWindow = new google.maps.InfoWindow({
                              content: 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng()
                              });
                                this.markers.push(newMarker);
                                infowindow.open(map, newMarker);
                            });
                              */
                        });
                        marker.addListener('mouseover', function () {
                            infowindow.open(map, marker);
                        });
                        marker.addListener('mouseout', function () {
                            infowindow.close(map, marker);
                        });
                        _this.markers.push(marker);
                    };
                    for (var _i = 0, _a = _this.points; _i < _a.length; _i++) {
                        var point = _a[_i];
                        _loop_1(point);
                    }
                }
                else {
                    _this.markers = [];
                }
                _this.markerCluster = new MarkerClusterer(map, _this.markers, options);
            });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapCluster.prototype, "points", void 0);
    MapCluster = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'map-cluster',
            providers: [__WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* GoogleMapsAPIWrapper */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__agm_core__["c" /* GoogleMapsAPIWrapper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_marker_service__["a" /* MarkerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_marker_service__["a" /* MarkerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__components_shared_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__components_shared_socket_service__["a" /* SocketService */]) === "function" && _c || Object])
    ], MapCluster);
    return MapCluster;
    var _a, _b, _c;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/map-cluster.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/environment.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = false;
    }
    AuthService.prototype.registerUser = function (user) {
        console.log('TRYING TO REGISTER');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('users/register');
        return this.http.post('/users/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        //let ep = this.prepEndpoint('users/authenticate');
        return this.http.post('/users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/map-page');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user || null));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return 'http://localhost:8080/' + ep;
        }
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());

//# sourceMappingURL=/Users/sadeajayi/GitHub/watado/angular-src/src/auth.service.js.map

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "/*\n.site-wrapper {\n  display: table;\n  width: 100%;\n  height: 100%; /* For at least Firefox \n  min-height: 100%;\n}\n.site-wrapper-inner {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.inner {\n  padding: 30px;\n}\n\n.middle{\n  padding: auto;\n}\n*/\n.main-section{\n  background-color: white;\n}\n\n\n@media (min-width: 768px) {\n\n  /* Handle the widths */\n\n  .site-wrapper-inner{\n    /*vertical-align: middle;*/\n  }\n}\n\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "nav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n\n.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}\n.jumbotron .h1,.jumbotron h1{color:inherit}\n.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}\n.jumbotron>hr{border-top-color:#d5d5d5}\n.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}\n.jumbotron .container{max-width:100%}\n@media screen and (min-width:768px){\n  .jumbotron{padding-top:48px;padding-bottom:48px\n  }\n  .container .jumbotron,.container-fluid .jumbotron{\n    padding-right:60px;padding-left:60px\n  }\n  .jumbotron .h1,.jumbotron h1{\n    font-size:63px}}"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = ".page-footer{\n  color: #999; /* IE8 proofing */\n  background-color: #9e9e9e;\n  width: 100%;\n}\n\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext);\nbody {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n.brand-logo {\n  float: left;\n  margin-bottom: 0;\n  padding-left: 3%;\n\n}\n.material-icons{\n    font-size: 2.4rem; \n}\nnav{\n  background-color: rgba(0, 137, 236, 0);\n  border: none;\n  box-shadow: none;\n}\nli{\n  color: orange;\n\n}\n.lead{\n  font-size: 2rem;\n}\n.right.hide-on-med-and-down{\n  padding-right: 3%; \n}\n\nnav ul li.active {\n   background: rgba(217, 35, 15, 0);\n}\n\n.nav-wrapper{\n    background: rgba(217, 35, 15, 0);\n    border-color: rgba(217, 35, 15, 0);\n}\n\nh2 {\n    line-height: 110%;\n    margin: 5.78rem 0 1.424rem 0;\n}\n\n.nav-sign-up{\n  /*border: 2px solid white;*/\n  border-radius: 25px;\n  background:#2196F3;\n}\n/* The Modal (background) */\n.modal {\n  display: none; /* Hidden by default */\n  position: fixed; /* Stay in place */\n  z-index: 1; /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%; /* Full width */\n  height: 100%; /* Full height */\n  overflow: auto; /* Enable scroll if needed */\n  background-color: rgb(0,0,0); /* Fallback color */\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n}\n\n.cover-heading{\n\n    font-family: lato;\n    text-align: center;\n    font-size: 5.56rem;\n    color: white;\n}\n/* Declare heights because of positioning of img element */\n\n@media (min-width: 768px) {\n  .navbrand-logo {\n    float: left;\n    \n  }\n.material-icons{\n    font-size: 2.4rem; \n}\n  #nav-mobile {\n    float: right;\n  }\n\n}\n\n@media (min-width: 768px) {\n  /* Start the vertical centering */\n  .site-wrapper-inner {\n    position: fixed;\n    width: 100%;\n    top: 0;\n  }\n}\n.parallax-container .parallax {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n}\n.parallax-container{\n    position: inherit;\n    padding: 50px;\n}\n\n.parallax{\n\n  background: linear-gradient( rgba(255, 152, 0, 0.6), rgba(255, 152, 0, 0.85), #ff7e22),   \n               url(./assets/lagos.png) center no-repeat;\n  background-size: cover;             \n}\n\n\n.btn-floating{\n    width: 20%;\n}\n\n.cover-heading{\n    font-family: lato;\n    text-align: center;\n    font-size: 4.56rem;\n    color: white;\n}\n\n.lead{\n    text-align: center;\n    font-style: italic;\n}\n\n.signup{\n  text-align: center;\n}\n\n.login{\n  text-align: center;\n}\n\n.waves-effect.waves-light.btn-large.signup{\n    background-color: #FF5722; \n    border-radius: 25px;\n}\n\n.waves-effect.waves-light.btn-large.login{\n    background-color: #FFFFFF; \n    border-radius: 25px;\n    margin-left: 50px;\n    color: #FF5722;\n}\n@media (max-width: 1024){\n\n}\n\n.main-section{\n    background-color: #ffffff;\n}\n\n.page-footer{\n  color: #999; /* IE8 proofing */\n  background-color: #1289e8;\n  width: 100%;\n  bottom: 0;\n  position: inherit;\n}\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "\nnav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n.btn.btn-primary{\n    margin: 0 auto;\n    width: 50%;\n    display: block;\n    background-color: #FF5722;\n}\n\n.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}\n.jumbotron .h1,.jumbotron h1{color:inherit}\n.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}\n.jumbotron>hr{border-top-color:#d5d5d5}\n.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}\n.jumbotron .container{max-width:100%}\n@media screen and (min-width:768px){\n  .jumbotron{padding-top:48px;padding-bottom:48px\n  }\n  .container .jumbotron,.container-fluid .jumbotron{\n    padding-right:60px;padding-left:60px\n  }\n  .jumbotron .h1,.jumbotron h1{\n    font-size:63px}}\n\n    div.z-depth-1.grey.lighten-4.row {\n      border-radius: 25px;\n  }\n  \n  .form{\n      margin-top: 40px;\n      border-radius: 6px;\n      overflow: hidden;\n      opacity: 0;\n      -webkit-transform: translate3d(0, 500px, 0);\n              transform: translate3d(0, 500px, 0);\n      -webkit-animation: arrive 0.3s ease-in-out 0.9s forwards;\n              animation: arrive 0.3s ease-in-out 0.9s forwards;\n  }\n  \n    /*\n  .input-field{\n      width: 100%;\n      border: 0;\n      font-size: 20px;\n      font-weight: 300;\n      outline: 0;\n      margin: 1em 0 2.5em;\n  }\n  \n  form{\n    text-align: center;\n    background-color: rgba(52, 73, 94, 0.7);\n    border-radius: 4px;\n    position: absolute;\n    margin: 0 auto; \n    margin-top: 150px;\n  }\n  \n  */\n  @media (min-width: 768px) {\n    /* Start the vertical centering */\n    .site-wrapper-inner {\n      position: fixed;\n      width: 100%;\n      top: 0;\n    }\n  }\n  .container{\n    max-width:500px;\n    max-width: 500px;\n    height: 100%;\n    margin: 10vh auto;\n    position: inherit;\n  }\n  \n  \n  .signin-form {\n      background-size: cover;\n      padding: 2em 2em;\n       text-align: center;\n      background-color: white;\n      border-radius: 25px ;\n  }\n  .page-header{\n    text-align: center;\n  }\n  \n  .login-form {\n      margin: 1em 0 2.5em;\n  }\n  \n  /*--//signin-form--*/\n  \n  \n  /*-- agileits --*/\n  /*---- responsive-design -----*/\n  @media(max-width:1440px){\n  .main {\n      width: 56%;\n  }\n  }\n  @media(max-width:1366px){\n  .main {\n      width: 59%;\n  }\n  }\n  @media(max-width:1280px){\n  h1 {\n      font-size: 2.5em;\n  }\n  .main {\n      width: 63%;\n  }\n  }\n  @media(max-width:1080px){\n  .main {\n      width: 74%;\n    margin: 2em auto;\n  }\n  }\n  @media(max-width:1024px){\n  .main {\n      width: 82%;\n  }\n  .signin-form {\n      padding: 3em 2.5em;\n  }\n  }\n  @media(max-width:991px){\n  .main {\n      width: 85%;\n  }\n  }\n  @media(max-width:900px){\n  .main {\n      width: 93%;\n  }\n  }\n  @media(max-width:800px){\n  .main {\n      width: 51%;\n  }\n  .w3 {\n      float: none;\n      width: 100%;\n      margin-right: 0;\n      margin-bottom: 5%;\n  }\n  .agile {\n      float: none;\n      width: 100%;\n  }\n  .signin-form p a {\n      line-height: 1.8em;\n  }\n  }\n  @media(max-width:768px){\n  .main {\n      width: 53%;\n  }\n  }\n  @media(max-width:736px){\n  .main {\n      width: 55%;\n  }\n  }\n  /*-- w3layouts --*/\n  @media(max-width:667px){\n  .main {\n      width: 61%;\n  }\n  }\n  @media(max-width:640px){\n  .main {\n      width: 64%;\n  }\n  }\n  @media(max-width:600px){\n  .main {\n      width: 68%;\n  }\n  }\n  @media(max-width:568px){\n  .main {\n      width: 72%;\n  }\n  }\n  @media(max-width:480px){\n  .main {\n      width: 78%;\n  }\n  .header-social a.face {\n      width: 27%;\n  }\n  .header-social a.goog {\n      width: 21%;\n  }\n  .w3 {\n      margin-bottom: 0%;\n  }\n  .signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"]  {\n      width: 50%;\n  }\n  h1 {\n      font-size: 2.2em;\n  }\n  .profile {\n      margin-top: 2em;\n  }\n  .signin-form {\n      padding: 2em 2em;\n  }\n  .copyright p {\n      font-size: 0.9em;\n  }\n  /*-- agileits --*/\n  }\n  @media(max-width:414px){\n  .signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"] {\n      width: 50%;\n  }\n  .signin-form {\n      padding: 2em 1.5em;\n  }\n  .header-social a.face {\n      width: 25%;\n  }\n  .header-social a.goog {\n      width: 19%;\n  }\n  .tp {\n      margin: 1.7em 0 0;\n  }\n  .header-social {\n      margin-bottom: 1em;\n  }\n  .signin-form h3 {\n      margin-bottom: 1em;\n  }\n  .login-form {\n      margin: 1em 0 1.5em;\n  }\n  }\n  @media(max-width:384px){\n  h1 {\n      font-size: 2em;\n  }\n  .header-social a.face {\n      width: 22%;\n  }\n  .header-social a.goog {\n      width: 17%;\n  }\n  }\n  @media(max-width:375px){\n  .main {\n      width: 79%;\n  }\n  .header-social a.goog {\n      width: 15%;\n  }\n  }\n  @media(max-width:320px){\n  h1 {\n      font-size: 1.6em;\n  }\n  .main {\n      width: 89%;\n      margin: 1.5em auto;\n  }\n  .login-form {\n      margin: 1em 0 1.5em;\n  }\n  .signin-form {\n      padding: 1.5em 1.5em;\n  }\n  .signin-form h3 {\n      font-size: 1.5em;\n  }\n  .signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"]  {\n      width:50%;\n  }\n  .signin-form input[type=\"submit\"] {\n      padding: 0.7em 0;\n      font-size: 0.9em;\n  }\n  .signin-form p a {\n      font-size: 0.9em;\n  }\n  \n  .signin-form p a {\n      line-height: 1.5em;\n  }\n  .copyright {\n      margin: 1em;\n  }\n  }\n  /*--//responsive-design---*/ \n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "nav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n\n.sebm-google-map-container {\n  height: 500px;\n}\n\n.elements{\n    border-width: 20px;\n    border-style: solid;\n}\n\n.mobile-fab-tip {\n\tposition: fixed;\n\tright: 85px;\n\tpadding:0px 0.5rem;\n\ttext-align: right;\n\tbackground-color: #323232;\n\tborder-radius: 2px;\n\tcolor: #FFF;\n\twidth:auto;\n}\n\n/* Was for autocomplete search box for map */\n  .pac-card {\n      margin: 10px 10px 0 0;\n      border-radius: 2px 0 0 2px;\n      box-sizing: border-box;\n      -moz-box-sizing: border-box;\n      outline: none;\n      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n      background-color: #fff;\n      font-family: Roboto;\n  }\n\n      #pac-container {\n        padding-bottom: 12px;\n        margin-right: 12px;\n      }\n\n      .pac-controls {\n        display: inline-block;\n        padding: 5px 11px;\n      }\n\n      .pac-controls label {\n        font-family: Roboto;\n        font-size: 13px;\n        font-weight: 300;\n      }\n\n      #pac-input {\n        background-color: #fff;\n        font-family: Roboto;\n        font-size: 15px;\n        font-weight: 300;\n        margin-left: 12px;\n        padding: 0 11px 0 13px;\n        text-overflow: ellipsis;\n        width: 400px;\n      }\n\n      #pac-input:focus {\n        border-color: #4d90fe;\n      }\n\n      #title {\n        color: #fff;\n        background-color: #4d90fe;\n        font-size: 25px;\n        font-weight: 500;\n        padding: 6px 12px;\n      }\n      #target {\n        width: 345px;\n      }"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "nav{\n  background-color: #1289e8;\n  border: none;\n  /*box-shadow: none;*/\n}\n\n.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}\n.jumbotron .h1,.jumbotron h1{color:inherit}\n.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}\n.jumbotron>hr{border-top-color:#d5d5d5}\n.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}\n.jumbotron .container{max-width:100%}\n@media screen and (min-width:768px){\n  .jumbotron{padding-top:48px;padding-bottom:48px\n  }\n  .container .jumbotron,.container-fluid .jumbotron{\n    padding-right:60px;padding-left:60px\n  }\n  .jumbotron .h1,.jumbotron h1{\n    font-size:63px}}"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "\nnav{\n  background-color: rgba(0, 137, 236, 0);\n  border: none;\n  box-shadow: none;\n}\n \n.btn.btn-primary{\n    background-color: #2196F3;\n}\n\ndiv.z-depth-1.grey.lighten-4.row {\n    border-radius: 25px;\n}\n\n.form{\n    margin-top: 40px;\n    border-radius: 6px;\n    overflow: hidden;\n    opacity: 0;\n    -webkit-transform: translate3d(0, 500px, 0);\n            transform: translate3d(0, 500px, 0);\n    -webkit-animation: arrive 0.3s ease-in-out 0.9s forwards;\n            animation: arrive 0.3s ease-in-out 0.9s forwards;\n}\n\n  /*\n.input-field{\n    width: 100%;\n    border: 0;\n    font-size: 20px;\n    font-weight: 300;\n    outline: 0;\n    margin: 1em 0 2.5em;\n}\n\nform{\n  text-align: center;\n  background-color: rgba(52, 73, 94, 0.7);\n  border-radius: 4px;\n  position: absolute;\n  margin: 0 auto; \n  margin-top: 150px;\n}\n\n*/\n@media (min-width: 768px) {\n  /* Start the vertical centering */\n  .site-wrapper-inner {\n    position: fixed;\n    width: 100%;\n    top: 0;\n  }\n}\n.container{\n  max-width:500px;\n  max-width: 500px;\n  height: 100%;\n  margin: 10vh auto;\n  position: inherit;\n}\n\n.contain{\n           \n}\n\n.signin-form {\n    background-size: cover;\n    padding: 2em 2em;\n\t   text-align: center;\n    background-color: white;\n    border-radius: 25px ;\n}\n\n.login-form {\n    margin: 1em 0 2.5em;\n}\n\n/*--//signin-form--*/\n\n\n/*-- agileits --*/\n/*---- responsive-design -----*/\n@media(max-width:1440px){\n.main {\n    width: 56%;\n}\n}\n@media(max-width:1366px){\n.main {\n    width: 59%;\n}\n}\n@media(max-width:1280px){\nh1 {\n    font-size: 2.5em;\n}\n.main {\n    width: 63%;\n}\n}\n@media(max-width:1080px){\n.main {\n    width: 74%;\n\tmargin: 2em auto;\n}\n}\n@media(max-width:1024px){\n.main {\n    width: 82%;\n}\n.signin-form {\n    padding: 3em 2.5em;\n}\n}\n@media(max-width:991px){\n.main {\n    width: 85%;\n}\n}\n@media(max-width:900px){\n.main {\n    width: 93%;\n}\n}\n@media(max-width:800px){\n.main {\n    width: 51%;\n}\n.w3 {\n    float: none;\n    width: 100%;\n    margin-right: 0;\n    margin-bottom: 5%;\n}\n.agile {\n    float: none;\n    width: 100%;\n}\n.signin-form p a {\n    line-height: 1.8em;\n}\n}\n@media(max-width:768px){\n.main {\n    width: 53%;\n}\n}\n@media(max-width:736px){\n.main {\n    width: 55%;\n}\n}\n/*-- w3layouts --*/\n@media(max-width:667px){\n.main {\n    width: 61%;\n}\n}\n@media(max-width:640px){\n.main {\n    width: 64%;\n}\n}\n@media(max-width:600px){\n.main {\n    width: 68%;\n}\n}\n@media(max-width:568px){\n.main {\n    width: 72%;\n}\n}\n@media(max-width:480px){\n.main {\n    width: 78%;\n}\n.header-social a.face {\n    width: 27%;\n}\n.header-social a.goog {\n    width: 21%;\n}\n.w3 {\n    margin-bottom: 0%;\n}\n.signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"]  {\n    width: 50%;\n}\nh1 {\n    font-size: 2.2em;\n}\n.profile {\n    margin-top: 2em;\n}\n.signin-form {\n    padding: 2em 2em;\n}\n.copyright p {\n    font-size: 0.9em;\n}\n/*-- agileits --*/\n}\n@media(max-width:414px){\n.signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"] {\n    width: 50%;\n}\n.signin-form {\n    padding: 2em 1.5em;\n}\n.header-social a.face {\n    width: 25%;\n}\n.header-social a.goog {\n    width: 19%;\n}\n.tp {\n    margin: 1.7em 0 0;\n}\n.header-social {\n    margin-bottom: 1em;\n}\n.signin-form h3 {\n    margin-bottom: 1em;\n}\n.login-form {\n    margin: 1em 0 1.5em;\n}\n}\n@media(max-width:384px){\nh1 {\n    font-size: 2em;\n}\n.header-social a.face {\n    width: 22%;\n}\n.header-social a.goog {\n    width: 17%;\n}\n}\n@media(max-width:375px){\n.main {\n    width: 79%;\n}\n.header-social a.goog {\n    width: 15%;\n}\n}\n@media(max-width:320px){\nh1 {\n    font-size: 1.6em;\n}\n.main {\n    width: 89%;\n    margin: 1.5em auto;\n}\n.login-form {\n    margin: 1em 0 1.5em;\n}\n.signin-form {\n    padding: 1.5em 1.5em;\n}\n.signin-form h3 {\n    font-size: 1.5em;\n}\n.signin-form input[type=\"text\"], .signin-form input[type=\"password\"], .signin-form input[type=\"email\"]  {\n    width:50%;\n}\n.signin-form input[type=\"submit\"] {\n    padding: 0.7em 0;\n    font-size: 0.9em;\n}\n.signin-form p a {\n    font-size: 0.9em;\n}\n\n.signin-form p a {\n    line-height: 1.5em;\n}\n.copyright {\n    margin: 1em;\n}\n}\n/*--//responsive-design---*/"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "\n\n   <!-- Navbar elements are in this first div -->\n    <div class=\"contain\">\n\n      <flash-messages></flash-messages>\n      <!-- Routes to links in nav bar -->\n      <router-outlet></router-outlet>\n    </div>\n\n    \n\n\n\n\n\n"

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n  </nav>\n \n<div class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1>About page</h1>\n    <p class=\"lead\">About page works</p>\n    <div>\n      \n    </div>\n  </div>  \n</div>"

/***/ }),

/***/ 823:
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col l6 s12\">\n                <h5 class=\"white-text\">Footer Content</h5>\n                <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                <h5 class=\"white-text\">Links</h5>\n                <ul>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-copyright\">\n            <div class=\"container\">\n            © 2017 Copyright Text\n            <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n            </div>\n          </div>\n</footer>\n"

/***/ }),

/***/ 824:
/***/ (function(module, exports) {

module.exports = "<!-- Nav bar-->  \n<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo \"><i class=\"material-icons\">comment</i>Watado</a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"modal-trigger btn nav-sign-up \"  [routerLink]=\"['/register']\">Sign Up</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/map-page']\">MAP</a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/about']\">About</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a class=\"modal-trigger btn nav-sign-up \"  [routerLink]=\"['/register']\">Sign Up</a></li>\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/map-page']\">MAP</a></li>\n      </ul>    \n    </div>\n  </nav>\n  \n<!-- Top section-->\n  <div class=\"parallax-container\">\n    <div class=\"parallax\"> \n      <img src=\"./assets/beach.png\">\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6\">\n        <h2 class=\"cover-heading\">Discover what Lagos has in Store for you</h2>\n        <p class=\"lead\">Watado, your modern-day town crier</p>\n        <p class=\"signup\">\n          <a class=\"waves-effect waves-light btn-large signup\" [routerLink]=\"['/register']\">Sign Up</a>\n          <a id=\"login\" class=\"waves-effect waves-light btn-large login\" [routerLink]=\"['/login']\" id=\"myBtn\">Login</a>\n        </p>\n        <modal #loginModal>\n            <modal-header>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <h4><span class=\"glyphicon glyphicon-lock\"></span> Login</h4>\n            </modal-header>\n            <modal-content>\n                <form role=\"form\">\n                    <div class=\"form-group\">\n                      <label for=\"usrname\"><span class=\"glyphicon glyphicon-user\"></span> Username</label>\n                      <input type=\"text\" class=\"form-control\" id=\"usrname\" placeholder=\"Enter email\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"psw\"><span class=\"glyphicon glyphicon-eye-open\"></span> Password</label>\n                      <input type=\"text\" class=\"form-control\" id=\"psw\" placeholder=\"Enter password\">\n                    </div>\n                    <div class=\"checkbox\">\n                      <label><input type=\"checkbox\" value=\"\" checked>Remember me</label>\n                    </div>\n                      <button type=\"submit\" class=\"btn btn-success btn-block\"><span class=\"glyphicon glyphicon-off\"></span> Login</button>\n                  </form>\n            </modal-content>\n            <modal-footer>\n                <button class=\"btn btn-primary\" (click)=\"loginModal.close()\">okay!</button>\n                <p>Not a member? <a href=\"#\">Sign Up</a></p>\n                <p>Forgot <a href=\"#\">Password?</a></p>\n            </modal-footer>\n        </modal>\n      </div>\n    </div>  \n  </div>\n\n<!-- Footer -->\n<footer class=\"page-footer\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col l6 s12\">\n                <h5 class=\"white-text\">Footer Content</h5>\n                <p class=\"grey-text text-lighten-4\">You can use rows and columns here to organize your footer content.</p>\n              </div>\n              <div class=\"col l4 offset-l2 s12\">\n                <h5 class=\"white-text\">Links</h5>\n                <ul>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 1</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 2</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 3</a></li>\n                  <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Link 4</a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\"footer-copyright\">\n            <div class=\"container\">\n            © 2017 Copyright Text\n            <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n            </div>\n          </div>\n</footer> "

/***/ }),

/***/ 825:
/***/ (function(module, exports) {

module.exports = "\n<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n\t\t\n\n<div class=\"container\">\n\t\t\n\t\t\t  <div class=\"z-depth-1 grey lighten-4 row\" style=\"padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n\t\t\t\t\t<h2 class=\"page-header\">Login</h2>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<form (submit)=\"onLoginSubmit()\" class=\"col s12\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t<label>Username</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<label>Password</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n\t\t\t\t\t\t</form>\n\t\t\t\t</div>   \n\t  \n</div>"

/***/ }),

/***/ 826:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n<!-- this creates a google map on the page with the given lat/lng from -->\n<!-- the component as the initial center of the map: -->\n\n<div class=\"container\">\n\n    <div class=\"row\">\n      <h1>Welcome to Lagos</h1>\n      <div class=\"col s12\">\n        <div id=\"map\"> \n          <div class=\"form-group\">\n            <input id=\"autocomplete\" placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" class=\"form-control\" #search [formControl]=\"searchControl\">\n          </div>\n          <div class=\"fixed-action-btn click-to-toggle\">\n              <a class=\"btn-floating btn-large orange\">\n                <i class=\"large material-icons\">location_on</i>\n              </a>\n              <ul>\n\t\t\t\t\t\t\t\t\t<li>\n                    <a href=\"#\" class=\"btn-floating blue modal-trigger\"><i class=\"material-icons\">supervisor_account</i></a>\n                    <a href=\"#\" class=\"btn-floating mobile-fab-tip modal-trigger\">Search for a place to see number of pins dropped</a>\n                  </li> \n                  <li>\n                    <a href=\"#\" class=\"btn-floating blue modal-trigger\"><i class=\"material-icons\">my_location</i></a>\n                    <a href=\"#\" class=\"btn-floating mobile-fab-tip modal-trigger\">Drop a pin at your location</a>\n                  </li>   \n              </ul>\n            </div>\n          <agm-map\n            [latitude]=\"lat\"\n            [longitude]=\"lng\"\n            [zoom]=\"zoom\"\n            [disableDefaultUI]= false\n            [zoomControl]=\"false\"\n            (mapClick)=\"addMarker($event)\"\n            >  \n            <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\"\n            >\n              <agm-marker\n                *ngFor=\"let m of markers, let i = index\"\n                [latitude]=\"m.lat\"\n                [longitude]=\"m.lng\"\n                [markerDraggable]=\"m.draggable\"\n                (dragEnd)=\"markerDragEnd(m, $event)\"\n              >\n              </agm-marker>\n            </agm-marker-cluster>\n          </agm-map>\n        </div>\n      </div>    \n\n  </div>\n</div>\n\n \n\n\n\n\n"

/***/ }),

/***/ 827:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n  \n<div class=\"jumbotron text-center\">\n  <div class=\"container\">\n    <h1>Meet the Team Page</h1>\n    <p class=\"lead\">Meet the team page works</p>\n    <div>\n      \n    </div>\n  </div>  \n</div>\n"

/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a [routerLink]=\"['/']\" class=\"brand-logo center\"><i class=\"material-icons\">comment</i>Watado</a>\n    </div>\n</nav>\n  <div class=\"container\">\n      <div class=\"row\">\n            <div class=\"z-depth-1 grey lighten-4 row\" style=\"padding: 32px 48px 0px 48px; border: 1px solid #EEE;\">\n            <h3>Sign Up</h3>\n              <form  (submit)=\"onRegisterSubmit()\"  class=\"col s12\">\n                \n            <div class=\"row\">\n              <div class=\"input-field \">\n                <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n                <label for=\"email\">Email</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field \">\n                <input id=\"user_name\" type=\"text\" [(ngModel)]=\"username\" name=\"username\"class=\"form-control\">\n                <label for=\"user\">Username</label>\n              </div>\n            </div> \n            <div class=\"row\">\n              <div class=\"input-field \">\n                <input id=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n                <label for=\"password\">Password</label>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"input-field \">\n                <input id=\"password_conf\" type=\"password\" [(ngModel)]=\"passwordConf\" name=\"passwordConf\" class=\"form-control\">\n                <label for=\"password_Conf\">Confirm Password</label>\n              </div>\n            </div>\n            <br>\n            <div>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n            </div>  \n            <div class=\"section\">\n                <p>Already have an account ? <a [routerLink]=\"['/login']\">Login</a></p>\n              <p><a href=\"#\"> By clicking register, I agree to your terms</a></p>\n            </div>\n              </form>\n            </div>    \n      </div>  \n    </div>\n  \n<!-- \n<div class=\"login-wrapper\">\n  <div class=\"container\">\n        <div class=\"signin-form profile\">\n          <h3>Sign Up</h3>\n          <div class=\"login-form\">\n            <form  (submit)=\"onRegisterSubmit()\">\n              <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"E-mail\" required=\"\">\n              <input type=\"text\" name=\"username\" [(ngModel)]=\"username\"  placeholder=\"Username\" required=\"\">\n              <input type=\"password\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" required=\"\">\n              <input type=\"password\" name=\"passwordConf\" [(ngModel)]=\"passwordConf\" placeholder=\"Confirm Password\" required=\"\">\n              <div>\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n              </div>\n            </form>\n          </div>\n          <p><a href=\"#\"> By clicking register, I agree to your terms</a></p>\n      </div>\n      <div class=\"clear\"></div>\n  </div>      \n   \n  <div class=\"container\">\n    \t<div class=\"signup-form\">\n      <form (submit)=\"onRegisterSubmit()\" >\n           <p class=\"m-b-lg font-thin\">Join us and start view what people are currently saying about places around you</p>\n          <button (click)=\"login()\" class=\"btn btn-lg btn-primary btn-block\">\n          Sign Up with Facebook\n          </button>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"email\" type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n              <label for=\"email\">Email</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"user_name\" type=\"text\" [(ngModel)]=\"username\" name=\"username\"class=\"form-control\">\n              <label for=\"user\">Username</label>\n            </div>\n          </div> \n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"password\" type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n              <label for=\"password\">Password</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <input id=\"password_conf\" type=\"password\" [(ngModel)]=\"passwordConf\" name=\"passwordConf\" class=\"form-control\">\n              <label for=\"password_Conf\">Confirm Password</label>\n            </div>\n          </div>\n          <br>\n          <div>\n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n          </div>  \n          <div class=\"section\">\n            </div>\n      </form>\n    \t</div>        \n</div>\n    -->\n"

/***/ })

},[1102]);
//# sourceMappingURL=main.bundle.map