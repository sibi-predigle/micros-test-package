(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('micros', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.micros = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var MicrosService = /** @class */ (function () {
        function MicrosService() {
        }
        return MicrosService;
    }());
    MicrosService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    MicrosService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var MicrosComponent = /** @class */ (function () {
        function MicrosComponent() {
        }
        MicrosComponent.prototype.ngOnInit = function () {
        };
        return MicrosComponent;
    }());
    MicrosComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    MicrosComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MicrosComponent, selector: "lib-micros", ngImport: i0__namespace, template: "\n    <p>\n      micros works!\n    </p>\n  ", isInline: true });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-micros',
                        template: "\n    <p>\n      micros works!\n    </p>\n  ",
                        styles: []
                    }]
            }], ctorParameters: function () { return []; } });

    var C1Component = /** @class */ (function () {
        function C1Component() {
        }
        C1Component.prototype.ngOnInit = function () {
        };
        return C1Component;
    }());
    C1Component.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: C1Component, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    C1Component.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: C1Component, selector: "lib-c1", ngImport: i0__namespace, template: "<p>c1 works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: C1Component, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-c1',
                        templateUrl: './c1.component.html',
                        styleUrls: ['./c1.component.css']
                    }]
            }], ctorParameters: function () { return []; } });

    var C2Component = /** @class */ (function () {
        function C2Component() {
        }
        C2Component.prototype.ngOnInit = function () {
        };
        return C2Component;
    }());
    C2Component.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: C2Component, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    C2Component.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: C2Component, selector: "lib-c2", ngImport: i0__namespace, template: "<div>\n  <span>\n    <p>c2 works!</p>\n    <h2>hehaheihaiehails</h2>\n  </span>\n</div>\n", styles: ["div span p{color:green}div span h2{color:#ff0}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: C2Component, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-c2',
                        templateUrl: './c2.component.html',
                        styleUrls: ['./c2.component.scss']
                    }]
            }], ctorParameters: function () { return []; } });

    var C3Component = /** @class */ (function () {
        function C3Component() {
        }
        C3Component.prototype.ngOnInit = function () {
        };
        return C3Component;
    }());
    C3Component.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: C3Component, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    C3Component.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: C3Component, selector: "lib-c3", ngImport: i0__namespace, template: "<p>c3 works!</p>\n", styles: [""] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: C3Component, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-c3',
                        templateUrl: './c3.component.html',
                        styleUrls: ['./c3.component.scss']
                    }]
            }], ctorParameters: function () { return []; } });

    var MicrosModule = /** @class */ (function () {
        function MicrosModule() {
        }
        return MicrosModule;
    }());
    MicrosModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    MicrosModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosModule, declarations: [MicrosComponent, C1Component, C2Component, C3Component], exports: [MicrosComponent, C1Component, C2Component] });
    MicrosModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: MicrosModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [MicrosComponent, C1Component, C2Component, C3Component],
                        imports: [],
                        exports: [MicrosComponent, C1Component, C2Component],
                    }]
            }] });

    /*
     * Public API Surface of micros
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.C1Component = C1Component;
    exports.C2Component = C2Component;
    exports.MicrosComponent = MicrosComponent;
    exports.MicrosModule = MicrosModule;
    exports.MicrosService = MicrosService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=micros.umd.js.map
