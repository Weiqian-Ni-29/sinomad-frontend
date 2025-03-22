import '../styles/TripDetail.css';
import img1 from '../../assets/imgs/trips/bund/bund1.jpg';
import img2 from '../../assets/imgs/trips/bund/bund2.jpg';
import img3 from '../../assets/imgs/trips/bund/bund3.jpg';
import img4 from '../../assets/imgs/trips/bund/bund4.jpg';
import img5 from '../../assets/imgs/trips/bund/bund5.jpg';
import img6 from '../../assets/imgs/trips/bund/bund6.jpg';
import img7 from '../../assets/imgs/trips/bund/bund7.jpg';
import img8 from '../../assets/imgs/trips/bund/bund8.jpg';
import clockLogo from '../../assets/imgs/common/clock.png';
import TravelInfoZH from '../../components/zh/TravelInfoZH';
import Divider from '@mui/material/Divider';
import BundTripOverviewZH from "../../components/zh/BundTripOverviewZH";
import Gallery from "../../components/Gallery";
import FooterZH from "../../components/zh/FooterZH";
import NavBarCustomZH from "../../components/zh/NavBarCustomZH";

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8];

function BundZH(props) {
    return (
        <div className="Title">
            <NavBarCustomZH title="从苏州河到外滩的步行之旅" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>￥{props.price} / 每人</h3>
                    <h3>请选择出发日期和人数</h3>
                    <TravelInfoZH price={props.price} route="bund"/>
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
            <BundTripOverviewZH/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <FooterZH/>
        </div>
    );
}
export default BundZH;