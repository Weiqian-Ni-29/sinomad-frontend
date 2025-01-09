import './NavBar.css';
import logo from '../assets/imgs/common/sinomad-logo.webp';
import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>SiNomad</span>
            </div>
            <nav>
                <a href="#experience">Experience</a>
                <a href="#guide">Guide</a>
                <Link to="/AboutUs">About Us</Link>
            </nav>
        </header>
    );
}
export default NavBar;