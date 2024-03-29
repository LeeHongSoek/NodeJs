/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxDockingLayoutComponent implements OnChanges {
    attrContextMenu: boolean;
    attrLayout: Array<jqwidgets.DockingLayoutLayout>;
    attrMinGroupHeight: number | string;
    attrMinGroupWidth: number | string;
    attrResizable: boolean;
    attrRtl: boolean;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxDockingLayout;
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
    contextMenu(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    layout(arg?: Array<jqwidgets.DockingLayoutLayout>): Array<jqwidgets.DockingLayoutLayout>;
    minGroupHeight(arg?: number | string): number | string;
    minGroupWidth(arg?: number | string): number | string;
    resizable(arg?: boolean): boolean;
    rtl(arg?: boolean): boolean;
    theme(arg?: string): string;
    width(arg?: string | number): string | number;
    addFloatGroup(width: number | string, height: number | string, position: jqwidgets.DockingLayoutLayoutPosition, panelType: string, title: string, content: string, initContent: any): void;
    destroy(): void;
    loadLayout(layout: any): void;
    refresh(): void;
    render(): void;
    saveLayout(): any;
    onDock: EventEmitter<any>;
    onFloatGroupClosed: EventEmitter<any>;
    onFloat: EventEmitter<any>;
    onPin: EventEmitter<any>;
    onResize: EventEmitter<any>;
    onUnpin: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxDockingLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxDockingLayoutComponent, "jqxDockingLayout", never, { "attrContextMenu": "contextMenu"; "attrLayout": "layout"; "attrMinGroupHeight": "minGroupHeight"; "attrMinGroupWidth": "minGroupWidth"; "attrResizable": "resizable"; "attrRtl": "rtl"; "attrTheme": "theme"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onDock": "onDock"; "onFloatGroupClosed": "onFloatGroupClosed"; "onFloat": "onFloat"; "onPin": "onPin"; "onResize": "onResize"; "onUnpin": "onUnpin"; }, never, ["*"]>;
}
