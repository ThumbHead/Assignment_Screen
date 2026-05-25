import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'

const columns = [
  {
    field: 'id',
    headerName: 'Index#',
    width: 100,
  },
  {
    field: 'fileNumber',
    headerName: 'File Number',
    width: 180,
  },
  {
    field: 'matter',
    headerName: 'Matter',
    width: 180,
  },
  {
    field: 'payee',
    headerName: 'Payee/Payer',
    width: 160,
  },
  {
    field: 'transDate',
    headerName: 'Trans Date',
    width: 120,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 120,
  },
  {
    field: 'clearDate',
    headerName: 'Clear Date',
    width: 120,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 120,
    type: 'number',
    valueFormatter: (value) => parseFloat(value).toFixed(2),
  },
]

const TransactionTable = ({ rows }) => {
  return (
    <Paper
      sx={{
        margin: '16px 24px 24px 24px',
        borderRadius: '12px',
        border: '1px solid #f0f0f0',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
        overflow: 'hidden',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } }
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{border: 0}}
      />
    </Paper>
  )
}

export default TransactionTable