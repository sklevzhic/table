import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector';
import {TableLine} from "./TableLine";

interface TableProps {

}

export const Table: React.FC<TableProps> = () => {
    const { events } = useTypedSelector(state => state.event)
    return <table className="table-fixed">
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
            events && <>
                {
                    events.map(el => {
                        return  <TableLine key={el.id} count={el.count} distance={el.distance} name={el.name}/>
                    })
                }
            </>
        }
        </tbody>
    </table>;
};