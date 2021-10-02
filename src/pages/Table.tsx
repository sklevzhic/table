import React, {FC, useEffect, useState} from 'react'
import {Table} from '../components/Table';
import {FilterTable} from "../components/FilterTable";
import {Pagination} from '../components/Pagination';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

interface TableProps {

}

export const TablePage: FC<TableProps> = () => {
    const {fetchArray} = useActions();
    useEffect(() => {
        fetchArray()
    },[])

    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1)

    const {filterArray} = useTypedSelector(state => state.table)

    const indexOfLastPost = currentPage * rowsPerPage
    const indexOfFirstPage = indexOfLastPost - rowsPerPage
    const currentArray = filterArray?.slice(indexOfFirstPage, indexOfLastPost)

    return <>
        <FilterTable rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage}/>
        {
            filterArray && <Table filterArray={currentArray || []}/>
        }
        <Pagination rowsPerPage={rowsPerPage} currentPage={currentPage} totalRows={filterArray?.length || 0}
                    setCurrentPage={setCurrentPage}/>
    </>;
};