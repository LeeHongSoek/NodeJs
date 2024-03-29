/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxButtonComponent implements OnChanges {
    attrDisabled: boolean;
    attrImgSrc: string;
    attrImgWidth: number | string;
    attrImgHeight: number | string;
    attrImgPosition: string;
    attrRoundedCorners: string;
    attrRtl: boolean;
    attrEnableDefault: boolean;
    attrCursor: boolean;
    attrTextPosition: string;
    attrTextImageRelation: string;
    attrTheme: string;
    attrTemplate: string;
    attrValue: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxButton;
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
    disabled(arg?: boolean): boolean;
    height(arg?: number | string): number | string;
    imgSrc(arg?: string): string;
    imgWidth(arg?: number | string): number | string;
    imgHeight(arg?: number | string): number | string;
    imgPosition(arg?: string): string;
    roundedCorners(arg?: string): string;
    rtl(arg?: boolean): boolean;
    enableDefault(arg?: boolean): boolean;
    cursor(arg?: boolean): boolean;
    textPosition(arg?: string): string;
    textImageRelation(arg?: string): string;
    theme(arg?: string): string;
    template(arg?: string): string;
    width(arg?: number | string): number | string;
    value(arg?: string): string;
    destroy(): void;
    focus(): void;
    render(): void;
    val(value?: string): any;
    onClick: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxButtonComponent, "jqxButton", never, { "attrDisabled": "disabled"; "attrImgSrc": "imgSrc"; "attrImgWidth": "imgWidth"; "attrImgHeight": "imgHeight"; "attrImgPosition": "imgPosition"; "attrRoundedCorners": "roundedCorners"; "attrRtl": "rtl"; "attrEnableDefault": "enableDefault"; "attrCursor": "cursor"; "attrTextPosition": "textPosition"; "attrTextImageRelation": "textImageRelation"; "attrTheme": "theme"; "attrTemplate": "template"; "attrValue": "value"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onClick": "onClick"; }, never, ["*"]>;
}
