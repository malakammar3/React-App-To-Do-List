// Icons
import HomeIcon from '@mui/icons-material/Home';
import TimerIcon from '@mui/icons-material/Timer';
import PersonIcon from '@mui/icons-material/Person';

// Components
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
} from "@mui/material";

import WebsiteImage from '../WebsiteImage/WebsiteImage.jsx';
import logo from '../../imgs/asal-logo.png';

export default function Navbar({ userName, page }) {
  return (
    <AppBar position="static" sx={{ bgcolor: 'rgba(245,245,245,255)', color: 'black' }}>

      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Box display="flex" alignItems="center">
          <WebsiteImage className="asal-logo" src={logo} alt="ASAL logo" />
        </Box>
        
        <Box display="flex" alignItems="center">
          <Button
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
            sx={{ 
                mr: 3,
                px: 2,
                py: 1,
                color: page === 'home' ? "#000" : "gray",
                borderBottom: page === 'home' ? "3px solid #f8d000" : "3px solid transparent",
                borderRadius: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                    color: "#000",
                    borderBottom: "3px solid #f8d000",
                    backgroundColor: "transparent",
                },
            }}
          >
            <Typography fontWeight={'bold'}>Home</Typography>
          </Button>

          <Button
            component={RouterLink}
            to="/Timer"
            startIcon={<TimerIcon />}
            sx={{ 
                mr: 3,
                px: 2,
                py: 1,
                color: page === 'timer' ? "#000" : "gray",
                borderBottom: page === 'timer' ? "3px solid #f8d000" : "3px solid transparent",
                borderRadius: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                    color: "#000",
                    borderBottom: "3px solid #f8d000",
                    backgroundColor: "transparent",
                },
            }}          >
            <Typography fontWeight={'bold'}>Timer</Typography>
          </Button>

          <Button
            component={RouterLink}
            to="/Profile"
            startIcon={<PersonIcon />}
            sx={{ 
                mr: 3,
                px: 2,
                py: 1,
                color: page === 'profile' ? "#000" : "gray",
                borderBottom: page === 'profile' ? "3px solid #f8d000" : "3px solid transparent",
                borderRadius: 0,
                transition: "all 0.3s ease",
                "&:hover": {
                    color: "#000",
                    borderBottom: "3px solid #f8d000",
                    backgroundColor: "transparent",
                },
            }}>
            <Typography fontWeight={'bold'}>{userName}'s List</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
