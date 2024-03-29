/// <reference path="../jqwidgets.d.ts" />
import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxDrawComponent implements OnChanges {
    attrRenderEngine: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxDraw;
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
    renderEngine(arg?: string): string;
    attr(element?: any, attributes?: any): void;
    circle(cx?: number, cy?: number, r?: number, attributes?: any): any;
    clear(): void;
    getAttr(element?: any, attributes?: any): string;
    getSize(): any;
    line(x1?: number, y1?: number, x2?: number, y2?: number, attributes?: any): any;
    measureText(text?: string, angle?: number, attributes?: any): any;
    on(element?: any, event?: string, func?: any): void;
    off(element?: any, event?: string, func?: any): void;
    path(path?: string, attributes?: any): any;
    pieslice(cx?: number, xy?: number, innerRadius?: any, outerRadius?: any, fromAngle?: number, endAngle?: number, centerOffset?: number, attributes?: any): any;
    refresh(): void;
    rect(x?: number, y?: number, width?: number | string, height?: number | string, attributes?: any): any;
    saveAsJPEG(image?: string, url?: string): void;
    saveAsPNG(image?: string, url?: string): void;
    text(text?: string, x?: number, y?: number, width?: number | string, height?: number | string, angle?: number, attributes?: any, clip?: boolean, halign?: string, valign?: string, rotateAround?: string): any;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxDrawComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxDrawComponent, "jqxDraw", never, { "attrRenderEngine": "renderEngine"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, {}, never, ["*"]>;
}
