import './Footer.css';
import inslogo from '../assets/imgs/Instagram_logo_2016.svg.png'
import xiaohongshulogo from '../assets/imgs/XiaohongshuLOGO.png'
import Tiktoklogo from '../assets/imgs/tiktok.jpg'
import youtubeLogo from '../assets/imgs/youtube-logo.webp'
import wechatLogo from '../assets/imgs/wechat-logo.png'
import whatappLogo from '../assets/imgs/whatsapp-logo.webp'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleClickTermsNConditions = (event) => {
      event.stopPropagation();  // 阻止事件冒泡
      navigate('/TermsNConditions'); // 跳转到 XujiahuiJingan 页面
    };

    return (
        <footer>
            <div className="social-media-container">
                <h3>Follow us on social media</h3>
                <div className="social-icons">
                    <a
                        href="https://www.instagram.com/china__nomad1124/"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Instagram"
                    >
                        <img
                        className="social-logo-image"
                        src={inslogo}
                        alt="Instagram"
                        />
                    </a>
                    <a
                        href="https://www.xiaohongshu.com/user/profile/6747d76100000000010027ae?xsec_token=ABP0RzheeQMVx43OXJrRM5XIzprAymlXLNN2NicsVwpLs%3D&xsec_source=pc_search"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="XiaoHongShu"
                    >
                        <img
                        className="social-logo-image"
                        src={xiaohongshulogo}
                        alt="XiaoHongShu"
                        />
                    </a>
                    <a
                        href="https://www.tiktok.com/explore"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Tiktok"
                    >
                        <img
                        className="social-logo-image"
                        src={Tiktoklogo}
                        alt="Tiktok"
                        />
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Youtube"
                    >
                        <img
                        className="social-logo-image"
                        src={youtubeLogo}
                        alt="Youtube"
                        />
                    </a>
                    <a
                        href="https://www.whatsapp.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Whatsapp"
                    >
                        <img
                        className="social-logo-image"
                        src={whatappLogo}
                        alt="Whatsapp"
                        />
                    </a>
                    <a
                        href="https://www.wechat.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="wechat"
                    >
                        <img
                        className="social-logo-image"
                        src={wechatLogo}
                        alt="wechat"
                        />
                    </a>
                    <p>sinomad@info.com</p>
                </div>
                <i onClick={handleClickTermsNConditions}>Terms & Conditions</i>
            </div>
        </footer>
    );
}
export default Footer;