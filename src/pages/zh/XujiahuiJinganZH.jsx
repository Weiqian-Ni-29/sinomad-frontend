import Gallery from "../../components/Gallery";
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
import TravelInfoZH from '../../components/zh/TravelInfoZH';
import Divider from '@mui/material/Divider';
import FooterZH from "../../components/zh/FooterZH";
import NavBarCustomZH from "../../components/zh/NavBarCustomZH";
import XjhTripOverviewZH from "../../components/zh/XjhTripOverviewZH";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9];

function XujiaHuiJinganZH(props) {
    const price = props.price;
    const rate = props.rate;
    return (
        <div className="Title">
            <NavBarCustomZH title="漫步上海前法租界" />
                <div className="content-container">
                    <div className="img-slider">
                        <Gallery imgs={imgs}/>
                    </div>
                    <div className="picker">
                        <h3>CNY￥{price[price.length - 1]} / USD${(price[price.length - 1] / rate).toFixed(2)} 每人起</h3>
                        <h3>请选择出发日期和人数</h3>
                        <TravelInfoZH price={props.price} route="xujiahui-jingan"/>
                        <div className="time-desc-zh">
                            <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                            <h3>行程大约2.5小时</h3>
                        </div>
                        <h3>可选择英文服务</h3>
                        <p className="small-trip-info-font">该行程的最晚预定时间为出发前一天的北京时间中午12:00之前</p>
                        <p className="small-trip-info-font">该线路的排期在每周的周二和周四.</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Divider style={{ width: '80%' }} />
                </div>
                <XjhTripOverviewZH/>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Divider style={{ width: '80%' }} />
                </div>
            <FooterZH />
        </div>
    );
}

export default XujiaHuiJinganZH;
