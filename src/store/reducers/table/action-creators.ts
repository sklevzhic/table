import {
    TableActionEnum,
    SetConditionAction,
    SetTextAction,
    SetEventsAction,
    SetTypeAction,
    getFilterArrayAction
} from "./types";
import {IArray} from "../../../models/IArray";


export const TableActionCreators = {
    setEvents: (payload: IArray[]): SetEventsAction => ({type: TableActionEnum.SET_EVENTS, payload}),
    setText: (payload: string | number): SetTextAction => ({type: TableActionEnum.SET_TEXT, payload}),
    setCondition: (payload: string | number): SetConditionAction => ({type: TableActionEnum.SET_CONDITION, payload}),
    setType: (payload: string | number): SetTypeAction => ({type: TableActionEnum.SET_TYPE, payload}),
    getFilterArray: (): getFilterArrayAction => ({type: TableActionEnum.SET_ARRAY}),
}