import NavBarCustom from "../components/NavBarCustom";
import Footer from "../components/Footer";
import './TripDetail.css';
import img1 from '../assets/imgs/bund1.jpg';
import img2 from '../assets/imgs/bund2.jpg';
import img3 from '../assets/imgs/bund3.jpg';
import img4 from '../assets/imgs/bund4.jpg';
import img5 from '../assets/imgs/bund5.jpg';
import img6 from '../assets/imgs/bund6.jpg';
import img7 from '../assets/imgs/bund7.jpg';
import img8 from '../assets/imgs/bund8.jpg';
import clockLogo from '../assets/imgs/clock.png';
import TravelInfo from '../components/TravelInfo';
import Divider from '@mui/material/Divider';
import BundTripOverview from "../components/BundTripOverview";
import BundItinerary from "../components/BundItinerary";
import Gallery from "../components/Gallery";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8];

function Bund(props) {
    return (
        <div className="Title">
            <NavBarCustom title="A Photography Walk from Suzhou Creek to the Bund" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>From ${props.price} per person</h3>
                    <h3>Select number of travellers and date of departure.</h3>
                    <TravelInfo price={props.price} route="bund"/>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em', marginLeft: '135px' }}>
                        <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                        <h3>5 hours (approx.)</h3>
                    </div>
                    <h3>Available in English</h3>
                    <p>Free cancellation up to 3 days in advance</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <BundTripOverview/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <BundItinerary/>
            <Footer/>
        </div>
    );
}
export default Bund;