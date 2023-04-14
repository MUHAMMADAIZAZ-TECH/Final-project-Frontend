import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'CustomerId', headerName: 'Customer ID', width: 100 },
  {
    field: 'CustomerName',
    headerName: 'Customer Name',
    width: 250,
  },
  {
    field: 'CustomerAddress',
    headerName: 'Customer Address',
    width: 250,
  },
  {
    field: 'Destination',
    headerName: 'Destination',
    width: 200,
  },
  {
    field: 'CustomerPhoneNo',
    headerName: 'Customer Phone No',
    width: 200,
  },
  {
    field: 'StartDate',
    headerName: 'Start Date',
    width: 120,
  },
  {
    field: 'EndDate',
    headerName: 'End Date',
    width: 120,
  },
];

export default function Table( { rows,onRowClick } ) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={(row)=>row?.CustomerId}
        pageSizeOptions={[5]}
        onRowClick={onRowClick}
        rowSelection={true}
      />
    </Box>
  );
}