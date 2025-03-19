import "../styles/TravelGuide.css";
import payment from "../../assets/imgs/common/payment-wiki.jpg";
import transport from "../../assets/imgs/common/transport-wiki.jpg";
import booking from "../../assets/imgs/common/booking-wiki.jpg";
import network from "../../assets/imgs/common/network-wiki.jpg";
import visa from "../../assets/imgs/common/visa-wiki.jpg";

import { Link } from "react-router-dom";
function TravelGuideZH() {
  return (
    <section id="guide" className="travel-guide">
      <h2>中国旅行攻略</h2>
      <h3 className="saying">在做任何事之前，做好准备才是成功的关键。</h3>
      <h3 className="ford">-- 亨利·福特</h3>
      <div className="circle-container">
        <Link to='/Wiki-Payment/en' className="circle-link">
          <div className="circle">
            <img src={payment} alt="payment" />
          </div>
          <p>支付</p>
        </Link>
        <Link to="/Wiki-Transport/en" className="circle-link">
          <div className="circle">
            <img src={transport} alt="Transport" />
          </div>
          <p>交通</p>
        </Link>
        <Link to="/Wiki-Hotel-And-Ticket-Booking/en" className="circle-link">
          <div className="circle">
            <img src={booking} alt="Hotel-and-ticket-booking" />
          </div>
          <p>酒店 & 订票</p>
        </Link>
        <Link to="/Wiki-Internet-Connectivity/en" className="circle-link">
          <div className="circle">
            <img src={network} alt="Internet-Connectivity" />
          </div>
          <p>网络</p>
        </Link>
        <Link to="/Wiki-VisaFree-TravelGuide/en" className="circle-link">
          <div className="circle">
            <img src={visa} alt="Wiki-VisaFree-TravelGuide" />
          </div>
          <p>签证</p>
        </Link>
      </div>
    </section>
  );
}
export default TravelGuideZH;
