import {IEvent} from "../../../models/IEvent";


export interface EventState {
    events: IEvent[];
    filterArray: IEvent[] | null;
    typeFilter: string | number,
    conditionFilter: number | string,
    textFilter: number | string,
    // nameCol: object
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
    payload: IEvent[]
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