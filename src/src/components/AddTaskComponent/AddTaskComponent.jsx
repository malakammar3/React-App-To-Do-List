import Input from '../Input/Input.jsx';
import Button from '../Button/Button.jsx';
import './AddTask.css';
import { BiPlus } from "react-icons/bi";

export default function AddTaskComponent({taskName, setTaskName, tasks, setTasks}){

    function addTaskToList () {

        // Check input validation
        if (taskName.trim() === "" || taskName.length <= 2 || taskName.length >= 100) {
            alert(`Please Enter a Valid Task Name!`);
            setTaskName("");
            return;
        }

        const newTask = {
            id: crypto.randomUUID(),
            text: taskName.trim(), //start and end spaces
            isCompleted: false,
            isEditing: false
        };


        setTasks([...tasks, newTask]);  //spread
        setTaskName("");

    }

    return(
        <div className="add-task-content">
            <form onSubmit={(e) => {
                    e.preventDefault();  // prevent page reload
                    addTaskToList();}}
                >

                <Input 
                    label="Enter a task:" 
                    labelClassName="text-label" 
                    placeholder="e.g. Solve the project." 
                    inputID="task-name" 
                    inputClassName="text-input" 
                    inputName="task-name" 
                    inputType="text" 
                    taskName={taskName} 
                    setTaskName={setTaskName} 
                />
                <Button 
                    className="add-task-btn" 
                    type="submit" 
                    btnLabel="Add Task" 
                    icon={<BiPlus size={20}/>}
                />
            </form>
        </div>
    );
}