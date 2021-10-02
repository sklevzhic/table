import React, {useEffect} from 'react'
import {useActions} from '../hooks/useActions';
import {useTypedSelector} from "../hooks/useTypedSelector";

interface FilterTableProps {
    rowsPerPage: number,
    setRowsPerPage: any
}


export const FilterTable: React.FC<FilterTableProps> = ({rowsPerPage, setRowsPerPage}) => {
    const {textFilter, conditionFilter, typeFilter} = useTypedSelector(state => state.event)
    const {setText, setCondition, setType, getFilterArray} = useActions();


    const types = ['Наименование', 'Количество', 'Расстояние']
    let conditions = ['']
    if (typeFilter === 'Наименование') {
        conditions = ['содержит']
    } else {
        conditions = ['>', '<', '=']
    }

    useEffect(() => {
        getFilterArray()
    }, [textFilter, conditionFilter, typeFilter])

    const changeType = (e: any) => setType(e.target.value)
    const changeCondition = (e: any) => setCondition(e.target.value)
    const changeText = (e: any) => setText(e.target.value)

    return <>
        <select defaultValue="1" onChange={e => changeType(e)}>
            <option value="1" disabled>
                Выбрать столбец
            </option>
            {types.map(el => <option key={el} value={el}>{el}</option>)}
        </select>

        <select defaultValue="1" disabled={!typeFilter} onChange={e => changeCondition(e)}>
            <option value="1" disabled>
            Выбрать условие
        </option>
            {conditions.map(el => <option key={el} value={el}>{el}</option>)}
        </select>

        <input
            disabled={!conditionFilter}
            type="text"
            placeholder={"Введите значение"}
            onChange={(e) => changeText(e)}/>

        <select onChange={e => setRowsPerPage(e.target.value)}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
        </select>
    </>;
};