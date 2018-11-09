import { ElementRef, OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy, Renderer2, EventEmitter, ChangeDetectorRef, TemplateRef, QueryList } from '@angular/core';
import { AnimationEvent } from '@angular/animations';
import { SelectItem } from '../common/selectitem';
import { DomHandler } from '../dom/domhandler';
import { ObjectUtils } from '../utils/objectutils';
import { ControlValueAccessor } from '@angular/forms';
export declare const MULTISELECT_VALUE_ACCESSOR: any;
export declare class MultiSelect implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, OnDestroy, ControlValueAccessor {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer2;
    objectUtils: ObjectUtils;
    private cd;
    scrollHeight: string;
    _defaultLabel: string;
    defaultLabel: string;
    style: any;
    styleClass: string;
    panelStyle: any;
    panelStyleClass: string;
    inputId: string;
    disabled: boolean;
    readonly: boolean;
    filter: boolean;
    filterPlaceHolder: string;
    overlayVisible: boolean;
    tabindex: number;
    appendTo: any;
    dataKey: string;
    name: string;
    displaySelectedLabel: boolean;
    maxSelectedLabels: number;
    selectionLimit: number;
    selectedItemsLabel: string;
    showToggleAll: boolean;
    resetFilterOnHide: boolean;
    dropdownIcon: string;
    optionLabel: string;
    showHeader: boolean;
    autoZIndex: boolean;
    baseZIndex: number;
    showTransitionOptions: string;
    hideTransitionOptions: string;
    containerViewChild: ElementRef;
    filterInputChild: ElementRef;
    footerFacet: any;
    templates: QueryList<any>;
    onChange: EventEmitter<any>;
    onFocus: EventEmitter<any>;
    onBlur: EventEmitter<any>;
    onPanelShow: EventEmitter<any>;
    onPanelHide: EventEmitter<any>;
    value: any[];
    onModelChange: Function;
    onModelTouched: Function;
    overlay: HTMLDivElement;
    valuesAsString: string;
    focus: boolean;
    filled: boolean;
    documentClickListener: any;
    selfClick: boolean;
    panelClick: boolean;
    filterValue: string;
    visibleOptions: SelectItem[];
    filtered: boolean;
    itemTemplate: TemplateRef<any>;
    selectedItemsTemplate: TemplateRef<any>;
    focusedItemCheckbox: HTMLInputElement | null;
    _options: any[];
    maxSelectionLimitReached: boolean;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer2, objectUtils: ObjectUtils, cd: ChangeDetectorRef);
    options: any[];
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    writeValue(value: any): void;
    updateFilledState(): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
    onItemClick(event: any, option: any): void;
    isSelected(value: any): boolean;
    findSelectionIndex(val: any): number;
    toggleAll(event: any, checkbox: any): void;
    isAllChecked(): boolean;
    getEnabledOptionCount(): number;
    show(): void;
    onOverlayAnimationStart(event: AnimationEvent): void;
    appendOverlay(): void;
    restoreOverlayAppend(): void;
    alignOverlay(): void;
    hide(): void;
    close(event: any): void;
    onMouseclick(event: any, input: any): void;
    onInputFocus(event: any): void;
    onInputBlur(event: any): void;
    onInputKeydown(event: any): void;
    updateLabel(): void;
    findLabelByValue(val: any): string;
    onFilter(): void;
    isItemVisible(option: SelectItem): boolean;
    getVisibleOptions(): SelectItem[];
    bindDocumentClickListener(): void;
    unbindDocumentClickListener(): void;
    onOverlayHide(): void;
    ngOnDestroy(): void;
}
export declare class MultiSelectModule {
}
