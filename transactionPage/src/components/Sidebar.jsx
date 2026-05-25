import React from 'react'
import { Dashboard, Folder, AccountBalanceWallet, Timeline, BarChart, People, SettingsOutlined } from "@mui/icons-material"
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import phoenixLogo from '../assets/phoenix-logo.jpg'

const drawerWidth = 220

const NAV_ITEMS = [
  { label: "Dashboard", icon: <Dashboard fontSize="small" /> },
  { label: "Matters",   icon: <Folder fontSize="small" /> },
  { label: "Billing",   icon: <AccountBalanceWallet fontSize="small" /> },
  { label: "Activity",  icon: <Timeline fontSize="small" /> },
  { label: "Reports",   icon: <BarChart fontSize="small" /> },
  { label: "Clients",   icon: <People fontSize="small" /> },
  { label: "Settings",  icon: <SettingsOutlined fontSize="small" /> },
]

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid #f0f0f0',
          boxShadow: 'none',
          position: 'relative'
        },
      }}
    >
      <div className="flex items-center gap-2 px-4 py-5">
        <img
          src={phoenixLogo}
          alt='Phoenix Logo'
          className="w-10 h-10 object-contain" 
        />
        <div>
          <p className="text-sm font-bold text-gray-800 leading-tight">Phoenix</p>
          <p className="text-[10px] text-gray-400 leading-tight">Legal Practice Management</p>
        </div>
      </div>

      {/* NAV LINKS */}
      <List sx={{ px: 1 }}>
        {NAV_ITEMS.map(({ label, icon }) => (
          <ListItem key={label} disablePadding sx={{ mb: 1.2 }}>
            <ListItemButton
              sx={{
                borderRadius: '8px',
                color: '#6b7280',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: '#f5f3ff',
                  color: '#7c3aed',
                },
                '&:hover .MuiListItemIcon-root': {
                  color: '#7c3aed',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 32, color: '#9ca3af' }}>
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Drawer>
  )
}

export default Sidebar