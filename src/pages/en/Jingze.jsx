import Gallery from "../../components/Gallery";
import NavBarCustom from "../../components/en/NavBarCustom";
import Footer from "../../components/en/Footer";
import '../styles/TripDetail.css';
import img1 from '../../assets/imgs/trips/jingze/jingze1.jpg';
import img2 from '../../assets/imgs/trips/jingze/jingze2.jpg';
import img3 from '../../assets/imgs/trips/jingze/jingze3.jpg';
import img4 from '../../assets/imgs/trips/jingze/jingze4.jpg';
import img5 from '../../assets/imgs/trips/jingze/jingze5.jpg';
import img6 from '../../assets/imgs/trips/jingze/jingze6.jpg';
import img7 from '../../assets/imgs/trips/jingze/jingze7.jpg';
import img8 from '../../assets/imgs/trips/jingze/jingze8.jpg';
import img9 from '../../assets/imgs/trips/jingze/jingze9.jpg';
import img10 from '../../assets/imgs/trips/jingze/jingze10.jpg';
import img11 from '../../assets/imgs/trips/jingze/jingze11.jpg';
import img12 from '../../assets/imgs/trips/jingze/jingze12.jpg';
import clockLogo from '../../assets/imgs/common/clock.png';
import TravelInfo from '../../components/en/TravelInfo';
import Divider from '@mui/material/Divider';
import JingzeTripOverview from "../../components/en/JingzeTripOverview";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

function Jingze(props) {
    const price = props.price;
    const rate = props.rate;
    return (
        <div className="Title">
            <NavBarCustom title="Chinese Painting Experience by local master in Jiangnan Water Town" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>From CNY￥{price[price.length - 1]} / USD${(price[price.length - 1] / rate).toFixed(2)} per person</h3>
                    <h3>Select number of travellers and date of departure.</h3>
                    <TravelInfo price={props.price} route="jingze"/>
                    <div className="time-desc" >
                        <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                        <h3>8 hours (approx.)</h3>
                    </div>
                    <h3>Available in English</h3>
                    <p className="small-trip-info-font">The final booking deadline for this itinerary is 12:00 PM(GMT + 8) on the day prior to departure.</p>
                    <p className="small-trip-info-font">This route is available on every Tuesday and Thursday.</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <JingzeTripOverview/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <Footer/>
        </div>
    );
}
export default Jingze;