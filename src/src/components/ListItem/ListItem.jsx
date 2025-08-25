import Button from '../Button/Button.jsx';
import './ListItem.css';
import { useState } from "react";
import Popup from '../PopUp/PopUp.jsx';
import { BiCheck } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiRotateLeft } from "react-icons/bi";

export default function ListItem({id, taskName, setTaskName, tasks, setTasks, isCompleted, isEditing}) {
                
    const [showPopup, setShowPopup] = useState(false);

    function handleDeleteBtn() {
        setShowPopup(true); // open popup
    }

    function confirmDelete() {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        setShowPopup(false);
    }

    function cancelDelete() {
        setShowPopup(false);
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
        <div className="item">
            <li style={{
                textDecoration: isCompleted ? 'line-through' : 'none',
                color: isCompleted ? 'gray' : 'black',
            }}>
                {
                    isEditing ? ( 
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => {
                                const updatedTasks = tasks.map(task => {
                                    if (task.id === id) 
                                        return { ...task, text: e.target.value };
                                    return task;
                                });
                                setTasks(updatedTasks);
                            }}
                            onBlur={() => { //when loose focus
                                const updatedTasks = tasks.map(t => {
                                if (t.id === id) 
                                    return { ...t, isEditing: false };
                                return t;
                                });
                                setTasks(updatedTasks);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.target.blur(); 
                                }
                            }}
                            />
                        ) : (
                            taskName
                        )}
                
            </li>
            <div className="control-btns">
                <Button 
                    className="Edit-btn" 
                    type="button" 
                    onClickFunction={handleEditBtn}
                    btnLabel="Edit"
                    icon={<BiPencil />} 
                />  
                <Button 
                    className="Complete-btn" 
                    type="button" 
                    onClickFunction={handleCompleteBtn}
                    btnLabel={!isCompleted ? "Completed": "Incomplete"} 
                    icon={!isCompleted ? <BiCheck /> : <BiRotateLeft /> }
                />
                <Button 
                    className="Delete-btn" 
                    onClickFunction={handleDeleteBtn}
                    btnLabel="Delete" 
                    icon={<BiSolidTrash />} 
                />
            </div>
            
            {showPopup && (
                <Popup 
                    message={`Are you sure you want to delete '${taskName}'?`}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}

        </div>
    );
}