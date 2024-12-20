import './NavBar.css';
import logo from '../assets/imgs/sinomad-logo.webp';
import { Link } from 'react-router-dom';
function NavBar() {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>SiNomad</span>
            </div>
            <nav>
                <Link to="#experience">Experience</Link>
                <Link to="#guide">Guide</Link>
                <Link to="#review">Review</Link>
                <Link to="/AboutUs">About Us</Link>
            </nav>
        </header>
    );
}
export default NavBar;