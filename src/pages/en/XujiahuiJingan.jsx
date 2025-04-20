import Gallery from "../../components/Gallery";
import NavBarCustom from "../../components/en/NavBarCustom";
import Footer from "../../components/en/Footer";
import '../styles/TripDetail.css';
import img1 from '../../assets/imgs/trips/xjh/xjh1.jpg';
import img2 from '../../assets/imgs/trips/xjh/xjh2.jpg';
import img3 from '../../assets/imgs/trips/xjh/xjh3.jpg';
import img4 from '../../assets/imgs/trips/xjh/xjh4.jpg';
import img5 from '../../assets/imgs/trips/xjh/xjh5.jpg';
import img6 from '../../assets/imgs/trips/xjh/xjh6.jpg';
import img7 from '../../assets/imgs/trips/xjh/xjh7.jpg';
import img8 from '../../assets/imgs/trips/xjh/xjh8.jpg';
import img9 from '../../assets/imgs/trips/xjh/xjh9.jpg';
import clockLogo from '../../assets/imgs/common/clock.png';
import TravelInfo from '../../components/en/TravelInfo';
import Divider from '@mui/material/Divider';
import XjhTripOverview from "../../components/en/XjhTripOverview";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9];

function XujiaHuiJingan(props) {
    const price = props.price;
    const rate = props.rate;
    return (
        <div className="Title">
            <NavBarCustom title="Strolling Through Shanghai Former French Concession" />
                <div className="content-container">
                    <div className="img-slider">
                        <Gallery imgs={imgs}/>
                    </div>
                    <div className="picker">
                        <h3>From CNY￥{price[price.length - 1]} / USD${(price[price.length - 1] / rate).toFixed(2)} per person</h3>
                        <h3>Select number of travellers and date of departure.</h3>
                        <TravelInfo price={price} route="xujiahui-jingan"/>
                        <div className="time-desc">
                            <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                            <h3>2.5 hours (approx.)</h3>
                        </div>
                        <h3>Available in English</h3>
                        <p>Free cancellation up to 3 days in advance</p>
                    </div >
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Divider style={{ width: '80%' }} />
                </div>
                <XjhTripOverview/>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Divider style={{ width: '80%' }} />
                </div>
            <Footer />
        </div>
    );
}

export default XujiaHuiJingan;
