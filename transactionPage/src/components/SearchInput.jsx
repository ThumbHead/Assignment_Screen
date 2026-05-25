// src/components/SearchInput.jsx
import React from 'react'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

const SearchWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '4px 12px',
})

const SearchInput = ({ placeholder, value, onChange, width }) => {
  return (
    <SearchWrapper style={{ width: width || '240px' }}>
      <SearchIcon sx={{ fontSize: '18px', color: '#9ca3af', mr: 1 }} />
      <InputBase
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        sx={{ fontSize: '13px', color: '#4b5563', width: '100%', height :"31px" }}
      />
    </SearchWrapper>
  )
}

export default SearchInput