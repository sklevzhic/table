import {IArray} from "../../../models/IArray";


export interface EventState {
    events: IArray[];
    filterArray: IArray[] | null;
    typeFilter: string | number,
    conditionFilter: number | string,
    textFilter: number | string,
}

export enum EventActionEnum {
    SET_EVENTS = "SET_EVENTS",
    SET_TYPE = "SET_TYPE",
    SET_TEXT = "SET_TEXT",
    SET_CONDITION = "SET_CONDITION",
    SET_ARRAY = "SET_ARRAY",
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IArray[]
}

export interface SetTextAction {
    type: EventActionEnum.SET_TEXT;
    payload: number | string
}

export interface SetTypeAction {
    type: EventActionEnum.SET_TYPE;
    payload: string | number
}

export interface SetConditionAction {
    type: EventActionEnum.SET_CONDITION;
    payload: string | number
}
export interface getFilterArrayAction {
    type: EventActionEnum.SET_ARRAY;
}

export type EventAction =
    SetEventsAction | SetTextAction | SetConditionAction | SetTypeAction | getFilterArrayAction