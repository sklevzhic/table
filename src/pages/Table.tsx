import React, { FC } from 'react'
import { Table } from '../components/Table';
import {FilterTable} from "../components/FilterTable";
import { Pagination } from '../components/Pagination';

interface TableProps {

}

export const TablePage:FC <TableProps> = () => {
    return <>
        <FilterTable />
        <Table />
        <Pagination />
    </>;
};