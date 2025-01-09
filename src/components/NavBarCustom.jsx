import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/imgs/common/sinomad-logo.webp';
function NavBarCustom(props) {
    const navigate = useNavigate();
    // 点击时执行的跳转函数
    const handleClick = (event) => {
      event.stopPropagation();  // 阻止事件冒泡
      navigate('/'); // 跳转到 XujiahuiJingan 页面
    };
    
    useEffect(() => {
        // 页面加载时滚动到顶部
        window.scrollTo(0, 0);
    }, []);
    return(
        <header>
            <div className="logo" onClick={handleClick}>
                <img src={logo} alt="Logo" />
                <span>SiNomad</span>
            </div>
            <h2>{props.title}</h2>
        </header>
    );
}
export default NavBarCustom;