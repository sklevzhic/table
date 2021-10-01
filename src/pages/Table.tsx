import React, {FC, useState} from 'react'
import {Table} from '../components/Table';
import {FilterTable} from "../components/FilterTable";
import {Pagination} from '../components/Pagination';
import {useTypedSelector} from "../hooks/useTypedSelector";

interface TableProps {

}

export const TablePage: FC<TableProps> = () => {
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1)

    const {filterArray} = useTypedSelector(state => state.event)

    const indexOfLastPost = currentPage * rowsPerPage
    const indexOfFirstPage = indexOfLastPost - rowsPerPage
    const currentArray = filterArray?.slice(indexOfFirstPage, indexOfLastPost)

    return <>
        <FilterTable rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage}/>
        {
            filterArray && <Table filterArray={currentArray || []} rowsPerPage={rowsPerPage}/>
        }
        <Pagination rowsPerPage={rowsPerPage} currentPage={currentPage} totalRows={filterArray?.length || 0}
                    setCurrentPage={setCurrentPage}/>
    </>;
};