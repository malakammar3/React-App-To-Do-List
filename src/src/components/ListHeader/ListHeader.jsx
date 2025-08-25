import Button from '../Button/Button.jsx';
import './ListHeader.css';
import { BiSolidTrash } from "react-icons/bi";

export default function ListHeader({tasks, setTasks}) {
    function deleteAll() {
        const isConfirmed = window.confirm("Are you sure you want to delete all tasks?");
        if (isConfirmed) {
            setTasks([]); 
            alert("All tasks have been deleted.");
            return;
        }
    }
    
    return(
        <div className="list-header">
            <p className="list-title">To-Do List:</p>
            <Button className="delete-all-btn" type="submit" onClickFunction={deleteAll} btnLabel="Delete All" icon={<BiSolidTrash />} />
        </div>
    );
}