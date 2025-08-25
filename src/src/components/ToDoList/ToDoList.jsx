import ListHeader from '../ListHeader/ListHeader.jsx';
import ListItem from '../ListItem/ListItem.jsx';
import './ToDoList.css';

export default function ToDoList({taskName, setTaskName, tasks, setTasks}) {
    return(
        <>
            <ListHeader tasks={tasks} setTasks={setTasks} />
            <div className="to-do-list">
                <ul className="list">
                    {tasks.map((task) => (
                        <ListItem 
                            key={task.id} 
                            id={task.id}
                            taskName={task.text} 
                            tasks={tasks} 
                            setTasks={setTasks} 
                            isCompleted={task.isCompleted}
                            isEditing={task.isEditing}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}