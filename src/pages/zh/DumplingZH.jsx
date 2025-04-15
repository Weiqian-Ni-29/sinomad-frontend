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
import TravelInfoZH from '../../components/zh/TravelInfoZH';
import Divider from '@mui/material/Divider';
import Gallery from "../../components/Gallery";
import FooterZH from "../../components/zh/FooterZH";
import NavBarCustomZH from "../../components/zh/NavBarCustomZH";
import DumplingTripOverviewZH from '../../components/zh/DumplingTripOverviewZH';

const imgs=[img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Dumpling(props) {
    return (
        <div className="Title">
            <NavBarCustomZH title="漫步历史韵味·手作沪上风味：法租界建筑探索与饺子工坊" />
            <div className="content-container">
                <div className="img-slider">
                    <Gallery imgs={imgs}/>
                </div>
                <div className="picker">
                    <h3>CNY￥{props.price} / USD${props.usprice} 每人</h3>
                    <h3>请选择出发日期和人数</h3>
                    <TravelInfoZH price={props.price} route="dumpling"/>
                    <div className="time-desc-zh">
                        <img src={clockLogo} alt="clockLogo" style={{ width: '1.8em', marginRight: '0.5em' }} />
                        <h3>行程大约4小时</h3>
                    </div>
                    <h3>可选择英文服务</h3>
                    <p>可提前3天免费取消</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <DumplingTripOverviewZH/>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Divider style={{ width: '80%' }} />
            </div>
            <FooterZH/>
        </div>
    );
}
export default Dumpling;