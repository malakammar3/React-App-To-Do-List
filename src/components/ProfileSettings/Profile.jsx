// Icons
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';

import DropList from '../DropList/DropList.jsx';


// Components
import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Divider,
    Button,
    Card,
    CardContent,
    CardActions,
    Stack
} from "@mui/material";
import RightSide from "../RightSide/RightSide.jsx";
import { Link } from "react-router-dom";


export default function Profile({ userName, setUserName, city, setCity, setClick, setPage, tasks, setTasks }) {
    const [isEditName, setIsEditName] = useState(false);
    const [isEditCity, setIsEditCity] = useState(false);

    const palestinianCities = [
        "Ramallah",
        "Gaza",
        "Nablus",
        "Hebron",
        "Jenin",
        "Tulkarm",
        "Jericho",
        "Khan Yunis",
        "Rafah",
        "Salfit",
        "Tubas",
        "Jerusalem",
    ];

    useEffect(() => {
        setPage("profile");
    }, [setPage]);

    function logout() {
        setUserName("");
        setTasks([]);
        setCity("");
        setClick(false);
    }

    return (
        <Box display="flex" gap={3} p={2}>
            {/* Left side: user info */}
            <Card sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                width: '80%',
                height: '90%', 
                flex: 1, 
                boxShadow: 3, 
                borderRadius: 3, 
                justifyContent: 'center', 
                justifySelf: 'center',
                alignItems: 'center',
                alignSelf: 'center'
            }}  
            >
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center', width: '80%'}}>
                <Box >
                    <PersonIcon sx={{ fontSize: 150, color: '#f8d000' }} />
                </Box>

                {/* Username */}
                <Box
                    display="flex"
                    alignItems="flex-start"
                    justifyContent="space-between"
                    width="100%"
                    mb={2}
                >
                    {/* Label + Value */}
                    <Stack spacing={2}>
                        <Typography fontWeight="bolder" fontSize="large">
                            Username:
                        </Typography>

                        {isEditName ? (
                        <TextField
                            size="small"
                            value={userName}
                            autoFocus
                            onChange={(e) => setUserName(e.target.value)}
                            onBlur={() => setIsEditName(false)}
                            onKeyDown={(e) => {
                            if (e.key === "Enter") e.target.blur();
                            }}
                            sx={{ maxWidth: 250 }} // optional: limit width
                        />
                        ) : (
                        <Typography fontSize="large">{userName || "Not set"}</Typography>
                        )}
                    </Stack>

                    {/* Edit button */}
                    <IconButton
                        onClick={() => setIsEditName(true)}
                        sx={{ alignSelf: 'flex-start' }} 
                    >
                        <EditIcon />
                    </IconButton>
                </Box>

                {/* City */}
                <Box display="flex" alignItems="center" width="100%" justifyContent="space-between" columnGap={2}>
                    <Box flex={2}>
                        <Typography fontWeight="bolder" fontSize="large" mb={2}>
                            City:
                        </Typography>
                        {isEditCity ? (
                            <Box flex={1}>  {/* add flex: 1 to allow the DropList to take full space */}
                                <DropList
                                    palestinianCities={palestinianCities}
                                    city={city}
                                    setCity={(newCity) => {
                                        setCity(newCity);
                                        setIsEditCity(false);
                                    }}
                                    message="Select Your City"
                                />
                            </Box>
                            
                        ) : (
                            <Typography fontSize="large">{city || "Not set"}</Typography>
                        )}
                    </Box>
                        <IconButton onClick={() => setIsEditCity(true)}>
                            <EditIcon />
                        </IconButton>
                    </Box>
            </CardContent>

            <Divider 
                sx={{
                    backgroundColor: 'gray', // line color
                    width: '80%',           // make sure it spans the container
                    my: 2,                   // vertical margin
                }} 
            />
            
            <CardActions sx={{ justifyContent: "center" }}>
                <Button
                    variant="outlined"
                    color="error"
                    startIcon={<LogoutIcon />}
                    onClick={logout}
                    component={Link}
                    to="/"
                    sx={{fontWeight:'bold'}}
                    >
                Log Out
                </Button>
            </CardActions>
            </Card>

            {/* Right side: slideshow */}
            <Box display={'flex'} flex={2} justifyContent={'center'} alignItems={'center'}>
                <RightSide tasks={tasks} />
            </Box>
        </Box>
    );
}
