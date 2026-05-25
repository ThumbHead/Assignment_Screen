import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import PageHeader from '../components/PageHeader'
import Toolbar from '../components/Toolbar'
import TransactionTable from '../components/TransactionTable'
import AddTransactionForm from '../components/AddTransactionForm'

const DATA = [
  { id: "0012023", fileNumber: "TNHC01-17891-2023", matter: "Rent Act Matters",        payee: "Oliver Elijah",    transDate: "5/27/15", type: "Deposit",    clearDate: "5/27/15", amount: 200.0  },
  { id: "0022023", fileNumber: "TNHC01-13245-2023", matter: "Labour Matters",           payee: "James William",   transDate: "5/19/12", type: "Withdrawal", clearDate: "5/19/12", amount: 1200.0 },
  { id: "0032023", fileNumber: "TNHC01-13445-2023", matter: "Family Law Matters",       payee: "Lucas Benjamin",  transDate: "3/4/16",  type: "Withdrawal", clearDate: "3/4/16",  amount: 16.0   },
  { id: "0042023", fileNumber: "TNHC01-19823-2023", matter: "Direct Taxes Matter",      payee: "Alexander Henry", transDate: "3/4/16",  type: "Deposit",    clearDate: "3/4/16",  amount: 321.0  },
  { id: "0052023", fileNumber: "TNHC01-12341-2023", matter: "Criminal Matters",         payee: "Oliver Elijah",   transDate: "7/27/13", type: "Deposit",    clearDate: "7/27/13", amount: 100.0  },
  { id: "0062023", fileNumber: "TNHC01-12345-2023", matter: "Election Matters",         payee: "Oliver Elijah",   transDate: "5/27/15", type: "Deposit",    clearDate: "5/27/15", amount: 500.0  },
]

const TransactionPage = () => {

  const [open, setOpen]     = useState(false)
  const [rows, setRows]     = useState(DATA)

  const handleAddTransaction = (formData) => {
    const newRow = {
      id:         String(rows.length + 1).padStart(3, '0') + '2023',
      fileNumber: formData.fileNumber,
      matter:     formData.matter,
      payee:      formData.payee,
      transDate:  formData.transDate,
      type:       formData.type,
      clearDate:  formData.clearDate,
      amount:     parseFloat(formData.amount),
    }
    setRows((prev) => [newRow, ...prev])  
  }

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f9fafb', overflow: 'hidden' }}>

      <Sidebar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>

        <Topbar />

        <main style={{ flex: 1, overflowY: 'auto' }}>
          <PageHeader onOpen={() => setOpen(true)} />
          <Toolbar />
          <TransactionTable rows={rows} />
        </main>

      </div>


      <AddTransactionForm
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleAddTransaction}
      />

    </div>
  )
}

export default TransactionPage