import './PortalImg.css';
import entranceImg from '../assets/imgs/intro-banner.jpg'
function PortalImg() {
    return (
        <div className="big-enterance-card">
            <img src={entranceImg} alt="entrance_card" />
            <div className="text-overlay">
                <h2>Immersive Cultural Experience in China</h2>
                <p>Providing genuine encounters that transcend mere sightseeing</p>
            </div>
        </div>
    );
}
export default PortalImg;