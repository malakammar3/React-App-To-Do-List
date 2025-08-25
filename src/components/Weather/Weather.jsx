import './Weather.css';
import React, { useState, useEffect } from "react";
import { BiSolidCity } from "react-icons/bi";
import { WiThermometer } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";
import axios from "axios";

export default function Weather({city, setCity}) {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true); // track loading state
    const [error, setError] = useState(null);     // track errors

    const API_KEY = "4bf5d898d2e729a1a82b343817a62ba1";
    
    useEffect( () => //function, dependency array
        {
            axios
                .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`) //already the response converted from json to real js obj.
                .then((response) => {
                    setWeather(response.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setError(error.message);
                    setLoading(false);
                });
            
                return () => {
                    //reset status
                    setError(null);
                    setLoading(true);
                }
        }
    , [city]);

    if (error) {
        return(<p className='weather-messages'>Error</p>);
    }

    if (loading) {
        return(<p>Loading</p>);
    }

    return (
        <div className='weather'>
            <p>
                <BiSolidCity className='icon' size={25}/>
                {weather?.name}
            </p>
            <span>|</span>
            <p>
                <WiThermometer className='icon' size={25}/>
                {Math.round(weather?.main.temp)} °C
            </p>
            <span>|</span>
            <p>
                <WiDaySunnyOvercast className='icon' size={25}/>
                {weather?.weather[0].main}
            </p>
        </div>
    );
}   