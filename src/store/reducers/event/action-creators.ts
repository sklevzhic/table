import {EventActionEnum, SetConditionAction, SetTextAction, SetEventsAction, SetTypeAction} from "./types";
import {IEvent} from "../../../models/IEvent";
import {AppDispatch} from "../../index"


export const EventActionCreators = {
    setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    setText: (payload: string | number): SetTextAction => ({type: EventActionEnum.SET_TEXT, payload}),
    setCondition: (payload: string | number): SetConditionAction => ({type: EventActionEnum.SET_CONDITION, payload}),
    setType: (payload: string | number): SetTypeAction => ({type: EventActionEnum.SET_TYPE, payload}),
}