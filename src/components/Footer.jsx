import './Footer.css';
import inslogo from '../assets/imgs/common/Instagram_logo_2016.svg.png'
import xiaohongshulogo from '../assets/imgs/common/XiaohongshuLOGO.png'
import Tiktoklogo from '../assets/imgs/common/tiktok.jpg'
import youtubeLogo from '../assets/imgs/common/youtube-logo.webp'
import wechatLogo from '../assets/imgs/common/wechat-logo.png'
import whatappLogo from '../assets/imgs/common/whatsapp-logo.webp'
import ctripLogo from '../assets/imgs/common/ctrip-logo.png'
import { useNavigate } from 'react-router-dom';
import whatsappQRcode from '../assets/imgs/common/whatsapp-qrcode.png'
import wechatQRcode from '../assets/imgs/common/wechat-qrcode.png'
import React, { useState } from 'react';

function Footer() {
    const navigate = useNavigate();
    const [showWechatQRCode, setShowWechatQRCode] = useState(false);
    const [showWhatsappQRCode, setShowWhatsappQRCode] = useState(false);
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
                    <div style={{ position: 'relative', display: 'inline-block' }} // 包装容器，定位
                        onMouseEnter={() => setShowWhatsappQRCode(true)}   // 鼠标移入显示二维码
                        onMouseLeave={() => setShowWhatsappQRCode(false)}  // 鼠标移出隐藏二维码
                    >
                        <a
                            href="www.whatsapp.com"
                            onClick={(e) => e.preventDefault()}
                            target="_blank"
                            rel="noreferrer noopener"
                            title="whatsapp"
                            style={{cursor: "default"}}
                        >
                            <img
                            className="social-logo-image"
                            src={whatappLogo}
                            alt="whatsapp"
                            />
                        </a>
                        {/* 当 hover 时显示二维码 */}
                        {showWhatsappQRCode && (
                            <div 
                            style={{
                                position: 'absolute',
                                bottom: '50px',  // 可以调整二维码展示位置
                                left: '50px',
                                zIndex: 10,
                                backgroundColor: 'white',
                                border: '1px solid #ddd',
                                padding: '10px',
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                            }}
                            >
                            <img 
                                src={whatsappQRcode}  // 替换为二维码图片的路径
                                alt="WeChat QR Code"
                                style={{ width: '200px', height: '200px' }}
                            />
                            </div>
                        )}
                    </div>
                    <div style={{ position: 'relative', display: 'inline-block' }} // 包装容器，定位
                        onMouseEnter={() => setShowWechatQRCode(true)}   // 鼠标移入显示二维码
                        onMouseLeave={() => setShowWechatQRCode(false)}  // 鼠标移出隐藏二维码
                    >
                        <a
                            href="www.wechat.com"
                            onClick={(e) => e.preventDefault()}
                            target="_blank"
                            rel="noreferrer noopener"
                            title="wechat"
                            style={{cursor: "default"}}
                        >
                            <img
                            className="social-logo-image"
                            src={wechatLogo}
                            alt="wechat"
                            />
                        </a>
                        {/* 当 hover 时显示二维码 */}
                        {showWechatQRCode && (
                            <div 
                            style={{
                                position: 'absolute',
                                bottom: '50px',  // 可以调整二维码展示位置
                                left: '50px',
                                zIndex: 10,
                                backgroundColor: 'white',
                                border: '1px solid #ddd',
                                padding: '10px',
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'
                            }}
                            >
                            <img 
                                src={wechatQRcode}  // 替换为二维码图片的路径
                                alt="WeChat QR Code"
                                style={{ width: '200px', height: '200px' }}
                            />
                            </div>
                        )}
                    </div>
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
                </div>
                <div className='others'>
                    <i style={{cursor: 'default'}}>sinomad@info.com</i>
                    <i onClick={handleClickTermsNConditions}>Terms & Conditions</i>
                </div>
            </div>
        </footer>
    );
}
export default Footer;