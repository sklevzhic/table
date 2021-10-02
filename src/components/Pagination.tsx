import React from 'react'

interface PaginationProps {
    rowsPerPage: number,
    totalRows: number,
    currentPage: number,
    setCurrentPage: any
}

export const Pagination: React.FC<PaginationProps> = ({rowsPerPage, totalRows, currentPage, setCurrentPage}) => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalRows / rowsPerPage); i++) {
        pageNumbers.push(i)
    }
    if (currentPage > Math.ceil(totalRows / rowsPerPage)) {
        setCurrentPage(1)
    }
    return <div className={"pagination"}>
        {pageNumbers.map((el) => (
            <span className={currentPage === el ? "pageActive" : ""}
               key={el}
               onClick={() => setCurrentPage(el)}
            >
                {el}
            </span>
        ))}
    </div>;
};


