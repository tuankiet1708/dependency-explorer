import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';

export default function Pagination({count, rowsPerPage, page, onChangePage, onChangeRowsPerPage}) {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 20]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      backIconButtonProps={{
        'aria-label': 'previous page',
      }}
      nextIconButtonProps={{
        'aria-label': 'next page',
      }}
      onChangePage={onChangePage}
      onChangeRowsPerPage={onChangeRowsPerPage}
    />
  )
}
