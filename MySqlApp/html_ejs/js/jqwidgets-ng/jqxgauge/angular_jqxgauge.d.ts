/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxGaugeComponent implements OnChanges {
    attrAnimationDuration: string | number;
    attrBorder: jqwidgets.GaugeBorder;
    attrCaption: jqwidgets.GaugeCaption;
    attrCap: jqwidgets.GaugeCap;
    attrColorScheme: string;
    attrDisabled: boolean;
    attrEasing: string;
    attrEndAngle: number | string;
    attrInt64: boolean;
    attrLabels: jqwidgets.GaugeLabels;
    attrMin: number;
    attrMax: number | string;
    attrPointer: jqwidgets.GaugePointer;
    attrRadius: number | string;
    attrRanges: Array<jqwidgets.GaugeRanges>;
    attrStartAngle: number | string;
    attrShowRanges: boolean;
    attrStyles: jqwidgets.GaugeStyle;
    attrTicksMajor: jqwidgets.GaugeTicks;
    attrTicksMinor: jqwidgets.GaugeTicks;
    attrTicksDistance: string;
    attrValue: number;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxGauge;
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
    animationDuration(arg?: string | number): string | number;
    border(arg?: jqwidgets.GaugeBorder): jqwidgets.GaugeBorder;
    caption(arg?: jqwidgets.GaugeCaption): jqwidgets.GaugeCaption;
    cap(arg?: jqwidgets.GaugeCap): jqwidgets.GaugeCap;
    colorScheme(arg?: string): string;
    disabled(arg?: boolean): boolean;
    easing(arg?: string): string;
    endAngle(arg?: number | string): number | string;
    height(arg?: number | string): number | string;
    int64(arg?: boolean): boolean;
    labels(arg?: jqwidgets.GaugeLabels): jqwidgets.GaugeLabels;
    min(arg?: number): number;
    max(arg?: number | string): number | string;
    pointer(arg?: jqwidgets.GaugePointer): jqwidgets.GaugePointer;
    radius(arg?: number | string): number | string;
    ranges(arg?: Array<jqwidgets.GaugeRanges>): Array<jqwidgets.GaugeRanges>;
    startAngle(arg?: number | string): number | string;
    showRanges(arg?: boolean): boolean;
    styles(arg?: jqwidgets.GaugeStyle): jqwidgets.GaugeStyle;
    ticksMajor(arg?: jqwidgets.GaugeTicks): jqwidgets.GaugeTicks;
    ticksMinor(arg?: jqwidgets.GaugeTicks): jqwidgets.GaugeTicks;
    ticksDistance(arg?: string): string;
    value(arg?: number): number;
    width(arg?: number | string): number | string;
    disable(): void;
    enable(): void;
    val(value?: number): any;
    onValueChanging: EventEmitter<any>;
    onValueChanged: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxGaugeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxGaugeComponent, "jqxGauge", never, { "attrAnimationDuration": "animationDuration"; "attrBorder": "border"; "attrCaption": "caption"; "attrCap": "cap"; "attrColorScheme": "colorScheme"; "attrDisabled": "disabled"; "attrEasing": "easing"; "attrEndAngle": "endAngle"; "attrInt64": "int64"; "attrLabels": "labels"; "attrMin": "min"; "attrMax": "max"; "attrPointer": "pointer"; "attrRadius": "radius"; "attrRanges": "ranges"; "attrStartAngle": "startAngle"; "attrShowRanges": "showRanges"; "attrStyles": "styles"; "attrTicksMajor": "ticksMajor"; "attrTicksMinor": "ticksMinor"; "attrTicksDistance": "ticksDistance"; "attrValue": "value"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onValueChanging": "onValueChanging"; "onValueChanged": "onValueChanged"; }, never, ["*"]>;
}
