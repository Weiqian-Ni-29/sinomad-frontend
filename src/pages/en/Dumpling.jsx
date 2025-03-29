import NavBarCustom from "../../components/en/NavBarCustom";
import Footer from "../../components/en/Footer";
import '../styles/TripDetail.css';
import img1 from '../../assets/imgs/trips/dumpling/dumpling1.jpg';
import img2 from '../../assets/imgs/trips/dumpling/dumpling2.jpg';
import img3 from '../../assets/imgs/trips/dumpling/dumpling3.jpg';
import img4 from '../../assets/imgs/trips/dumpling/dumpling4.jpg';
import img5 from '../../assets/imgs/trips/dumpling/dumpling5.jpg';
import img6 from '../../assets/imgs/trips/dumpling/dumpling6.jpg';
import img7 from '../../assets/imgs/trips/dumpling/dumpling7.jpg';
import img8 from '../../assets/imgs/trips/dumpling/dumpling8.jpg';
import img9 from '../../assets/imgs/trips/dumpling/dumpling9.jpg';
import clockLogo from '../../assets/imgs/common/clock.png';
import TravelInfo from '../../components/en/TravelInfo';
import Divider from '@mui/material/Divider';
import DumplingTripOverview from "../../components/en/DumplingTripOverview";
import Gallery from "../../components/Gallery";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Dumpling(props) {
    return (
        <div className="Title">
            <NavBarCustom title="Heritage Walk & Dumpling Workshop: Former French Concession Architecture & Culinary Craft" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>From ￥{props.price} per person</h3>
                    <h3>Select number of travellers and date of departure.</h3>
                    <TravelInfo price={props.price} route="dumpling"/>
                    <div className="time-desc">
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
            <DumplingTripOverview/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <Footer/>
        </div>
    );
}
export default Dumpling;