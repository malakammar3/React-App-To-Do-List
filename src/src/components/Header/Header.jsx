import WebsiteImage from '../WebsiteImage/WebsiteImage.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import logo from '../../imgs/asal-logo.png';
import './Header.css';

// Header Component
export default function Header({userName}) {
    return(
        <header className="header-container">
            <WebsiteImage className="asal-logo" src={logo} alt="ASAL logo"/>
            <Navbar username={userName}/>
        </header>
    );
}