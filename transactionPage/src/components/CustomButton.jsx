import React from 'react'
import Button from '@mui/material/Button'

const CustomButton = ({ text, backgroundColor, hoverColor, textColor, onClick, startIcon, endIcon }) => {
  return (
    <Button
      variant="contained"
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        backgroundColor: backgroundColor || '#7c3aed',  // default purple if not passed
        color: textColor || '#ffffff',                   // default white if not passed
        borderRadius: '8px',
        textTransform: 'none',
        fontWeight: 600,
        fontSize: '14px',
        padding: '8px 20px',
        boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
        '&:hover': {
          backgroundColor: hoverColor || '#6d28d9',     // default dark purple if not passed
        }
      }}
    >
      {text}
    </Button>
  )
}

export default CustomButton