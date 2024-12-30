import './PortalImg.css';
import entranceImg from '../assets/imgs/intro-banner.jpg'
import SimpleImageSlider from "react-simple-image-slider";
const imgs = [entranceImg, entranceImg, entranceImg];

function PortalImg() {
    return (
        <div className="big-enterance-card">
            {/* <img src={entranceImg} alt="entrance_card" /> */}
            <SimpleImageSlider
                            width={'100%'}
                            height={500}
                            images={imgs}
                            showBullets={false}
                            showNavs={true}
                            bgColor="#ffffff"
                            loop={true}
                            autoPlay={true}
                            autoPlayDelay={5.0}
                        />
            <div className="text-overlay">
                <h2>Immersive Cultural Experience in China</h2>
                <p>Providing genuine encounters that transcend mere sightseeing</p>
            </div>
        </div>
    );
}
export default PortalImg;