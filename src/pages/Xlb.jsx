import Gallery from "../components/Gallery";
import NavBarCustom from "../components/NavBarCustom";
import Footer from "../components/Footer";
import './TripDetail.css';
import img1 from '../assets/imgs/xlb1.jpg';
import img2 from '../assets/imgs/xlb2.jpg';
import img3 from '../assets/imgs/xlb3.jpg';
import img4 from '../assets/imgs/xlb4.jpg';
import img5 from '../assets/imgs/xlb5.jpg';
import img6 from '../assets/imgs/xlb6.jpg';
import img7 from '../assets/imgs/xlb7.jpg';
import img8 from '../assets/imgs/xlb8.jpg';
import img9 from '../assets/imgs/xlb9.jpg';
import clockLogo from '../assets/imgs/clock.png';
import TravelInfo from '../components/TravelInfo';
import Divider from '@mui/material/Divider';
import XlbTripOverview from "../components/XlbTripOverview";
import XlbItinerary from "../components/XlbItinerary";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Xlb(props) {
    return (
        <div className="Title">
            <NavBarCustom title="Xiaolongbao Making in a Private Jiangnan Garden" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>From ${props.price} per person</h3>
                    <h3>Select number of travellers and date of departure.</h3>
                    <TravelInfo price={props.price} route="xlb"/>
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
            <XlbTripOverview/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <XlbItinerary/>
            <Footer/>
        </div>
    );
}
export default Xlb;