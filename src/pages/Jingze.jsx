import SimpleImageSlider from "react-simple-image-slider";
import NavBarCustom from "../components/NavBarCustom";
import Footer from "../components/Footer";
import './TripDetail.css';
import img1 from '../assets/imgs/jingze1.jpg';
import img2 from '../assets/imgs/jingze2.jpg';
import img3 from '../assets/imgs/jingze3.jpg';
import img4 from '../assets/imgs/jingze4.jpg';
import img5 from '../assets/imgs/jingze5.jpg';
import img6 from '../assets/imgs/jingze6.jpg';
import img7 from '../assets/imgs/jingze7.jpg';
import img8 from '../assets/imgs/jingze8.jpg';
import img9 from '../assets/imgs/jingze9.jpg';
import img10 from '../assets/imgs/jingze10.jpg';
import img11 from '../assets/imgs/jingze11.jpg';
import img12 from '../assets/imgs/jingze12.jpg';
import clockLogo from '../assets/imgs/clock.png';
import TravelInfo from '../components/TravelInfo';
import Divider from '@mui/material/Divider';
import JingzeTripOverview from "../components/JingzeTripOverview";
import JingzeItinerary from "../components/JingzeItinerary";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

function Jingze(props) {
    return (
        <div className="Title">
            <NavBarCustom title="Chinese Painting Experience by local master in Jiangnan Water Town" />
            <div className="content-container">
                <div className="img-slider">
                    <SimpleImageSlider
                        width={600}
                        height={800}
                        images={imgs}
                        showBullets={false}
                        showNavs={true}
                        bgColor="#ffffff"
                    />
                </div>
                <div className="picker">
                    <h3>From ${props.price} per person</h3>
                    <h3>Select number of travellers and date of departure.</h3>
                    <TravelInfo price={props.price} route="jingze"/>
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
            <JingzeTripOverview/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <JingzeItinerary/>
            <Footer/>
        </div>
    );
}
export default Jingze;