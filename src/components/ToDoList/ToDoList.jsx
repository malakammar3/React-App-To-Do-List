// Icons
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

// Components
import ListItem from '../ListItem/ListItem.jsx';
import { useState } from "react";
import Alert from '@mui/material/Alert';
import {Stack, 
        Typography, 
        Dialog, 
        DialogTitle, 
        DialogContent, 
        DialogActions, 
        DialogContentText,
        Button,
        Snackbar
        } from '@mui/material';


export default function ToDoList({
                            tasks, 
                            setTasks, 
                            }) {

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    
    const handleClose = (event, reason) => {
        if (reason === "clickaway") return;
        setOpenSnackbar(false);
    };

    
    function handleDeleteBtn() {
        setShowDialog(true); // open delete dialog
    }

    function confirmDelete() {
        setTasks([]); 
        setShowDialog(false);
    }

    function cancelDelete() {
        setShowDialog(false);
    }

    return(
        <>
            <Stack  
                id='tasks-list-header'
                direction={'row'}
                justifyContent={'space-between'}
                sx={{
                    padding: '10px',              // optional: remove default padding
                    border: '2px solid rgba(245,245,245,255)',
                    borderRadius: '4px',
                    bgcolor: 'rgba(245,245,245,255)', /*adds transparency*/
                }}
                width={'100%'}
            >
                <Typography 
                    alignContent={'center'}
                    id='tasks-list-header-text' 
                    variant='body1'
                    fontWeight='bolder'
                    >
                    To-Do List:
                </Typography>
                <Button 
                    variant="contained" 
                    size='small' 
                    color="primary" 
                    onClick={handleDeleteBtn} 
                    startIcon={<DeleteIcon id='delete-icon'/>}
                    sx={{
                        backgroundColor: '#f44336',
                        boxShadow: "none",
                        fontWeight: 'bold',
                    }}
                    id='delete-all-btn'
                >
                    Delete All
                </Button>

            </Stack>

            <Stack 
                id='tasks-list'
                direction={'column'}
                spacing={'15px'}
                sx={{
                    overflowY: 'auto',
                    maxHeight: '300px',      // set a fixed height so scroll works
                    padding: '20px',              // optional: remove default padding
                    border: '2px solid rgba(245,245,245,255)',
                    borderRadius: '4px',
                }}
            >

                {tasks.map((task) => (
                    <ListItem 
                        key={task.id} 
                        id={task.id}
                        
                        taskName={task.text} 
                        tasks={tasks}

                        setTasks={setTasks} 

                        isCompleted={task.isCompleted}
                        isEditing={task.isEditing}
                        onDelete={() => setOpenSnackbar(true)}
                    />
                ))}
            </Stack>
               
            <Snackbar 
                open={openSnackbar} 
                autoHideDuration={4000} 
                onClose={handleClose} 
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                id='delete-snackbar'
                >
                <Alert onClose={handleClose} severity="success" 
                sx={{
                        width: '100%',
                        bgcolor: '#4caf50', // green background
                        color: '#fff',       // text color
                        fontWeight: 300,
                        borderRadius: 2,
                        boxShadow: '0 3px 10px rgba(0,0,0,0.2)',
                        typography: 'body1',
                    }}
                    >
                    Task has been deleted.
                </Alert>
            </Snackbar>

            <Dialog 
                id='delete-all-dialog'
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
                <DialogTitle id='delete-all-dialog-title' >
                    Delete All the Tasks?
                </DialogTitle>
                <DialogContent id='delete-all-dialog-content'>
                    <DialogContentText id='delete-all-dialog-text' >
                        {`Are you sure you want to delete all tasks?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions id='delete-all-dialog-actions'>
                    <Button 
                        startIcon={<CheckIcon id='confirm-all-icon'/>} 
                        id='confirm-all-btn' 
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
                        startIcon={<CloseIcon id='cancel-all-icon'/>} 
                        id='cancel-all-btn' 
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