import {IArray} from "../../../models/IArray";


export interface TableState {
    array: IArray[];
    filterArray: IArray[] | null;
    typeFilter: string | number,
    conditionFilter: number | string,
    textFilter: number | string,
}

export enum TableActionEnum {
    SET_ARRAY = "SET_ARRAY",
    SET_TYPE = "SET_TYPE",
    SET_TEXT = "SET_TEXT",
    SET_CONDITION = "SET_CONDITION",
    SET_FILTER_ARRAY = "SET_FILTER_ARRAY",
}

export interface SetTableAction {
    type: TableActionEnum.SET_ARRAY;
    payload: IArray[]
}

export interface SetTextAction {
    type: TableActionEnum.SET_TEXT;
    payload: number | string
}

export interface SetTypeAction {
    type: TableActionEnum.SET_TYPE;
    payload: string | number
}

export interface SetConditionAction {
    type: TableActionEnum.SET_CONDITION;
    payload: string | number
}
export interface getFilterArrayAction {
    type: TableActionEnum.SET_FILTER_ARRAY;
}

export type TableAction =
    SetTableAction | SetTextAction | SetConditionAction | SetTypeAction | getFilterArrayAction