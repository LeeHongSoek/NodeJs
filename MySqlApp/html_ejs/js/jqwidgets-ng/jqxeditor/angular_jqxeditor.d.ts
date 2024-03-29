/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class jqxEditorComponent implements ControlValueAccessor, OnChanges {
    attrCreateCommand: (name: jqwidgets.EditorCreateCommand['name']) => void;
    attrDisabled: boolean;
    attrEditable: boolean;
    attrLineBreak: string;
    attrLocalization: jqwidgets.EditorLocalization;
    attrPasteMode: string;
    attrRtl: boolean;
    attrStylesheets: Array<any>;
    attrTheme: string;
    attrToolbarPosition: string;
    attrTools: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxEditor;
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
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setOptions(options: any): void;
    createCommand(arg?: (name: jqwidgets.EditorCreateCommand['name']) => void): (name: jqwidgets.EditorCreateCommand['name']) => void;
    disabled(arg?: boolean): boolean;
    editable(arg?: boolean): boolean;
    height(arg?: string | number): string | number;
    lineBreak(arg?: string): string;
    localization(arg?: jqwidgets.EditorLocalization): jqwidgets.EditorLocalization;
    pasteMode(arg?: string): string;
    rtl(arg?: boolean): boolean;
    stylesheets(arg?: Array<any>): Array<any>;
    theme(arg?: string): string;
    toolbarPosition(arg?: string): string;
    tools(arg?: string): string;
    width(arg?: string | number): string | number;
    destroy(): void;
    focus(): void;
    print(): void;
    setMode(mode: boolean): void;
    val(value?: string): any;
    onChange: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxEditorComponent, "jqxEditor", never, { "attrCreateCommand": "createCommand"; "attrDisabled": "disabled"; "attrEditable": "editable"; "attrLineBreak": "lineBreak"; "attrLocalization": "localization"; "attrPasteMode": "pasteMode"; "attrRtl": "rtl"; "attrStylesheets": "stylesheets"; "attrTheme": "theme"; "attrToolbarPosition": "toolbarPosition"; "attrTools": "tools"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onChange": "onChange"; }, never, ["*"]>;
}
