/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class jqxInputComponent implements ControlValueAccessor, OnChanges {
    attrDisabled: boolean;
    attrDropDownWidth: number | string;
    attrDisplayMember: string;
    attrItems: number;
    attrMinLength: number;
    attrMaxLength: number;
    attrOpened: boolean;
    attrPlaceHolder: string;
    attrPopupZIndex: number;
    attrQuery: string;
    attrRenderer: (itemValue?: string, inputValue?: string) => string;
    attrRtl: boolean;
    attrSearchMode: string;
    attrSource: any;
    attrTheme: string;
    attrValueMember: string;
    attrValue: number | string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxInput;
    initialLoad: boolean;
    private onTouchedCallback;
    private onChangeCallback;
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
    get ngValue(): any;
    set ngValue(value: any);
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setOptions(options: any): void;
    disabled(arg?: boolean): boolean;
    dropDownWidth(arg?: number | string): number | string;
    displayMember(arg?: string): string;
    height(arg?: string | number): string | number;
    items(arg?: number): number;
    minLength(arg?: number): number;
    maxLength(arg?: number): number;
    opened(arg?: boolean): boolean;
    placeHolder(arg?: string): string;
    popupZIndex(arg?: number): number;
    query(arg?: string): string;
    renderer(arg?: (itemValue?: string, inputValue?: string) => string): (itemValue?: string, inputValue?: string) => string;
    rtl(arg?: boolean): boolean;
    searchMode(arg?: string): string;
    source(arg?: any): any;
    theme(arg?: string): string;
    valueMember(arg?: string): string;
    width(arg?: string | number): string | number;
    value(arg?: number | string): number | string;
    destroy(): void;
    focus(): void;
    selectAll(): void;
    val(value?: number | string): any;
    onChange: EventEmitter<any>;
    onClose: EventEmitter<any>;
    onOpen: EventEmitter<any>;
    onSelect: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxInputComponent, "jqxInput", never, { "attrDisabled": "disabled"; "attrDropDownWidth": "dropDownWidth"; "attrDisplayMember": "displayMember"; "attrItems": "items"; "attrMinLength": "minLength"; "attrMaxLength": "maxLength"; "attrOpened": "opened"; "attrPlaceHolder": "placeHolder"; "attrPopupZIndex": "popupZIndex"; "attrQuery": "query"; "attrRenderer": "renderer"; "attrRtl": "rtl"; "attrSearchMode": "searchMode"; "attrSource": "source"; "attrTheme": "theme"; "attrValueMember": "valueMember"; "attrValue": "value"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onChange": "onChange"; "onClose": "onClose"; "onOpen": "onOpen"; "onSelect": "onSelect"; }, never, never>;
}