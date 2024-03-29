/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxKanbanComponent implements OnChanges {
    attrColumnRenderer: (element?: jqwidgets.KanbanColumnRenderer['element'], collapsedElement?: jqwidgets.KanbanColumnRenderer['collapsedElement'], column?: jqwidgets.KanbanColumnRenderer['column']) => void;
    attrColumns: Array<jqwidgets.KanbanColumns>;
    attrConnectWith: string;
    attrHeaderHeight: number | string;
    attrHeaderWidth: number;
    attrItemRenderer: (element?: jqwidgets.KanbanItemRenderer['element'], item?: jqwidgets.KanbanItemRenderer['item'], resource?: jqwidgets.KanbanItemRenderer['resource']) => void;
    attrReady: () => void;
    attrRtl: boolean;
    attrSource: any;
    attrResources: any;
    attrTemplate: string;
    attrTemplateContent: any;
    attrTheme: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxKanban;
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
    columnRenderer(arg?: (element?: jqwidgets.KanbanColumnRenderer['element'], collapsedElement?: jqwidgets.KanbanColumnRenderer['collapsedElement'], column?: jqwidgets.KanbanColumnRenderer['column']) => void): (element?: jqwidgets.KanbanColumnRenderer['element'], collapsedElement?: jqwidgets.KanbanColumnRenderer['collapsedElement'], column?: jqwidgets.KanbanColumnRenderer['column']) => void;
    columns(arg?: Array<jqwidgets.KanbanColumns>): Array<jqwidgets.KanbanColumns>;
    connectWith(arg?: string): string;
    headerHeight(arg?: number | string): number | string;
    headerWidth(arg?: number): number;
    height(arg?: string | number): string | number;
    itemRenderer(arg?: (element?: jqwidgets.KanbanItemRenderer['element'], item?: jqwidgets.KanbanItemRenderer['item'], resource?: jqwidgets.KanbanItemRenderer['resource']) => void): (element?: jqwidgets.KanbanItemRenderer['element'], item?: jqwidgets.KanbanItemRenderer['item'], resource?: jqwidgets.KanbanItemRenderer['resource']) => void;
    ready(arg?: () => void): () => void;
    rtl(arg?: boolean): boolean;
    source(arg?: any): any;
    resources(arg?: any): any;
    template(arg?: string): string;
    templateContent(arg?: any): any;
    theme(arg?: string): string;
    width(arg?: string | number): string | number;
    addItem(newItem: any): void;
    destroy(): void;
    getColumn(dataField: string): jqwidgets.KanbanColumns;
    getColumnItems(dataField: string): Array<jqwidgets.KanbanSource>;
    getItems(): jqwidgets.KanbanSource;
    removeItem(itemId: string): void;
    updateItem(itemId: string, newContent: jqwidgets.KanbanUpdateItem): void;
    onColumnAttrClicked: EventEmitter<any>;
    onColumnCollapsed: EventEmitter<any>;
    onColumnExpanded: EventEmitter<any>;
    onItemAttrClicked: EventEmitter<any>;
    onItemMoved: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxKanbanComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxKanbanComponent, "jqxKanban", never, { "attrColumnRenderer": "columnRenderer"; "attrColumns": "columns"; "attrConnectWith": "connectWith"; "attrHeaderHeight": "headerHeight"; "attrHeaderWidth": "headerWidth"; "attrItemRenderer": "itemRenderer"; "attrReady": "ready"; "attrRtl": "rtl"; "attrSource": "source"; "attrResources": "resources"; "attrTemplate": "template"; "attrTemplateContent": "templateContent"; "attrTheme": "theme"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onColumnAttrClicked": "onColumnAttrClicked"; "onColumnCollapsed": "onColumnCollapsed"; "onColumnExpanded": "onColumnExpanded"; "onItemAttrClicked": "onItemAttrClicked"; "onItemMoved": "onItemMoved"; }, never, ["*"]>;
}
