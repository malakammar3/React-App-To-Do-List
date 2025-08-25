import './Timer.css';
import Button from '../Button/Button.jsx';
import { BiPlay } from "react-icons/bi";
import { BiPause } from "react-icons/bi";
import { BiRevision } from "react-icons/bi";

// Header Component
export default function Timer() {
    let intervalID = null;
    let ms = 0;
    let secs = 0;
    let mins = 0;
    console.log(typeof mins);

    function startTimer () {
        
        intervalID = setInterval(function () {
            if (ms === 100) {
                ms = 0;
                secs += 1;
            }

            if (secs === 60) {
                secs = 0;
                mins += 1;
            }

            const formatNumber = (num) => String(num).padStart(2, '0');

            document.querySelector('.timer').innerText = `${formatNumber(mins)}:${formatNumber(secs)}:${formatNumber(ms)}`;


            ms++;

        }, 10);
    }

    function pauseTimer() {
        clearInterval(intervalID);
        intervalID = null;
    }

    function resetTimer() {
        clearInterval(intervalID);
        intervalID = null;
        ms = 0;
        mins = 0;
        secs = 0;

        const formatNumber = (num) => String(num).padStart(2, '0');

        document.querySelector('.timer').innerText = `${formatNumber(mins)}:${formatNumber(secs)}:${formatNumber(ms)}`;
    }
    return(
        <div className="timer-container">
            <div className='displayed-timer'>
                
                <div className="timer" id="timer">00:00:00</div>

                <div className="controls">
                    
                    <Button className="btn-start" type="button" onClickFunction={startTimer} btnLabel={"Start"} icon={<BiPlay />} />
                    
                    <Button className="btn-pause" type="button" onClickFunction={pauseTimer} btnLabel={"Pause"} icon={<BiPause/>} />
                    
                    <Button className="btn-reset" type="button" onClickFunction={resetTimer} btnLabel={"Reset"} icon={<BiRevision />} />

                </div>

            </div>
            
        </div>
    );
}