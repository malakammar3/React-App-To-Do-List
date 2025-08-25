import Header from './components/Header/Header.jsx'; 
import Footer from './components/Footer/Footer.jsx';
import Main from './components/Main/Main.jsx';
import Timer from './components/Timer/Timer.jsx';
import WelcomePage from './components/WelcomePage/Welcome.jsx';
import React from 'react';
import Weather from './components/Weather/Weather.jsx';

import './App.css'; 

function App() {

    const [isClicked, setClick] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [city, setCity] = React.useState("");
         
    return(
        <>
            
            {isClicked ? (
                    <>
                        <Header userName={userName}/>
                        <Timer />
                        <Footer footerText="All rights reserved, Asal Technologies 2025 ©" className="footer" children={<Weather city={city} setCity={setCity} />}/>
                    </>
                ): 
                
                <WelcomePage isClicked={isClicked} setClick={setClick} userName={userName} setUserName={setUserName} city={city} setCity={setCity} />
            }
            
        </>
    );
}
     
//<Header userName={userName}/>
//<Main />
//<Footer footerText="All rights reserved, Asal Technologies 2025 ©" className="footer"/>

export default App;
