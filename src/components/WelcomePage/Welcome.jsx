import Footer from '../Footer/Footer.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import logo from '../../imgs/logo.png';
import backGroundImage from '../../imgs/back.jpg';

// Components
import {
  Typography,
  Stack,
  Box,
} from "@mui/material";

// Header Component
export default function Welcome({setClick, userName, setUserName, city, setCity}) {
    
    return(
        <Stack 
        sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // keeps footer at bottom
            alignItems: "center",
            backgroundImage: `
                linear-gradient(
                    rgba(250, 250, 250, 0.5),
                    rgba(250, 250, 250, 1),
                    rgba(250, 250, 250, 1),
                    rgba(250, 250, 250, 1),
                    rgba(236, 223, 102, 0.9),
                    rgba(236, 223, 102, 0.9)
                ),
                url(${backGroundImage})
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            
        }}
    
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center', 
                }}
            >
                <Stack spacing={2} alignItems="center" justifyContent="center" direction="row">
                    <Box
                        component="img"
                        src={logo}
                        alt="ASAL logo"
                        sx={{ width: 150, height: 'auto' }}
                    />
                    <Typography variant="h4" component="h1" fontWeight="bolder" fontSize={'40px'}>
                        WELCOME TO ASAL'S TO-DO LIST WEBSITE
                    </Typography>
                </Stack>

                <SignUp
                    userName={userName}
                    setUserName={setUserName}
                    setClick={setClick}
                    city={city}
                    setCity={setCity}
                />
            </Box>


            <Footer footerText="All rights reserved, Asal Technologies 2025 ©" className="footer footer-welcome"/>
        </Stack>

    );
}