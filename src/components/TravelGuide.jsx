import "./TravelGuide.css";
import payment from "../assets/imgs/common/payment-logo.webp";
import transport from "../assets/imgs/common/transportation-logo.webp";
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
        <Link to="/Wiki-Hotel-And-Ticket-Booking" className="circle-link">
          <div className="circle">
            <img src={transport} alt="Hotel-and-ticket-booking" />
          </div>
          <p>Hotel &<br/> Ticket Booking</p>
        </Link>
        <Link to="/Wiki-Internet-Connectivity" className="circle-link">
          <div className="circle">
            <img src={transport} alt="Internet-Connectivity" />
          </div>
          <p>Internet</p>
        </Link>
        <Link to="/Wiki-VisaFree-TravelGuide" className="circle-link">
          <div className="circle">
            <img src={transport} alt="Wiki-VisaFree-TravelGuide" />
          </div>
          <p>Visa</p>
        </Link>
      </div>
    </section>
  );
}
export default TravelGuide;
