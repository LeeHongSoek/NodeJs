/// <reference path="../jqwidgets.d.ts" />
import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxPivotDesignerComponent implements OnChanges {
    attrType: string;
    attrTarget: any;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxPivotDesigner;
    constructor(containerElement: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): boolean;
    arraysEqual(attrValue: any, hostValue: any): boolean;
    manageAttributes(): any;
    moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void;
    moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void;
    createComponent(options?: any): void;
    createWidget(options?: any): void;
    __updateRect__(): void;
    setOptions(options: any): void;
    type(arg?: string): string;
    target(arg?: any): any;
    refresh(): void;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxPivotDesignerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxPivotDesignerComponent, "jqxPivotDesigner", never, { "attrType": "type"; "attrTarget": "target"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, {}, never, ["*"]>;
}
