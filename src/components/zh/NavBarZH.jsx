import '../styles/NavBar.css';
import logo from '../../assets/imgs/common/siiinomad-logo.jpg';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
function NavBarZH() {
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span>SiNomad</span>
            </div>
            <nav>
                <a href="#experience"><h3>体验</h3></a>
                <a href="#guide"><h3>指引</h3></a>
                <Link to="/AboutUs/zh"><h3>关于我们</h3></Link>
                <div className="language-switcher-container">
                    <LanguageSwitcher/>
                </div>
            </nav>
        </header>
    );
}
export default NavBarZH;