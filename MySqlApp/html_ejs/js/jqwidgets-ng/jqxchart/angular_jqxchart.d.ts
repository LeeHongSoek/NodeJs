/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxChartComponent implements OnChanges {
    attrTitle: string;
    attrDescription: string;
    attrSource: any;
    attrShowBorderLine: boolean;
    attrBorderLineColor: string;
    attrBorderLineWidth: number;
    attrBackgroundColor: string;
    attrBackgroundImage: string;
    attrShowLegend: boolean;
    attrLegendLayout: jqwidgets.ChartLegendLayout;
    attrPadding: jqwidgets.ChartPadding;
    attrTitlePadding: jqwidgets.ChartPadding;
    attrColorScheme: string;
    attrGreyScale: boolean;
    attrShowToolTips: boolean;
    attrToolTipShowDelay: number;
    attrToolTipHideDelay: number;
    attrToolTipMoveDuration: number;
    attrDrawBefore: (renderer?: jqwidgets.ChartDrawBefore['renderer'], rect?: jqwidgets.ChartDrawBefore['rect']) => void;
    attrDraw: (renderer?: jqwidgets.ChartDraw['renderer'], rect?: jqwidgets.ChartDraw['rect']) => void;
    attrRtl: boolean;
    attrEnableCrosshairs: boolean;
    attrCrosshairsColor: string;
    attrCrosshairsDashStyle: string;
    attrCrosshairsLineWidth: number;
    attrColumnSeriesOverlap: boolean;
    attrEnabled: boolean;
    attrEnableAnimations: boolean;
    attrAnimationDuration: number;
    attrEnableAxisTextAnimation: boolean;
    attrRenderEngine: string;
    attrXAxis: jqwidgets.ChartXAxis;
    attrValueAxis: jqwidgets.ChartValueAxis;
    attrCategoryAxis: any;
    attrSeriesGroups: Array<jqwidgets.ChartSeriesGroup>;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxChart;
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
    title(arg?: string): string;
    description(arg?: string): string;
    source(arg?: any): any;
    showBorderLine(arg?: boolean): boolean;
    borderLineColor(arg?: string): string;
    borderLineWidth(arg?: number): number;
    backgroundColor(arg?: string): string;
    backgroundImage(arg?: string): string;
    showLegend(arg?: boolean): boolean;
    legendLayout(arg?: jqwidgets.ChartLegendLayout): jqwidgets.ChartLegendLayout;
    padding(arg?: jqwidgets.ChartPadding): jqwidgets.ChartPadding;
    titlePadding(arg?: jqwidgets.ChartPadding): jqwidgets.ChartPadding;
    colorScheme(arg?: string): string;
    greyScale(arg?: boolean): boolean;
    showToolTips(arg?: boolean): boolean;
    toolTipShowDelay(arg?: number): number;
    toolTipHideDelay(arg?: number): number;
    toolTipMoveDuration(arg?: number): number;
    drawBefore(arg?: (renderer?: jqwidgets.ChartDrawBefore['renderer'], rect?: jqwidgets.ChartDrawBefore['rect']) => void): (renderer?: jqwidgets.ChartDrawBefore['renderer'], rect?: jqwidgets.ChartDrawBefore['rect']) => void;
    draw(arg?: (renderer?: jqwidgets.ChartDraw['renderer'], rect?: jqwidgets.ChartDraw['rect']) => void): (renderer?: jqwidgets.ChartDraw['renderer'], rect?: jqwidgets.ChartDraw['rect']) => void;
    rtl(arg?: boolean): boolean;
    enableCrosshairs(arg?: boolean): boolean;
    crosshairsColor(arg?: string): string;
    crosshairsDashStyle(arg?: string): string;
    crosshairsLineWidth(arg?: number): number;
    columnSeriesOverlap(arg?: boolean): boolean;
    enabled(arg?: boolean): boolean;
    enableAnimations(arg?: boolean): boolean;
    animationDuration(arg?: number): number;
    enableAxisTextAnimation(arg?: boolean): boolean;
    renderEngine(arg?: string): string;
    xAxis(arg?: jqwidgets.ChartXAxis): jqwidgets.ChartXAxis;
    valueAxis(arg?: jqwidgets.ChartValueAxis): jqwidgets.ChartValueAxis;
    categoryAxis(arg?: any): any;
    seriesGroups(arg?: Array<jqwidgets.ChartSeriesGroup>): Array<jqwidgets.ChartSeriesGroup>;
    getInstance(): any;
    refresh(): void;
    update(): void;
    destroy(): void;
    addColorScheme(schemeName: string, colors: Array<string>): void;
    removeColorScheme(schemeName: string): void;
    getItemsCount(groupIndex: number, serieIndex: number): number;
    getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): any;
    getXAxisRect(groupIndex: number): jqwidgets.ChartRect;
    getXAxisLabels(groupIndex: number): Array<any>;
    getValueAxisRect(groupIndex: number): jqwidgets.ChartRect;
    getValueAxisLabels(groupIndex: number): Array<any>;
    getColorScheme(colorScheme: string): Array<string>;
    hideSerie(groupIndex: number, serieIndex: number, itemIndex: number): void;
    showSerie(groupIndex: number, serieIndex: number, itemIndex: number): void;
    hideToolTip(hideDelay: number): void;
    showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay: number, hideDelay: number): void;
    saveAsJPEG(fileName: string, exportServerUrl: string): void;
    saveAsPNG(fileName: string, exportServerUrl: string): void;
    saveAsPDF(fileName: string, exportServerUrl: string): void;
    getXAxisValue(offset: number, groupIndex: number): any;
    getValueAxisValue(offset: number, groupIndex: number): any;
    onToggle: EventEmitter<any>;
    onClick: EventEmitter<any>;
    onRefreshBegin: EventEmitter<any>;
    onRefreshEnd: EventEmitter<any>;
    onRangeSelectionChanging: EventEmitter<any>;
    onRangeSelectionChanged: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxChartComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxChartComponent, "jqxChart", never, { "attrTitle": "title"; "attrDescription": "description"; "attrSource": "source"; "attrShowBorderLine": "showBorderLine"; "attrBorderLineColor": "borderLineColor"; "attrBorderLineWidth": "borderLineWidth"; "attrBackgroundColor": "backgroundColor"; "attrBackgroundImage": "backgroundImage"; "attrShowLegend": "showLegend"; "attrLegendLayout": "legendLayout"; "attrPadding": "padding"; "attrTitlePadding": "titlePadding"; "attrColorScheme": "colorScheme"; "attrGreyScale": "greyScale"; "attrShowToolTips": "showToolTips"; "attrToolTipShowDelay": "toolTipShowDelay"; "attrToolTipHideDelay": "toolTipHideDelay"; "attrToolTipMoveDuration": "toolTipMoveDuration"; "attrDrawBefore": "drawBefore"; "attrDraw": "draw"; "attrRtl": "rtl"; "attrEnableCrosshairs": "enableCrosshairs"; "attrCrosshairsColor": "crosshairsColor"; "attrCrosshairsDashStyle": "crosshairsDashStyle"; "attrCrosshairsLineWidth": "crosshairsLineWidth"; "attrColumnSeriesOverlap": "columnSeriesOverlap"; "attrEnabled": "enabled"; "attrEnableAnimations": "enableAnimations"; "attrAnimationDuration": "animationDuration"; "attrEnableAxisTextAnimation": "enableAxisTextAnimation"; "attrRenderEngine": "renderEngine"; "attrXAxis": "xAxis"; "attrValueAxis": "valueAxis"; "attrCategoryAxis": "categoryAxis"; "attrSeriesGroups": "seriesGroups"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onToggle": "onToggle"; "onClick": "onClick"; "onRefreshBegin": "onRefreshBegin"; "onRefreshEnd": "onRefreshEnd"; "onRangeSelectionChanging": "onRangeSelectionChanging"; "onRangeSelectionChanged": "onRangeSelectionChanged"; }, never, ["*"]>;
}
