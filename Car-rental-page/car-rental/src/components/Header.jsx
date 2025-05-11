import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header(){
    return(
        <nav className='nav-bar'>
            <img src={logo} alt='logo1' className='logo'/>
            
                <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CARS</li>
                <li>SERVICE</li>
                <li>TEAM</li>
                <li>BLOG</li>
                <li>CONTACT</li>
                <li>PAGES</li>
            </ul>
           

        </nav>
    )
};

export default Header;