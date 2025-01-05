import "./Explore.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import xujiahui_jingan_img from '../assets/imgs/xjh9.jpg';
import bund_img from '../assets/imgs/bund1.jpg';
import jingze_img from '../assets/imgs/jingze1.jpg';
import xlb_img from '../assets/imgs/xlb1.jpg';
function Explore() {
  const navigate = useNavigate();
  // 点击时执行的跳转函数
  const handleClickXjh = (event) => {
    event.stopPropagation();
    navigate('/XujiahuiJingan');
  };
  const handleClickBund = (event) => {
    event.stopPropagation();
    navigate('/Bund');
  };
  const handleClickJingze = (event) => {
    event.stopPropagation();
    navigate('/Jingze');
  };
  const handleClickXlb = (event) => {
    event.stopPropagation();
    navigate('/Xlb');
  };
  return (
    <section id="experience">
      <div>
        <h2 className="explore-h2">Experience</h2>
        <div className="explore-cards">
          <div className="explore-card">
            <div className="image-container">
              <img src={jingze_img} onClick={handleClickJingze} alt="jingze" />
            </div>
            <div className="card-description">
              <h4>Chinese Painting Experience by local master in Jiangnan Water Town</h4>
            </div>
          </div>
          <div className="explore-card">
            <div className="image-container">
              <img src={xlb_img} onClick={handleClickXlb} alt="xlb" />
            </div>
            <div className="card-description">
              <h4>Xiaolongbao Making in a Private Jiangnan Garden</h4>
            </div>
          </div>
          <div
            className="explore-card" onClick={handleClickXjh}
          >
            <div className="image-container">
              <img src={xujiahui_jingan_img} alt="xujiahui-jingan" />
            </div>
            <div className="card-description">
              <h4>Strolling Through Shanghai Former French Concession</h4>
            </div>
          </div>
          <div className="explore-card" onClick={handleClickBund}>
            <div className="image-container">
              <img
                src={bund_img}
                alt="bund"
              />
            </div>
            <div className="card-description">
            <h4>A Photography Walk from Suzhou Creek to the Bund</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Explore;
