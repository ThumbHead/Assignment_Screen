import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import SearchInput from "./SearchInput";

// Styled search box
const Search = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: "8px",
  padding: "4px 12px",
  width: "280px",
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Topbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #f0f0f0",
        color: "#374151",
      }}
    >
      <Toolbar sx={{ minHeight: "76px !important", px: 3 }}>
        {/* LEFT — Search */}
        {/* <Search>
          <span style={{ color: '#9ca3af', marginRight: '8px', fontSize: '18px' }}>🔍</span>
          <InputBase
            placeholder="Global Search"
            sx={{ fontSize: '14px', color: '#4b5563', width: '100%' }}
          />
        </Search> */}
        
        <SearchInput placeholder="Global Search" width="280px" />

        {/* Push everything to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* RIGHT — Timer + Icons + Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3.2 }}>
          {/* Timer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid #4ade80",
              color: "#16a34a",
              borderRadius: "8px",
              padding: "4px 12px",
              fontSize: "18px",
              fontFamily: "monospace",
              fontWeight: 100,
              backgroundColor: "#ECF9EC",
            }}
          >
            ⏱ 00:00:00
          </div>

          {/* Help */}
          <HelpOutlineRoundedIcon size="large">
            {/* <span style={{ color: '#9ca3af', fontSize: '18px' }}>?</span> */}
          </HelpOutlineRoundedIcon>

          {/* Bell */}
          <NotificationsNoneRoundedIcon
            size="large"
            style={{ fontSize: "20px" }}
          >
            {/* <span style={{ color: '#9ca3af', fontSize: '20px' }}></span> */}
          </NotificationsNoneRoundedIcon>

          <div style={{height: '30px', color: "#e4e4e4", backgroundColor: "#e4e4e4", border: '1px solid #e4e4e4'}}>

          </div>
          {/* Avatar */}
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
            }}
          >
            <img
              src="https://i.pravatar.cc/32"
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
