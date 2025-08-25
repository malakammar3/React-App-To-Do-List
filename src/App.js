import Navbar from './components/Navbar/Navbar.jsx'; 
import Footer from './components/Footer/Footer.jsx';

import Home from './components/Home/Home.jsx';
import WelcomePage from './components/WelcomePage/Welcome.jsx';
import Timer from './components/Timer/Timer.jsx';
import ProfileSettings from './components/ProfileSettings/Profile.jsx';
import Weather from './components/Weather/Weather.jsx';

import React from 'react';
import {Route, Routes} from 'react-router-dom';
function App() {

    const [isClicked, setClick] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [city, setCity] = React.useState("");

    const [tasks, setTasks] = React.useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });   

    const [page, setPage] = React.useState("home"); // for styling

    return(
        <>
            
            {isClicked ? (
                    <>
                        
                        <Navbar userName={userName} page={page} />
                        <Routes>
                            <Route path='/' element={<Home page={page} setPage={setPage} isClicked={isClicked} setTasks={setTasks} tasks={tasks} />} />
                            <Route path='/Timer' element={<Timer page={page} setPage={setPage} setTasks={setTasks} tasks={tasks} />} />
                            <Route path='/Profile' element={<ProfileSettings setT userName={userName} setUserName={setUserName} city={city} setCity={setCity} setClick={setClick} page={page} setPage={setPage} setTasks={setTasks} tasks={tasks} />} />
                            
                        </Routes>
                        <Footer footerText="All rights reserved, Asal Technologies 2025 ©" className="footer" children={<Weather city={city} setCity={setCity} />}/>
                    </>
                ): 
                
                <WelcomePage isClicked={isClicked} setClick={setClick} userName={userName} setUserName={setUserName} city={city} setCity={setCity} />
            }
            
        </>
    );
}
     
export default App;
