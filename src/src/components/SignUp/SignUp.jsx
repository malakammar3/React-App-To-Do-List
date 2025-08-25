import Button from '../Button/Button.jsx';
import Input from '../Input/Input.jsx';
import { BiUserPlus } from "react-icons/bi";
import DropList from '../DropList/DropList.jsx';
import './SignUp.css';
import React from 'react';

export default function SignUp({userName, setUserName, setClick, city, setCity}) {

    const palestinianCities = [
    "Ramallah",
    "Gaza",
    "Nablus",
    "Hebron",
    "Jenin",
    "Tulkarm",
    "Jericho",
    "Khan Yunis",
    "Rafah",
    "Salfit",
    "Tubas",
    "Jerusalem"
    ];

    function submitUserName(e){
        e.preventDefault(); // prevent page reload

        if (userName.trim() !== "" && userName.length >= 3 && userName.length <= 20) {
            setClick(true);
            return;
        }
        
        if (city = "") {
            console.log(city);
            alert(`Please Choose a City Name!`);

        }
        else if (userName.trim() === "") {
            alert(`Please Enter a Valid User Name!`);
        }

        setUserName("");
    
    }
    return(
        <div className='signup-input'>
            <form onSubmit={submitUserName}> 
                
                <Input 
                    label="Enter Your Name:" 
                    labelClassName="text-label" 
                    placeholder="e.g. Malak." 
                    inputID="task-name" 
                    inputClassName="text-input" 
                    inputName="task-name" 
                    inputType="text" 
                    taskName={userName}
                    setTaskName={setUserName}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            submitUserName(e); // now e is defined
                        }
                    }}
                    
                />
                <DropList city={city} setCity={setCity} palestinianCities={palestinianCities} message="Select Your City" />
                <Button 
                    className="user-name-btn" 
                    type="submit" 
                    btnLabel="Sign-Up" 
                    icon={<BiUserPlus size={24}/>}
                />
            </form>
        </div>

    );
}   
            
            
            