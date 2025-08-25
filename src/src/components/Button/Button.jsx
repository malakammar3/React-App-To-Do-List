import './Button.css';

export default function Button({className, type, onClickFunction, btnLabel, icon}) {
    return(
        <button 
            className={className}
            type={type} 
            onClick={onClickFunction}
            >
            {icon}
            {btnLabel}
            
        </button>
    );
}