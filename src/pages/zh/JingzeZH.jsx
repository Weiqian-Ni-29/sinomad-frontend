import Gallery from "../../components/Gallery";
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
import TravelInfo from '../../components/TravelInfo';
import Divider from '@mui/material/Divider';
import FooterZH from "../../components/zh/FooterZH";
import NavBarCustomZH from "../../components/zh/NavBarCustomZH";
import JingzeTripOverviewZH from "../../components/zh/JingzeTripOverviewZH";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

function Jingze(props) {
    return (
        <div className="Title">
            <NavBarCustomZH title="江南水乡国画大师亲授体验" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>￥{props.price} / 每人</h3>
                    <h3>请选择出发日期和人数</h3>
                    <TravelInfo price={props.price} route="jingze"/>
                    <div className="time-desc-zh">
                        <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                        <h3>行程大约5小时</h3>
                    </div>
                    <h3>可选择英文服务</h3>
                    <p>可提前3天免费取消</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <JingzeTripOverviewZH/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <FooterZH/>
        </div>
    );
}
export default Jingze;