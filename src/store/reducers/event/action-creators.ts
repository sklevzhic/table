import {
    EventActionEnum,
    SetConditionAction,
    SetTextAction,
    SetEventsAction,
    SetTypeAction,
    getFilterArrayAction
} from "./types";
import {IArray} from "../../../models/IArray";


export const EventActionCreators = {
    setEvents: (payload: IArray[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    setText: (payload: string | number): SetTextAction => ({type: EventActionEnum.SET_TEXT, payload}),
    setCondition: (payload: string | number): SetConditionAction => ({type: EventActionEnum.SET_CONDITION, payload}),
    setType: (payload: string | number): SetTypeAction => ({type: EventActionEnum.SET_TYPE, payload}),
    getFilterArray: (): getFilterArrayAction => ({type: EventActionEnum.SET_ARRAY}),
}