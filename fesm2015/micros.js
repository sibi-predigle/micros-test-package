import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MicrosService {
    constructor() { }
}
MicrosService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MicrosService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MicrosComponent {
    constructor() { }
    ngOnInit() {
    }
}
MicrosComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MicrosComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: MicrosComponent, selector: "lib-micros", ngImport: i0, template: `
    <p>
      micros works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-micros',
                    template: `
    <p>
      micros works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class C1Component {
    constructor() { }
    ngOnInit() {
    }
}
C1Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: C1Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
C1Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: C1Component, selector: "lib-c1", ngImport: i0, template: "<p>c1 works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: C1Component, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-c1',
                    templateUrl: './c1.component.html',
                    styleUrls: ['./c1.component.css']
                }]
        }], ctorParameters: function () { return []; } });

class C2Component {
    constructor() { }
    ngOnInit() {
    }
}
C2Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: C2Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
C2Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: C2Component, selector: "lib-c2", ngImport: i0, template: "<div>\n  <span>\n    <p>c2 works!</p>\n    <h2>hehaheihaiehails</h2>\n  </span>\n</div>\n", styles: ["div span p{color:green}div span h2{color:#ff0}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: C2Component, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-c2',
                    templateUrl: './c2.component.html',
                    styleUrls: ['./c2.component.scss']
                }]
        }], ctorParameters: function () { return []; } });

class C3Component {
    constructor() { }
    ngOnInit() {
    }
}
C3Component.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: C3Component, deps: [], target: i0.ɵɵFactoryTarget.Component });
C3Component.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: C3Component, selector: "lib-c3", ngImport: i0, template: "<p>c3 works!</p>\n", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: C3Component, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-c3',
                    templateUrl: './c3.component.html',
                    styleUrls: ['./c3.component.scss']
                }]
        }], ctorParameters: function () { return []; } });

class MicrosModule {
}
MicrosModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MicrosModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosModule, declarations: [MicrosComponent, C1Component, C2Component, C3Component], exports: [MicrosComponent, C1Component, C2Component] });
MicrosModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: MicrosModule, decorators: [{
            type: NgModule,
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

export { C1Component, C2Component, MicrosComponent, MicrosModule, MicrosService };
//# sourceMappingURL=micros.js.map
