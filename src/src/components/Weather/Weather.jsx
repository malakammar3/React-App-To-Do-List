import './Weather.css';
import React, { useState, useEffect } from "react";
import { BiSolidCity } from "react-icons/bi";
import { WiThermometer } from "react-icons/wi";
import { WiDaySunnyOvercast } from "react-icons/wi";

export default function Weather({city, setCity}) {

    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
 
    const API_KEY = "4bf5d898d2e729a1a82b343817a62ba1";
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => {
            if (!res.ok) throw new Error("City not found or invalid API key");
            return res.json();
        })
        .then(data => {
            setWeather(data);
            setLoading(false);
        })
        .catch(err => {
            setError(err.message);
            setLoading(false);
        });
        
        setCity("");
    }, []); //load it at first just only once

    if (loading) return <p>Loading weather...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='weather'>
            <p>
                <BiSolidCity className='icon' size={25}/>
                {weather.name}
            </p>
            <span>|</span>
            <p>
                <WiThermometer className='icon' size={25}/>
                {Math.round(weather.main.temp)} °C
            </p>
            <span>|</span>
            <p>
                <WiDaySunnyOvercast className='icon' size={25}/>
                {weather.weather[0].main}
            </p>
        </div>
    );
}   