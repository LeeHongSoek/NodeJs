/// <reference path="../jqwidgets.d.ts" />
import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class jqxSchedulerComponent implements OnChanges {
    attrAppointmentOpacity: number;
    attrAppointmentsMinHeight: number;
    attrAppointmentDataFields: jqwidgets.SchedulerAppointmentDataFields;
    attrAppointmentTooltips: boolean;
    attrColumnsHeight: number;
    attrContextMenu: boolean;
    attrContextMenuOpen: (menu: jqwidgets.SchedulerContextMenuOpen['menu'], appointment: jqwidgets.SchedulerContextMenuOpen['appointment'], event: jqwidgets.SchedulerContextMenuOpen['event']) => void;
    attrContextMenuClose: (menu: jqwidgets.SchedulerContextMenuClose['menu'], appointment: jqwidgets.SchedulerContextMenuClose['appointment'], event: jqwidgets.SchedulerContextMenuClose['event']) => void;
    attrContextMenuItemClick: (menu: jqwidgets.SchedulerContextMenuItemClick['menu'], appointment: jqwidgets.SchedulerContextMenuItemClick['appointment'], event: jqwidgets.SchedulerContextMenuItemClick['event']) => boolean;
    attrContextMenuCreate: (menu: jqwidgets.SchedulerContextMenuCreate['menu'], settings: jqwidgets.SchedulerContextMenuCreate['settings']) => void;
    attrChangedAppointments: Array<jqwidgets.SchedulerChangedAppointments>;
    attrDisabled: boolean;
    attrDate: any;
    attrDayNameFormat: string;
    attrEnableHover: boolean;
    attrEditDialog: boolean;
    attrEditDialogDateTimeFormatString: string;
    attrEditDialogDateFormatString: string;
    attrEditDialogOpen: (dialog?: jqwidgets.SchedulerEditDialogOpen['dialog'], fields?: jqwidgets.SchedulerEditDialogOpen['fields'], editAppointment?: jqwidgets.SchedulerEditDialogOpen['editAppointment']) => void;
    attrEditDialogCreate: (dialog?: jqwidgets.SchedulerEditDialogCreate['dialog'], fields?: jqwidgets.SchedulerEditDialogCreate['fields'], editAppointment?: jqwidgets.SchedulerEditDialogCreate['editAppointment']) => void;
    attrEditDialogKeyDown: (dialog?: jqwidgets.SchedulerEditDialogKeyDown['dialog'], fields?: jqwidgets.SchedulerEditDialogKeyDown['fields'], editAppointment?: jqwidgets.SchedulerEditDialogKeyDown['editAppointment'], event?: jqwidgets.SchedulerEditDialogKeyDown['event']) => boolean;
    attrEditDialogClose: (dialog?: jqwidgets.SchedulerEditDialogClose['dialog'], fields?: jqwidgets.SchedulerEditDialogClose['fields'], editAppointment?: jqwidgets.SchedulerEditDialogClose['editAppointment']) => void;
    attrExportSettings: jqwidgets.SchedulerExportSettings;
    attrLegendPosition: string;
    attrLegendHeight: number;
    attrLocalization: any;
    attrMin: any;
    attrMax: any;
    attrReady: () => void;
    attrRenderAppointment: (data: jqwidgets.SchedulerRenderAppointment['data']) => any;
    attrRendering: () => void;
    attrRendered: () => void;
    attrRtl: boolean;
    attrResources: jqwidgets.SchedulerResources;
    attrRowsHeight: number;
    attrShowToolbar: boolean;
    attrShowLegend: boolean;
    attrScrollBarSize: number;
    attrSource: any;
    attrStatuses: jqwidgets.SchedulerStatuses;
    attrTouchRowsHeight: number;
    attrTheme: string;
    attrTouchAppointmentsMinHeight: number;
    attrTouchScrollBarSize: number;
    attrTimeZone: string;
    attrTouchDayNameFormat: string;
    attrToolBarRangeFormat: string;
    attrToolBarRangeFormatAbbr: string;
    attrToolbarHeight: number;
    attrViews: Array<any>;
    attrView: string;
    attrWidth: string | number;
    attrHeight: string | number;
    autoCreate: boolean;
    properties: string[];
    host: any;
    elementRef: ElementRef;
    widgetObject: jqwidgets.jqxScheduler;
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
    appointmentOpacity(arg?: number): number;
    appointmentsMinHeight(arg?: number): number;
    appointmentDataFields(arg?: jqwidgets.SchedulerAppointmentDataFields): jqwidgets.SchedulerAppointmentDataFields;
    appointmentTooltips(arg?: boolean): boolean;
    columnsHeight(arg?: number): number;
    contextMenu(arg?: boolean): boolean;
    contextMenuOpen(arg?: (menu: jqwidgets.SchedulerContextMenuOpen['menu'], appointment: jqwidgets.SchedulerContextMenuOpen['appointment'], event: jqwidgets.SchedulerContextMenuOpen['event']) => void): (menu: jqwidgets.SchedulerContextMenuOpen['menu'], appointment: jqwidgets.SchedulerContextMenuOpen['appointment'], event: jqwidgets.SchedulerContextMenuOpen['event']) => void;
    contextMenuClose(arg?: (menu: jqwidgets.SchedulerContextMenuClose['menu'], appointment: jqwidgets.SchedulerContextMenuClose['appointment'], event: jqwidgets.SchedulerContextMenuClose['event']) => void): (menu: jqwidgets.SchedulerContextMenuClose['menu'], appointment: jqwidgets.SchedulerContextMenuClose['appointment'], event: jqwidgets.SchedulerContextMenuClose['event']) => void;
    contextMenuItemClick(arg?: (menu: jqwidgets.SchedulerContextMenuItemClick['menu'], appointment: jqwidgets.SchedulerContextMenuItemClick['appointment'], event: jqwidgets.SchedulerContextMenuItemClick['event']) => boolean): (menu: jqwidgets.SchedulerContextMenuItemClick['menu'], appointment: jqwidgets.SchedulerContextMenuItemClick['appointment'], event: jqwidgets.SchedulerContextMenuItemClick['event']) => boolean;
    contextMenuCreate(arg?: (menu: jqwidgets.SchedulerContextMenuCreate['menu'], settings: jqwidgets.SchedulerContextMenuCreate['settings']) => void): (menu: jqwidgets.SchedulerContextMenuCreate['menu'], settings: jqwidgets.SchedulerContextMenuCreate['settings']) => void;
    changedAppointments(arg?: Array<jqwidgets.SchedulerChangedAppointments>): Array<jqwidgets.SchedulerChangedAppointments>;
    disabled(arg?: boolean): boolean;
    date(arg?: any): any;
    dayNameFormat(arg?: string): string;
    enableHover(arg?: boolean): boolean;
    editDialog(arg?: boolean): boolean;
    editDialogDateTimeFormatString(arg?: string): string;
    editDialogDateFormatString(arg?: string): string;
    editDialogOpen(arg?: (dialog?: jqwidgets.SchedulerEditDialogOpen['dialog'], fields?: jqwidgets.SchedulerEditDialogOpen['fields'], editAppointment?: jqwidgets.SchedulerEditDialogOpen['editAppointment']) => void): (dialog?: jqwidgets.SchedulerEditDialogOpen['dialog'], fields?: jqwidgets.SchedulerEditDialogOpen['fields'], editAppointment?: jqwidgets.SchedulerEditDialogOpen['editAppointment']) => void;
    editDialogCreate(arg?: (dialog?: jqwidgets.SchedulerEditDialogCreate['dialog'], fields?: jqwidgets.SchedulerEditDialogCreate['fields'], editAppointment?: jqwidgets.SchedulerEditDialogCreate['editAppointment']) => void): (dialog?: jqwidgets.SchedulerEditDialogCreate['dialog'], fields?: jqwidgets.SchedulerEditDialogCreate['fields'], editAppointment?: jqwidgets.SchedulerEditDialogCreate['editAppointment']) => void;
    editDialogKeyDown(arg?: (dialog?: jqwidgets.SchedulerEditDialogKeyDown['dialog'], fields?: jqwidgets.SchedulerEditDialogKeyDown['fields'], editAppointment?: jqwidgets.SchedulerEditDialogKeyDown['editAppointment'], event?: jqwidgets.SchedulerEditDialogKeyDown['event']) => boolean): (dialog?: jqwidgets.SchedulerEditDialogKeyDown['dialog'], fields?: jqwidgets.SchedulerEditDialogKeyDown['fields'], editAppointment?: jqwidgets.SchedulerEditDialogKeyDown['editAppointment'], event?: jqwidgets.SchedulerEditDialogKeyDown['event']) => boolean;
    editDialogClose(arg?: (dialog?: jqwidgets.SchedulerEditDialogClose['dialog'], fields?: jqwidgets.SchedulerEditDialogClose['fields'], editAppointment?: jqwidgets.SchedulerEditDialogClose['editAppointment']) => void): (dialog?: jqwidgets.SchedulerEditDialogClose['dialog'], fields?: jqwidgets.SchedulerEditDialogClose['fields'], editAppointment?: jqwidgets.SchedulerEditDialogClose['editAppointment']) => void;
    exportSettings(arg?: jqwidgets.SchedulerExportSettings): jqwidgets.SchedulerExportSettings;
    height(arg?: number | string): number | string;
    legendPosition(arg?: string): string;
    legendHeight(arg?: number): number;
    localization(arg?: any): any;
    min(arg?: any): any;
    max(arg?: any): any;
    ready(arg?: () => void): () => void;
    renderAppointment(arg?: (data: jqwidgets.SchedulerRenderAppointment['data']) => any): (data: jqwidgets.SchedulerRenderAppointment['data']) => any;
    rendering(arg?: () => void): () => void;
    rendered(arg?: () => void): () => void;
    rtl(arg?: boolean): boolean;
    resources(arg?: jqwidgets.SchedulerResources): jqwidgets.SchedulerResources;
    rowsHeight(arg?: number): number;
    showToolbar(arg?: boolean): boolean;
    showLegend(arg?: boolean): boolean;
    scrollBarSize(arg?: number): number;
    source(arg?: any): any;
    statuses(arg?: jqwidgets.SchedulerStatuses): jqwidgets.SchedulerStatuses;
    touchRowsHeight(arg?: number): number;
    theme(arg?: string): string;
    touchAppointmentsMinHeight(arg?: number): number;
    touchScrollBarSize(arg?: number): number;
    timeZone(arg?: string): string;
    touchDayNameFormat(arg?: string): string;
    toolBarRangeFormat(arg?: string): string;
    toolBarRangeFormatAbbr(arg?: string): string;
    toolbarHeight(arg?: number): number;
    views(arg?: Array<any>): Array<any>;
    view(arg?: string): string;
    width(arg?: number | string): number | string;
    addAppointment(item: jqwidgets.SchedulerAppointmentDataFields): void;
    beginAppointmentsUpdate(): void;
    clearAppointmentsSelection(): void;
    clearSelection(): void;
    closeMenu(): void;
    closeDialog(): void;
    deleteAppointment(appointmenId: string): void;
    destroy(): void;
    endAppointmentsUpdate(): void;
    ensureAppointmentVisible(id: string): void;
    ensureVisible(item: any, resourceId?: string): void;
    exportData(format: string): any;
    focus(): void;
    getAppointmentProperty(appointmentId: string, name: string): any;
    getSelection(): jqwidgets.SchedulerGetSelection;
    getAppointments(): Array<jqwidgets.SchedulerAppointmentDataFields>;
    getDataAppointments(): Array<any>;
    hideAppointmentsByResource(resourcesId: string): void;
    openMenu(left: number, top: number): void;
    openDialog(left: number, top: number): void;
    selectAppointment(appointmentId: string): void;
    setAppointmentProperty(appointmentId: string, name: string, value: any): void;
    selectCell(date: any, allday: boolean, resourceId: string): void;
    showAppointmentsByResource(resourceId: string): void;
    scrollWidth(): number;
    scrollHeight(): number;
    scrollLeft(left: number): void;
    scrollTop(top: number): void;
    onAppointmentChange: EventEmitter<any>;
    onAppointmentClick: EventEmitter<any>;
    onAppointmentDoubleClick: EventEmitter<any>;
    onAppointmentDelete: EventEmitter<any>;
    onAppointmentAdd: EventEmitter<any>;
    onBindingComplete: EventEmitter<any>;
    onCellClick: EventEmitter<any>;
    onCellDoubleClick: EventEmitter<any>;
    onContextMenuOpen: EventEmitter<any>;
    onContextMenuClose: EventEmitter<any>;
    onContextMenuItemClick: EventEmitter<any>;
    onContextMenuCreate: EventEmitter<any>;
    onDateChange: EventEmitter<any>;
    onEditRecurrenceDialogOpen: EventEmitter<any>;
    onEditRecurrenceDialogClose: EventEmitter<any>;
    onEditDialogCreate: EventEmitter<any>;
    onEditDialogOpen: EventEmitter<any>;
    onEditDialogClose: EventEmitter<any>;
    onViewChange: EventEmitter<any>;
    __wireEvents__(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<jqxSchedulerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<jqxSchedulerComponent, "jqxScheduler", never, { "attrAppointmentOpacity": "appointmentOpacity"; "attrAppointmentsMinHeight": "appointmentsMinHeight"; "attrAppointmentDataFields": "appointmentDataFields"; "attrAppointmentTooltips": "appointmentTooltips"; "attrColumnsHeight": "columnsHeight"; "attrContextMenu": "contextMenu"; "attrContextMenuOpen": "contextMenuOpen"; "attrContextMenuClose": "contextMenuClose"; "attrContextMenuItemClick": "contextMenuItemClick"; "attrContextMenuCreate": "contextMenuCreate"; "attrChangedAppointments": "changedAppointments"; "attrDisabled": "disabled"; "attrDate": "date"; "attrDayNameFormat": "dayNameFormat"; "attrEnableHover": "enableHover"; "attrEditDialog": "editDialog"; "attrEditDialogDateTimeFormatString": "editDialogDateTimeFormatString"; "attrEditDialogDateFormatString": "editDialogDateFormatString"; "attrEditDialogOpen": "editDialogOpen"; "attrEditDialogCreate": "editDialogCreate"; "attrEditDialogKeyDown": "editDialogKeyDown"; "attrEditDialogClose": "editDialogClose"; "attrExportSettings": "exportSettings"; "attrLegendPosition": "legendPosition"; "attrLegendHeight": "legendHeight"; "attrLocalization": "localization"; "attrMin": "min"; "attrMax": "max"; "attrReady": "ready"; "attrRenderAppointment": "renderAppointment"; "attrRendering": "rendering"; "attrRendered": "rendered"; "attrRtl": "rtl"; "attrResources": "resources"; "attrRowsHeight": "rowsHeight"; "attrShowToolbar": "showToolbar"; "attrShowLegend": "showLegend"; "attrScrollBarSize": "scrollBarSize"; "attrSource": "source"; "attrStatuses": "statuses"; "attrTouchRowsHeight": "touchRowsHeight"; "attrTheme": "theme"; "attrTouchAppointmentsMinHeight": "touchAppointmentsMinHeight"; "attrTouchScrollBarSize": "touchScrollBarSize"; "attrTimeZone": "timeZone"; "attrTouchDayNameFormat": "touchDayNameFormat"; "attrToolBarRangeFormat": "toolBarRangeFormat"; "attrToolBarRangeFormatAbbr": "toolBarRangeFormatAbbr"; "attrToolbarHeight": "toolbarHeight"; "attrViews": "views"; "attrView": "view"; "attrWidth": "width"; "attrHeight": "height"; "autoCreate": "auto-create"; }, { "onAppointmentChange": "onAppointmentChange"; "onAppointmentClick": "onAppointmentClick"; "onAppointmentDoubleClick": "onAppointmentDoubleClick"; "onAppointmentDelete": "onAppointmentDelete"; "onAppointmentAdd": "onAppointmentAdd"; "onBindingComplete": "onBindingComplete"; "onCellClick": "onCellClick"; "onCellDoubleClick": "onCellDoubleClick"; "onContextMenuOpen": "onContextMenuOpen"; "onContextMenuClose": "onContextMenuClose"; "onContextMenuItemClick": "onContextMenuItemClick"; "onContextMenuCreate": "onContextMenuCreate"; "onDateChange": "onDateChange"; "onEditRecurrenceDialogOpen": "onEditRecurrenceDialogOpen"; "onEditRecurrenceDialogClose": "onEditRecurrenceDialogClose"; "onEditDialogCreate": "onEditDialogCreate"; "onEditDialogOpen": "onEditDialogOpen"; "onEditDialogClose": "onEditDialogClose"; "onViewChange": "onViewChange"; }, never, ["*"]>;
}