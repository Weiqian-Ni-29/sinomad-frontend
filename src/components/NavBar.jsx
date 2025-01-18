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
                <a href="#experience"><h3>Experience</h3></a>
                <a href="#guide"><h3>Guide</h3></a>
                <Link to="/AboutUs"><h3>About Us</h3></Link>
            </nav>
        </header>
    );
}
export default NavBar;