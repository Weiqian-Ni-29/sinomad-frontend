import SimpleImageSlider from "react-simple-image-slider";
import NavBarCustom from "../components/NavBarCustom";
import Footer from "../components/Footer";
import './XujiahuiJingan.css';
import img1 from '../assets/imgs/lib1.jpg';
import img2 from '../assets/imgs/lib2.jpg';
import img3 from '../assets/imgs/church.jpg';
import img4 from '../assets/imgs/apartment.jpg';
import img5 from '../assets/imgs/fountain.jpg';
import img6 from '../assets/imgs/building1.jpg';
import img7 from '../assets/imgs/window.jpg';
import img8 from '../assets/imgs/xiaolongbao.jpg';
import img9 from '../assets/imgs/jingan-nightview.jpg';
import clockLogo from '../assets/imgs/clock.png';
import TravelInfo from '../components/TravelInfo';
import Divider from '@mui/material/Divider';
import XjhTripOverview from "../components/XjhTripOverview";
import Itinerary from "../components/Itinerary";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9];

function XujiaHuiJingan(props) {
    return (
        <div className="XujiahuiJingan">
            <NavBarCustom title="A City Walk Through the Former French Concession" />
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
                        <TravelInfo price={props.price} route="xujiahui-jingan"/>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '2em', marginLeft: '135px' }}>
                            <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                            <h3>5 hours (approx.)</h3>
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
                <Itinerary/>
            <Footer />
        </div>
    );
}

export default XujiaHuiJingan;
