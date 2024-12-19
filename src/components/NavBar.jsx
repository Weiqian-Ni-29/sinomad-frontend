import './NavBar.css';
import logo from '../assets/imgs/sinomad-logo.webp';
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
                <a href="#review">Review</a>
                <a href="#aboutus">About Us</a>
            </nav>
        </header>
    );
}
export default NavBar;