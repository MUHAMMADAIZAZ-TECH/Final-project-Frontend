import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetauthstates } from "../../../Store/Slicers/Authentication/AuthenticationSlice";
import { Image4, Image6, Image7, Image8 } from "../../../Assests/Images/index";
import { Apps, Search, ArrowDropDown } from "@mui/icons-material";
import {
  Menu,
  MenuItem,
  Box,
  Avatar,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";
export default function Header() {
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem("user"))
  const LogOut = () => {
    if(User?.Provider==="google"){
      dispatch(resetauthstates());
      window.open("http://localhost:5000/auth/logout", "_self");
      localStorage.removeItem('user')
      localStorage.removeItem('isauthenticated')
    }
    else{
      deleteCookies()
      dispatch(resetauthstates());
      localStorage.removeItem('user')
      localStorage.removeItem('isauthenticated')
    }
   
  };
  const deleteCookies = () => {
    var Cookies = document.cookie.split(';');
    for (var i = 0; i < Cookies.length; i++)
    document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
   
 }
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Apps
          sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: 25 }}
        />
        <img src="" alt="" />
       <h2> Travel Management </h2>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
         
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: {
              xs: "none",
              md: "flex",
              justifyContent: "space-between",
            },
          }}
        >
        </Box>
        <IconButton onClick={handleClick}>
          <Avatar
            alt="John Doe"
            src={User?.AvatarUrl}
            sx={{ width: 34, height: 34 }}
          />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            {User?.FirstName} {User?.LastName}
          </MenuItem>
          <MenuItem onClick={handleClose}>{User?.Email}</MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              LogOut();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
