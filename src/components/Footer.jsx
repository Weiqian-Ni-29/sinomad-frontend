import './Footer.css';
import inslogo from '../assets/imgs/common/Instagram_logo_2016.svg.png'
import xiaohongshulogo from '../assets/imgs/common/XiaohongshuLOGO.png'
import Tiktoklogo from '../assets/imgs/common/tiktok.jpg'
import youtubeLogo from '../assets/imgs/common/youtube-logo.webp'
import facebookLogo from '../assets/imgs/common/facebook_logo.png'
import wechatLogo from '../assets/imgs/common/wechat-logo.png'
import whatappLogo from '../assets/imgs/common/whatsapp-logo.webp'
import ctripLogo from '../assets/imgs/common/ctrip-logo.png'
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
                <h3>Follow/Contact us on social media</h3>
                <div className="social-icons">
                    <a
                        href="https://www.instagram.com/si__nomad?igsh=NGc0NmNiNWg5OXQ1"
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
                        href="https://www.tiktok.com/@chinanomad1124?_t=ZT-8sJtSdIMD3j&_r=1"
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
                        href="https://youtube.com/@chinanomad-s5n?si=WgmODZDsp8YlpPf5"
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
                        href="https://www.facebook.com/share/18FXCg2eq9/?mibextid=qi2Omg"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="Youtube"
                    >
                        <img
                        className="social-logo-image"
                        src={facebookLogo}
                        alt="Facebook"
                        />
                    </a>
                    <a
                        href="https://www.trip.com/travel-guide/personal-home/D0D859D9E755FAFADA9E59CA2AAD1637B33FE25397205A4285E31BA442B12CE4?locale=en-XX&curr=CNY"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="ctrip"
                    >
                        <img
                        className="social-logo-image"
                        src={ctripLogo}
                        alt="ctrip"
                        />
                    </a>
                    <a
                        href="https://wa.me/message/5TZ4WURMIGI7J1"
                        target="_blank"
                        rel="noreferrer noopener"
                        title="whatsapp"
                    >
                        <img
                        className="social-logo-image"
                        src={whatappLogo}
                        alt="whatsapp"
                        />
                    </a>
                    <a
                        href="https://work.weixin.qq.com/kfid/xxxxxxxxx"
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
                </div>
                <div className='others'>
                    <i style={{cursor: 'default'}}>info@si-nomad.com</i>
                    <i onClick={handleClickTermsNConditions}>Terms & Conditions</i>
                </div>
            </div>
        </footer>
    );
}
export default Footer;