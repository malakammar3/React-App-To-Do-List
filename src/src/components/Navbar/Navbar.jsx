import './Navbar.css';
import { LiaAngleDownSolid } from "react-icons/lia";
import { BiSolidUser } from "react-icons/bi";

export default function Navbar({username}) {
    return(
        <nav className="user-nav">
            <li className='navItem'>
                <a className='navAnchor'>
                    <p className='itemText'>Home</p>
                    <LiaAngleDownSolid />
                </a>
            </li>

            <li className='navItem'>
                <a className='navAnchor'>
                    <p className='itemText'>Timer</p>
                    <LiaAngleDownSolid />
                </a>
            </li>

            <li className='navItem'>
                <a href="/" className='navAnchor'>
                    <BiSolidUser size={24} />
                    <p className="user-text">{username}'s List</p>
                </a>
            </li>
        </nav>

    );
}