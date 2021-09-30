import React from 'react'

interface TableLineProps {
    name: string | undefined,
    count: string | number | undefined
    distance: string | number | undefined
}

export const TableLine: React.FC<TableLineProps> = ({name,count,distance }) => {
    return <tr>
        <td>23.02.2000</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>{distance}</td>
    </tr>;
};