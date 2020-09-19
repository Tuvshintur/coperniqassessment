import React from 'react';
import ReactPaginate from 'react-paginate';
import classes from './Pagination.module.css';

const pagination = ({ maxPage, pageClick }) => {
    return (
        <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={classes.Break}
            pageCount={maxPage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={pageClick}
            containerClassName={classes.Pagination}
            subContainerClassName={'pages pagination'}
            activeClassName={classes.Active}
        />
    );
};

export default pagination;
