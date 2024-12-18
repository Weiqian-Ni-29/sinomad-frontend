import './PortalImg.css';
import entranceImg from '../assets/imgs/chenghuangtempo-nightview-generated.webp'
function PortalImg() {
    return (
        <div className="big-enterance-card">
            <img src={entranceImg} alt="entrance_card" />
            <div className="text-overlay">
                <h2>Cheers to your Achievements</h2>
                <p>We went, we reviewed, we reached milestones. See the big things we did together in 2024.</p>
            </div>
        </div>
    );
}
export default PortalImg;