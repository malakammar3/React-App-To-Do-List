// Icons
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import RestoreIcon from '@mui/icons-material/Restore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskIcon from '@mui/icons-material/Task';
import CloseIcon from '@mui/icons-material/Close';

// Components
import { useState } from "react";
import {Accordion, 
        AccordionSummary, 
        Stack, Typography, 
        Divider, 
        Dialog, 
        DialogTitle, 
        DialogContent, 
        DialogActions, 
        DialogContentText,
        TextField,
        Box, 
        } from '@mui/material';

export default function ListItem({
                            id,
                            taskName, 
                            tasks, 
                            setTasks, 

                            isCompleted,
                            isEditing,
                            onDelete, 
                        }) {
                
    const [showDialog, setShowDialog] = useState(false);
    function handleDeleteBtn() {
        setShowDialog(true); // open delete dialog
    }

    function confirmDelete() {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        setShowDialog(false);
        onDelete();
    }

    function cancelDelete() {
        setShowDialog(false);
    }

    function handleCompleteBtn() {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isCompleted: !task.isCompleted }; // toggle isCompleted
            }
            return task; // others stay the same
        });
        setTasks(updatedTasks);
    }

    function handleEditBtn() {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, isEditing: true };
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    


    return(
        <>
            <Accordion 
                id='accordion' 
                key={id}
                sx={{ bgcolor: 'rgba(245,245,245,255)' }}
                expanded={false} // always closed

                >

                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon /> } 
                    sx={{ 
                        alignItems: "flex-start", 
                        p: 2
                     }} 
                    
                    id='accordion-summary-container'>
                    
                    <Stack 
                        direction='column' 
                        id='accordion-summary-content' 
                        spacing={3} 
                        width={'100%'}>

                        <Stack 
                            direction="row" 
                            spacing={1} 
                            alignItems="center" 
                            id='accordion-task-name-container'>

                            <TaskIcon id='task-name-icon' />
                            {isEditing ? (
                                <Box
                                onKeyDown={(e) => {
                                    e.stopPropagation(); // STOP accordion toggle for all keys inside Box
                                }}
                                sx={{ width: '100%' }}
                                >
                                <TextField
                                    size="small"
                                    autoFocus
                                    fullWidth
                                    value={taskName}
                                    onChange={(e) => {
                                        const updatedTasks = tasks.map(task =>
                                        task.id === id ? { ...task, text: e.target.value } : task
                                        );
                                        setTasks(updatedTasks);
                                    }}
                                    onBlur={() => {
                                        const updatedTasks = tasks.map(task =>
                                        task.id === id ? { ...task, isEditing: false } : task
                                        );
                                        setTasks(updatedTasks);
                                    }}
                                    onKeyDown={(e) => {
                                        e.stopPropagation();
                                        if (e.key === "Enter") {
                                            e.preventDefault(); 
                                            e.target.blur(); 
                                        }
                                    }}
                                    />
                                </Box>
                            ) : (
                                <Typography id="accordion-task-name" variant="body2"
                                    sx={{
                                        textDecoration: isCompleted ? "line-through" : "none",
                                        color: isCompleted ? 'gray' : 'black',
                                    }}
                                    fontWeight='bold'
                                    fontSize={'medium'}

                                >
                                    {taskName}
                                </Typography>
                            )}

                        </Stack>
                        <Stack 
                            direction='row' 
                            id='list-item-btns' 
                            justifyContent="flex-end" 
                            columnGap={0.8}>
                            
                            <Button 
                                variant="contained" 
                                size='small' 
                                color="primary" 
                                onClick={(e) => {
                                    handleEditBtn(); 
                                    e.stopPropagation();}} 
                                startIcon={<EditIcon id='edit-icon'/> } 
                                sx={{
                                    backgroundColor: '#FF9500', 
                                    boxShadow: "none",
                                    fontWeight: 'bold'
                                }} 
                                id='edit-btn'
                            >
                                Edit
                            </Button>
                            <Button 
                                variant="contained" 
                                size='small' 
                                color="primary" 
                                onClick={(e) => {
                                    handleCompleteBtn(); 
                                    e.stopPropagation();}}
                                startIcon={!isCompleted ? <CheckIcon id='check-icon' /> : <RestoreIcon id='restore-icon'/>}
                                sx={{
                                    backgroundColor: '#4caf50',
                                    boxShadow: "none",
                                    fontWeight: 'bold'
                                }} 
                                id='complete-btn'
                            >
                                {!isCompleted ? "Completed": "Incomplete"}
                            </Button>
                            <Button 
                                variant="contained" 
                                size='small' 
                                color="primary" 
                                onClick={(e) => {
                                    handleDeleteBtn(); 
                                    e.stopPropagation();}} 
                                    startIcon={<DeleteIcon id='delete-icon'/>}
                                sx={{
                                    backgroundColor: '#f44336',
                                    boxShadow: "none",
                                    fontWeight: 'bold'
                                }}
                                id='delete-btn'
                            >
                                Delete
                            </Button>

                        </Stack>
                    </Stack>
                    
                </AccordionSummary>
                <Divider id='accordion-divider' />
                
            </Accordion>

            <Dialog 
                id='delete-dialog'
                open={showDialog}
                onClose={() => setShowDialog(false)}
                fullWidth
                sx={{
                    '& .MuiPaper-root': {
                        height: '200px',
                        maxHeight: '80vh', // or responsive
                    }
                }}
            >
                <DialogTitle id='delete-dialog-title' >
                    Delete the Task?
                </DialogTitle>
                <DialogContent id='delete-dialog-content'>
                    <DialogContentText id='delete-dialog-text' >
                        {`Are you sure you want to delete '${taskName}'?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions id='delete-dialog-actions'>
                    <Button 
                        startIcon={<CheckIcon id='confirm-icon'/>} 
                        id='confirm-btn' 
                        variant='outlined' 
                        sx={{
                            backgroundColor: '#4caf50',
                            borderColor: '#4caf50',
                            transition: 'opacity 0.2s ease',
                            color: '#fff',
                            fontWeight: 'bold',
                            '&:hover': {
                                opacity: '0.8',
                            }
                        }} 
                        onClick={confirmDelete}>
                        Confirm
                    </Button>
                    <Button 
                        startIcon={<CloseIcon id='cancel-icon'/>} 
                        id='cancel-btn' 
                        variant='outlined' 
                        sx={{
                            borderColor: '#f44336',
                            transition: 'opacity 0.2s ease',
                            color: '#f44336',
                            fontWeight: 'bold',
                            '&:hover': {
                                opacity: '0.8',
                            }
                        }} 
                        onClick={cancelDelete}>
                        Cancel
                    </Button>
                </DialogActions>

            </Dialog>

            
        </>

            
    );
}