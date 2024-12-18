import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/imgs/sinomad-logo.webp';
function NavBarCustom(props) {
    const navigate = useNavigate();
    // 点击时执行的跳转函数
    const handleClick = (event) => {
      event.stopPropagation();  // 阻止事件冒泡
      navigate('/'); // 跳转到 XujiahuiJingan 页面
    };
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