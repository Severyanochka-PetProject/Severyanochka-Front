import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'

import './paginate.scss';

interface IPaginate {
    currentPage: number,
    perPage: number,
    pageCount: number,
    onChangePage: (value: number) => void
}

const Paginate : FC<IPaginate> = ({ currentPage, perPage, pageCount, onChangePage }) => {
    const getData = (page: any) => {
        onChangePage(page.selected + 1)
    }

    return (
        <ReactPaginate
        className="custom-paging"
        nextLabel=">"
        previousLabel="<"
        initialPage={currentPage}
        pageRangeDisplayed={perPage}
        pageCount={pageCount}
        onPageChange={getData}
    />
  )
}

export default Paginate;
