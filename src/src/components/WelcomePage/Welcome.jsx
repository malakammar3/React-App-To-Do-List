import WebsiteImage from '../WebsiteImage/WebsiteImage.jsx';
import Footer from '../Footer/Footer.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import logo from '../../imgs/logo.png';
import './Welcome.css';

// Header Component
export default function Welcome({isClicked, setClick, userName, setUserName, city, setCity}) {
    function submitUserName(){
        if (userName.trim() !== "" && userName.length >= 3 && userName.length <= 20) {
            setClick(true);
            return;
        }
        setUserName("");
        alert(`Please Enter a Valid User Name!`);
        

    }
    return(
        <div className="welcome-container">
            <div className='displayed-welcome'>
                <WebsiteImage className="asal-logo-welcome" src={logo} alt="ASAL logo"/>
                <h1 className="welcome-text">
                    WELCOME TO ASAL'S TO-DO LIST WEBSITE
                </h1>
            </div>
            <SignUp userName={userName} setUserName={setUserName} setClick={setClick} city={city} setCity={setCity} />            
            <Footer footerText="All rights reserved, Asal Technologies 2025 ©" className="footer footer-welcome"/>
            


        </div>
    );
}