import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import {TableLine} from "./TableLine";
import {IEvent} from "../models/IEvent";

interface TableProps {
    rowsPerPage: number,
    filterArray: IEvent[]
}

export const Table: React.FC<TableProps> = ({ rowsPerPage, filterArray}) => {

    return <table className="table">
        <thead>
        <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
        </tr>
        </thead>
        <tbody>
        {
            filterArray && <>
                {
                    filterArray.map(el => {
                        return  <TableLine key={el.id} count={el.count} distance={el.distance} name={el.name}/>
                    })
                }
            </>
        }
        </tbody>
    </table>;
};