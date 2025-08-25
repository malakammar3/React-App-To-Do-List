import AddTaskComponent from '../AddTaskComponent/AddTaskComponent.jsx';
import ToDoList from '../ToDoList/ToDoList.jsx';
import React from 'react';
import './Main.css';


export default function Main() {
    const [taskName, setTaskName] = React.useState(""); //for the task itself
    const [tasks, setTasks] = React.useState([]); //for the whole array

    return(
        <main className="main-content-container">
            <AddTaskComponent 
                taskName={taskName}
                setTaskName={setTaskName} 
                tasks={tasks} 
                setTasks={setTasks}
            />

            {tasks.length > 0 && (   //only render if there are tasks
                <ToDoList 
                    taskName={taskName}
                    setTaskName={setTaskName}
                    tasks={tasks}
                    setTasks={setTasks}
                />
            )}
            
        </main>

    );
}