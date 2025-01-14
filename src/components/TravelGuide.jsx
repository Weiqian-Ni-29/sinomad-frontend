import "./TravelGuide.css";
import payment from "../assets/imgs/common/payment-logo.webp";
import transport from "../assets/imgs/common/transportation-logo.webp";
import weather from '../assets/imgs/common/weather.webp'
import food from '../assets/imgs/common/food.jpg'
import culture from '../assets/imgs/common/culture.webp'
import { Link } from "react-router-dom";
function TravelGuide() {
  return (
    <section id="guide" className="travel-guide">
      <h2>China Travel Guide</h2>
      <h3 className="saying">Before everything else, getting ready is the Secret of Success.</h3>
      <h3 className="ford">-- Henry Ford</h3>
      <div className="circle-container">
        <Link to='/Wiki-Payment' className="circle-link">
          <div className="circle">
            <img src={payment} alt="payment" />
          </div>
          <p>Payment</p>
        </Link>
        <Link to="/Wiki-Transport" className="circle-link">
          <div className="circle">
            <img src={transport} alt="Transport" />
          </div>
          <p>Transport</p>
        </Link>
        {/* <a href="weather.html" className="circle-link">
          <div className="circle">
            <img src={weather} alt="Weather" />
          </div>
          <p>Weather</p>
        </a>
        <a href="food.html" className="circle-link">
          <div className="circle">
            <img src={food} alt="Food" />
          </div>
          <p>Food</p>
        </a>
        <a href="culture.html" className="circle-link">
          <div className="circle">
            <img src={culture} alt="Culture" />
          </div>
          <p>Culture</p>
        </a> */}
      </div>
    </section>
  );
}
export default TravelGuide;
