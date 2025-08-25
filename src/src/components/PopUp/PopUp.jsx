// Popup.jsx
import "./PopUp.css";
import { BiCheck } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";

export default function Popup({ message, onConfirm, onCancel }) {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <p>{message}</p>
                <div className="popup-buttons">
                    <button className="confirm" onClick={onConfirm}>
                        <BiCheck style={{ marginRight: "5px" }}  size={26} /> Yes
                    </button>
                    <button className="cancel" onClick={onCancel}>
                        <BiSolidTrash style={{ marginRight: "5px" }}  size={24} /> No
                    </button>
                </div>
            </div>
        </div>
    );
    }
