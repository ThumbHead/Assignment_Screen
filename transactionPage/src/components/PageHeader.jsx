import React from 'react'
import Button from './CustomButton'
import AddIcon from '@mui/icons-material/Add'
import TheatersOutlinedIcon from '@mui/icons-material/TheatersOutlined';

const PageHeader = ({onOpen}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent:'space-between',borderBottom: "1px solid #f0f0f0", backgroundColor: '#ffffff', padding: '16px 24px'}}>
        <div>
            <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0 0 4px 0', display: 'flex', alignItems: 'center', gap: '4px'}}>
            <span style={{ color: '#9ca3af' }}>Billing</span>
            <span style={{ color: '#d1d5db' }}>/</span>
            <span style={{ color: '#9ca3af' }}>Bank</span>
            <span style={{ color: '#d1d5db' }}>/</span>
            <span style={{ color: '#6b7280' }}>Transaction</span>
          </p>

            <h1 style={{fontSize: '24px', fontWeight: 600, color: '#111827', margin: 0}}>Transcation</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>

        <div style={{ width: '40px', height: '40px', border: '1px solid #e5e7eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backgroundColor: '#ffffff'}}>
            <TheatersOutlinedIcon />
        </div>

        <Button 
            text="ADD TRANSCATION"
            backgroundColor="#7c3aed"
            hoverColor="#502699"
            textColor="#ffffff"
            endIcon={<AddIcon />}
            onClick={onOpen}
        />
        </div>
    </div>
  )
}

export default PageHeader
