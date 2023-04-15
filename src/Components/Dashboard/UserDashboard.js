import { Container, Header, Sidebar } from "../Layout/index";
import React from "react";
import { Link } from 'react-router-dom';
import { Box,CssBaseline,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from '@mui/material'
const UserDashboard = () => {
  const drawerWidth = 240;
  const drawer = (
    <Box sx={{ overflow: 'auto' }}>
    <List>
      {['Bookings', 'NewBooking'].map((text, index) => (
         <Link to={text} key={index} style={{
          color:'black',
          textDecoration:"none"
         }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {/* {index % 2 === 0 ? <AccountCircleIcon /> : <AccountCircleIcon />} */}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
        </Link>))}
    </List>
    </Box>
);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Sidebar drawer={drawer} drawerWidth={drawerWidth}/>
      </Box>
      <Container drawerWidth={drawerWidth}/>
    </Box>
  );
};

export default UserDashboard;
