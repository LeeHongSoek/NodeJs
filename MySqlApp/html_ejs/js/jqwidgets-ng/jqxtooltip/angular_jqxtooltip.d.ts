/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxTooltipComponent implements OnChanges {
    attrAbsolutePositionX: number;
    attrAbsolutePositionY: number;
    attrAutoHide: boolean;
    attrAutoHideDelay: number;
    attrAnimationShowDelay: number | string;
    attrAnimationHideDelay: number | string;
    attrContent: string;
    attrCloseOnClick: boolean;
    attrDisabled: boolean;
    attrEnableBrowserBoundsDetection: boolean;
    attrLeft: number;
    attrName: string;
    attrOpacity: number;
    attrPosition: string;
    attrRtl: boolean;
    attrShowDelay: number;
    attrShowArrow: boolean;
    attrTop: number | string;
    attrTrigger: string;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxTooltip;
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
    absolutePositionX(arg?: number): number;
    absolutePositionY(arg?: number): number;
    autoHide(arg?: boolean): boolean;
    autoHideDelay(arg?: number): number;
    animationShowDelay(arg?: number | string): number | string;
    animationHideDelay(arg?: number | string): number | string;
    content(arg?: string): string;
    closeOnClick(arg?: boolean): boolean;
    disabled(arg?: boolean): boolean;
    enableBrowserBoundsDetection(arg?: boolean): boolean;
    height(arg?: number | string): number | string;
    left(arg?: number): number;
    name(arg?: string): string;
    opacity(arg?: number): number;
    position(arg?: string): string;
    rtl(arg?: boolean): boolean;
    showDelay(arg?: number): number;
    showArrow(arg?: boolean): boolean;
    top(arg?: number | string): number | string;
    trigger(arg?: string): string;
    theme(arg?: string): string;
    width(arg?: number | string): number | string;
    close(index?: number): void;
    destroy(): void;
    open(left?: number, top?: number): void;
    refresh(): void;
    onClose: EventEmitter<any>;
    onClosing: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    onOpening: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxTooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxTooltipComponent, "jqxTooltip", never, { "attrAbsolutePositionX": "absolutePositionX"; "attrAbsolutePositionY": "absolutePositionY"; "attrAutoHide": "autoHide"; "attrAutoHideDelay": "autoHideDelay"; "attrAnimationShowDelay": "animationShowDelay"; "attrAnimationHideDelay": "animationHideDelay"; "attrContent": "content"; "attrCloseOnClick": "closeOnClick"; "attrDisabled": "disabled"; "attrEnableBrowserBoundsDetection": "enableBrowserBoundsDetection"; "attrLeft": "left"; "attrName": "name"; "attrOpacity": "opacity"; "attrPosition": "position"; "attrRtl": "rtl"; "attrShowDelay": "showDelay"; "attrShowArrow": "showArrow"; "attrTop": "top"; "attrTrigger": "trigger"; "attrTheme": "theme"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onClose": "onClose"; "onClosing": "onClosing"; "onOpen": "onOpen"; "onOpening": "onOpening"; }, never, ["*"]>;
}