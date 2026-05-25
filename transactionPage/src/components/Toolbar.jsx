import React from 'react'
import InputBase from '@mui/material/InputBase'
import CustomButton from './CustomButton'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import SearchInput from './SearchInput'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

// Same Search style as Topbar
const Search = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f9fafb',
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  padding: '4px 12px',
  width: '240px',
})

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)({
  color: '#4b5563',
  fontSize: '13px',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: '4px 0',
  }
})

const Toolbar = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderBottom: '1px solid #f0f0f0',
      backgroundColor: '#ffffff',
    }}>

      {/* LEFT — Search + Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

        {/* Search — same as Topbar */}
        <SearchInput placeholder="Search Transcation" width="240px" />

        {/* Filter Button */}
        <CustomButton
          text="Filter"
          backgroundColor="#ffffff"
          hoverColor="#f9fafb"
          textColor="#6b7280"
          border="1px solid #e5e7eb"
          endIcon={<FilterAltOutlinedIcon />}
          onClick={() => {}}
        />

      </div>

      {/* RIGHT — Settings Button */}
      <CustomButton
        text="Settings"
        backgroundColor="#ffffff"
        hoverColor="#f9fafb"
        textColor="#6b7280"
        border="1px solid #e5e7eb"
        endIcon={<SettingsOutlinedIcon />}
        onClick={() => {}}
      />

    </div>
  )
}

export default Toolbar