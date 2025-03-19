import '../styles/NavBar.css';
import logo from '../../assets/imgs/common/siiinomad-logo.jpg';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
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
                <Link to="/AboutUs/en"><h3>About Us</h3></Link>
                <div className="language-switcher-container">
                    <LanguageSwitcher/>
                </div>
            </nav>
        </header>
    );
}
export default NavBar;