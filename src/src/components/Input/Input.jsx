import './Input.css';

export default function Input({label, labelClassName, placeholder, onKeyDownFunction, inputID, inputClassName, inputName, inputType, taskName, setTaskName}) {
    return(
        <div className="input-content">
            <label className={labelClassName}>{label}</label>
            <input 
                id={inputID}
                className={inputClassName} 
                name={inputName} 
                type={inputType} 
                required 
                placeholder={placeholder} 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                
            />
        </div>
    );
}
