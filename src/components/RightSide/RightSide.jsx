import React, { useState, useEffect } from "react";
import { Box, Paper, Stack } from "@mui/material";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function RightSide({ tasks }) {
    const [tipIndex, setTipIndex] = useState(0);

    const tips = [
        "Believe in yourself and all that you are.",
        "Every day is a new opportunity.",
        "Success is the sum of small efforts repeated daily.",
        "Don't stop until you're proud."
    ];

    // Automatically rotate tips every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setTipIndex(prev => (prev + 1) % tips.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box display="flex" flexDirection="column" gap={3} width="100%" justifyContent={'center'} alignItems={'stretch'}>
            
            {/* Statistic Cards */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Paper sx={{ flex: 1, p: 2, textAlign: "center", boxShadow: 3 }}>
                    <Typography variant="h6" fontWeight={'bold'}>Completed</Typography>
                    <Typography variant="h4" color="success.main" >{tasks.filter(t => t.isCompleted).length}</Typography>
                </Paper>
                <Paper sx={{ flex: 1, p: 2, textAlign: "center", boxShadow: 3 }}>
                    <Typography variant="h6" fontWeight={'bold'}>Pending</Typography>
                    <Typography variant="h4" color="warning.main">{tasks.filter(t => !t.isCompleted).length}</Typography>
                </Paper>
            </Stack>

            {/* Motivational Tip Card */}
            <Paper sx={{ p: 3, boxShadow: 3, textAlign: "center", minHeight: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="h6" fontWeight={'bold'} fontStyle="italic">“{tips[tipIndex].toUpperCase()}”</Typography>
            </Paper>

            {/* Recent Tasks Accordion */}
            <Accordion
            sx={{
                boxShadow: 3,
                borderRadius: 2,
                "& .MuiAccordionSummary-root": {
                bgcolor: '#fff',
                borderRadius: 2,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                px: 2,
                borderBottom: '2px solid #f8f8f8'
                },
                "&:before": { display: "none" }, // remove default divider line
            }}
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" fontWeight="bold">
                        Recent Tasks
                    </Typography>
                </AccordionSummary>

                <AccordionDetails
                    sx={{
                    maxHeight: 155, // max height for scrolling
                    overflowY: "auto",
                    px: 0,
                    }}
                >
                    {tasks.length > 0 ? (
                    <List>
                        {tasks.slice(-3).map(task => (
                        <ListItem
                            key={task.id}
                            sx={{
                            "&:hover": { bgcolor: "#f1f1f1" },
                            borderRadius: 1,
                            }}
                        >
                            
                            <ListItemText
                            primary={task.text}
                            sx={{
                                textDecoration: task.isCompleted ? "line-through" : "none",
                            }}
                            />
                        </ListItem>
                        ))}
                    </List>
                    ) : (
                        <Typography color="text.secondary" textAlign="center" py={2}>
                            No tasks yet.
                        </Typography>
                    )}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
