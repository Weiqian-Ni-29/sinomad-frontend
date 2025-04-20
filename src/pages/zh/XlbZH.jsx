import Gallery from "../../components/Gallery";
import '../styles/TripDetail.css';
import img1 from '../../assets/imgs/trips/xlb/xlb1.jpg';
import img2 from '../../assets/imgs/trips/xlb/xlb2.jpg';
import img3 from '../../assets/imgs/trips/xlb/xlb3.jpg';
import img4 from '../../assets/imgs/trips/xlb/xlb4.jpg';
import img5 from '../../assets/imgs/trips/xlb/xlb5.jpg';
import img6 from '../../assets/imgs/trips/xlb/xlb6.jpg';
import img7 from '../../assets/imgs/trips/xlb/xlb7.jpg';
import img8 from '../../assets/imgs/trips/xlb/xlb8.jpg';
import img9 from '../../assets/imgs/trips/xlb/xlb9.jpg';
import img10 from '../../assets/imgs/trips/xlb/xlb10.jpg';
import clockLogo from '../../assets/imgs/common/clock.png';
import TravelInfoZH from '../../components/zh/TravelInfoZH';
import Divider from '@mui/material/Divider';
import FooterZH from "../../components/zh/FooterZH";
import NavBarCustomZH from "../../components/zh/NavBarCustomZH";
import XlbTripOverviewZH from "../../components/zh/XlbTripOverviewZH";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function XlbZH(props) {
    const price = props.price;
    const rate = props.rate;
    return (
        <div className="Title">
            <NavBarCustomZH title="非遗传承·匠心手作：南翔小笼文化深度体验之旅" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>CNY￥{price[price.length - 1]} / USD${(price[price.length - 1] / rate).toFixed(2)} 每人起</h3>
                    <h3>请选择出发日期和人数</h3>
                    <TravelInfoZH price={props.price} route="xlb"/>
                    <div className="time-desc-zh">
                        <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                        <h3>行程大约8小时</h3>
                    </div>
                    <h3>可选择英文服务</h3>
                    <p>可提前3天免费取消</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <XlbTripOverviewZH/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <FooterZH/>
        </div>
    );
}
export default XlbZH;