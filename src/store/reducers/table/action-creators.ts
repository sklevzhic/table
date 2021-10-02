import {
    TableActionEnum,
    SetConditionAction,
    SetTextAction,
    SetTableAction,
    SetTypeAction,
    getFilterArrayAction
} from "./types";
import {IArray} from "../../../models/IArray";
import {AppDispatch} from "../../index";
import TableService from "../../../api";

export const TableActionCreators = {
    setArray: (payload: IArray[]): SetTableAction => ({type: TableActionEnum.SET_ARRAY, payload}),
    fetchArray: () =>  async (dispatch: AppDispatch) => {
        try {
            const response = await TableService.getUsers()
            dispatch(TableActionCreators.setArray(response.data));
        } catch (e) {
            console.log(e);
        }
    },
    setText: (payload: string | number): SetTextAction => ({type: TableActionEnum.SET_TEXT, payload}),
    setCondition: (payload: string | number): SetConditionAction => ({type: TableActionEnum.SET_CONDITION, payload}),
    setType: (payload: string | number): SetTypeAction => ({type: TableActionEnum.SET_TYPE, payload}),
    getFilterArray: (): getFilterArrayAction => ({type: TableActionEnum.SET_FILTER_ARRAY}),
}