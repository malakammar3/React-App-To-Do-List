import AddTaskComponent from '../AddTaskComponent/AddTaskComponent.jsx';
import ToDoList from '../ToDoList/ToDoList.jsx';
import React from 'react';

import Stack from '@mui/material/Stack';

export default function Main({setPage, isClicked, tasks, setTasks}) {

    React.useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    React.useEffect(() => {
        localStorage.removeItem("tasks");   
    }, [isClicked]);

    React.useEffect(() => {
        setPage('home');
    }, [setPage]);
        
    return(
        <main style={{ 
            display: 'flex',        // make it a flex container
            alignItems: 'flex-start',   // vertical alignment
            justifyContent: 'center', // horizontal alignment
        }}>
            <Stack
                id='main-content-stack'
                direction={'column'}
                justifyContent={'center'}
                alignContent={'center'}
                spacing={3}
                marginTop={5}
                width={'90%'}
                
            >
                <AddTaskComponent 
                    tasks={tasks} 
                    setTasks={setTasks}
                />

                {tasks.length > 0 && (   //only render if there are tasks
                    <ToDoList 
                        tasks={tasks}
                        setTasks={setTasks}
                    />
                )}
            </Stack>
            
        </main>

    );
}