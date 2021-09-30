import React, {useState} from 'react'
import { useActions } from '../hooks/useActions';
import useInput from '../hooks/useInput';
import useSelect from "../hooks/useSelect";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface FilterTableProps {

}

const types = ['Наименование', 'Количество', 'Расстояние']
const conditions = ['>', '<', '=', 'Содержит']

export const FilterTable: React.FC<FilterTableProps> = () => {
    const [typeofFilter, setTypeOfFilter] = useState<"string" | "number" | "">("")

    const valueFilter = useInput('')

    const { setText, setCondition, setType } = useActions();
    const { textFilter, conditionFilter, typeFilter } = useTypedSelector(state => state.event)

    const changeType = (e: any) => setType(e.target.value)
    const changeCondition = (e: any) => setCondition(e.target.value)
    const changeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)

    return <>
        <select onChange={e => changeType(e)}>
            <option value="" selected disabled hidden>Выбрать</option>
            {types.map(el => <option key={el} value={el}>{el}</option>)}
        </select>

        <select disabled={!typeFilter} onChange={e => changeCondition(e)}>
            <option value="" selected disabled hidden>Выбрать</option>
            {conditions.map(el => <option key={el} value={el}>{el}</option>)}
        </select>
        <input
            disabled={!conditionFilter}
            type="text"
            placeholder={"Введите значение"}
            onChange={(e) => changeText(e)}/>


    </>;
};