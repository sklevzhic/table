import React, {useState} from 'react'

interface FilterSelectProps {
    types: string[]
}

export const FilterSelect: React.FC<FilterSelectProps> = ({types}) => {

    const [type, setType] = useState('');
    const changeType = (e: any) => setType(e.target.value)

    return <select value={type} onChange={e => changeType(e)}>
        { types.map(el => <option value={el}>{el}</option>) }
    </select>;
};