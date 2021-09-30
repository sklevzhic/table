import {IEvent} from "../../../models/IEvent";


export interface EventState {
    events: IEvent[];
}

export enum EventActionEnum {
    SET_EVENTS = "SET_EVENTS"
}

export interface SetEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[]
}

export type EventAction =
    SetEventsAction