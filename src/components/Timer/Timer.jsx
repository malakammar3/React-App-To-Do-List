// Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';

// Components
import { useState, useEffect, useRef } from "react";
import { 
    Box, 
    Typography, 
    Button, Stack, 
    CircularProgress, 
    TextField } from "@mui/material";
    
import sound from "./iphone-alarm.m4a";

export default function Timer({setPage}) {
    //for navbar border color
    useEffect(() => {
            setPage("timer");
    }, [setPage]);

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    const [totalSeconds, setTotalSeconds] = useState(0);

    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null); //does not reset in every re-render like useState so we save the id of the set interval

    const audioRef = useRef(new Audio(sound));

    const handleStart = () => {
        const total = hours * 3600 + minutes * 60 + seconds;
        if (total > 0) {
            setTotalSeconds(total);
            setIsRunning(true);

            // Unlock audio on user interaction
            audioRef.current
                .play()
                .then(() => {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                })
                .catch(() => {});
            }
    };

    const handleCancel = () => {
        setIsRunning(false);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setTotalSeconds(0);
        clearInterval(intervalRef.current);
    };

    const playSound = () => {
        audioRef.current.currentTime = 0;
        audioRef.current.play()
                        .catch((err) => console.log("Audio play failed:", err));
    };

    useEffect(() => {
        if (isRunning) {
            //.current saves the value i want to persist, if i updated it it wont re-render
            intervalRef.current = setInterval(() => { // i start count down seconds then minutes then hours
                setSeconds((prevSec) => {
                    if (prevSec === 0) {
                        if (minutes > 0) {
                            setMinutes((m) => m - 1);
                            return 59;
                        } else if (hours > 0) {
                            setHours((h) => h - 1);
                            setMinutes(59);
                            return 59;
                        } else {
                            clearInterval(intervalRef.current); //as we stop the id 
                            setIsRunning(false);
                            playSound(); // play alarm at end
                            return 0;
                        }
                    } else {
                        return prevSec - 1;
                    }
                    });
            }, 1000); //every one second
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, hours, minutes, seconds]);

    const formatTime = (h, m, s) => {
        const hh = String(h).padStart(2, "0"); //if the number does not have 2 chars at least, it adds zero
        const mm = String(m).padStart(2, "0");
        const ss = String(s).padStart(2, "0");
        return `${hh}:${mm}:${ss}`;
    };

    const progress = totalSeconds ? ((hours * 3600 + minutes * 60 + seconds) / totalSeconds) * 100: 0; //change to seconds

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={5}
            padding={3}
        >
            {/* fields */}
            <Stack id='text-fields-stack' justifyContent={'center'} alignItems={'center'} direction={'row'} width={'60%'} spacing={4}>
                {/* hours */}
                <TextField value={hours} fullWidth label='Hours' type="number" onChange={(e) => {
                    const value = Number(e.target.value);
                    if(value > 60) {
                        setHours(60);
                        e.target.value = '60';
                    }
                    setHours(value);
                }} />

                {/* minutes */}
                <TextField value={minutes} fullWidth label='Minutes' type="number" onChange={(e) => {
                    const value = Number(e.target.value);
                    if(value > 60) {
                        setMinutes(60);
                        e.target.value = '60';
                    }
                    setMinutes(value);
                }} />

                {/* seconds */}
                <TextField value={seconds} fullWidth label='Seconds' type="number" onChange={(e) => {
                    const value = Number(e.target.value);
                    if(value > 60) {
                        setSeconds(60);
                        e.target.value = '60';
                    }
                    setSeconds(value);
                }} />
                    
            </Stack>

            {/* timer */}

            <Box position="relative" display="inline-flex">
                <CircularProgress
                    variant="determinate" //not to loop endlessly
                    value={progress}
                    size={280}
                    thickness={3}
                    sx={{
                        color: "#FFA500",
                        backgroundColor: "#eaeaeaff",
                        borderRadius: "50%",
                        boxShadow: "0 0 4px #7a7a7aff",
                    }}
                />
                <Box
                    position="absolute"
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <Typography
                        variant="h3"
                        color="#FFA500"
                        fontWeight="bold"
                        sx={{ textShadow: "0 0 2px #FFA500" }}
                    >
                        {formatTime(hours, minutes, seconds)}
                    </Typography>
                </Box>
            </Box>


            {/* actions -btns */}
            <Stack id='timer-btns-stack' justifyContent={'center'} alignItems={'center'} direction={'row'} spacing={4}>
                <Button
                    variant="contained"
                    startIcon={<PlayArrowIcon />}
                    onClick={handleStart}
                    sx={{fontWeight:'bold',
                        bgcolor: '#FFA500'
                    }}
                    >
                    Start
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<CloseIcon />}
                    onClick={handleCancel}
                    sx={{fontWeight:'bold',
                        color: '#FFA500',
                        borderColor: '#FFA500'
                    }}
                    >
                    Cancel
                </Button>
            </Stack>
        
        </Box>
    );
}
