/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxProgressBarComponent implements OnChanges {
    attrAnimationDuration: number;
    attrColorRanges: Array<jqwidgets.ProgressBarColorRanges>;
    attrDisabled: boolean;
    attrLayout: string;
    attrMax: string | number;
    attrMin: number | string;
    attrOrientation: string;
    attrRtl: boolean;
    attrRenderText: (text?: jqwidgets.ProgressBarRenderText['text'], value?: jqwidgets.ProgressBarRenderText['value']) => string;
    attrShowText: boolean;
    attrTemplate: string;
    attrTheme: string;
    attrValue: string | number;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxProgressBar;
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
    animationDuration(arg?: number): number;
    colorRanges(arg?: Array<jqwidgets.ProgressBarColorRanges>): Array<jqwidgets.ProgressBarColorRanges>;
    disabled(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    layout(arg?: string): string;
    max(arg?: string | number): string | number;
    min(arg?: number | string): number | string;
    orientation(arg?: string): string;
    rtl(arg?: boolean): boolean;
    renderText(arg?: (text?: jqwidgets.ProgressBarRenderText['text'], value?: jqwidgets.ProgressBarRenderText['value']) => string): (text?: jqwidgets.ProgressBarRenderText['text'], value?: jqwidgets.ProgressBarRenderText['value']) => string;
    showText(arg?: boolean): boolean;
    template(arg?: string): string;
    theme(arg?: string): string;
    value(arg?: string | number): string | number;
    width(arg?: string | number): string | number;
    actualValue(value: number | string): void;
    destroy(): void;
    val(value?: number | string): any;
    onComplete: EventEmitter<any>;
    onInvalidValue: EventEmitter<any>;
    onValueChanged: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxProgressBarComponent, "jqxProgressBar", never, { "attrAnimationDuration": "animationDuration"; "attrColorRanges": "colorRanges"; "attrDisabled": "disabled"; "attrLayout": "layout"; "attrMax": "max"; "attrMin": "min"; "attrOrientation": "orientation"; "attrRtl": "rtl"; "attrRenderText": "renderText"; "attrShowText": "showText"; "attrTemplate": "template"; "attrTheme": "theme"; "attrValue": "value"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onComplete": "onComplete"; "onInvalidValue": "onInvalidValue"; "onValueChanged": "onValueChanged"; }, never, ["*"]>;
}
