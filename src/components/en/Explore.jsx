import "../styles/Explore.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import xujiahui_jingan_img from '../../assets/imgs/trips/xjh/xjh1.jpg';
import bund_img from '../../assets/imgs/trips/bund/bund1.jpg';
import jingze_img from '../../assets/imgs/trips/jingze/jingze1.jpg';
import xlb_img from '../../assets/imgs/trips/xlb/xlb1.jpg';
import dumpling_img from "../../assets/imgs/trips/dumpling/dumpling1.jpg";
import papercut_img from "../../assets/imgs/trips/papercut/papercutting1.jpg";
function Explore() {
  const navigate = useNavigate();
  // 点击时执行的跳转函数
  const handleClickXjh = (event) => {
    event.stopPropagation();
    navigate('/XujiahuiJingan/en');
  };
  const handleClickBund = (event) => {
    event.stopPropagation();
    navigate('/Bund/en');
  };
  const handleClickJingze = (event) => {
    event.stopPropagation();
    navigate('/Jingze/en');
  };
  const handleClickXlb = (event) => {
    event.stopPropagation();
    navigate('/Xlb/en');
  };
  const handleClickDumpling = (event) => {
    event.stopPropagation();
    navigate('/Dumpling/en');
  };
  const handleClickPaperCut = (event) => {
    event.stopPropagation();
    navigate('/PaperCut/en');
  };
  return (
    <section id="experience">
      <div>
        <h2 className="explore-h2">Choose Your Experience</h2>
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
              <h4>Heritage & Craftsmanship: A Deep Dive into Nanxiang Xiaolongbao Culture</h4>
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
            <h4>A Cinematic Walk from Suzhou Creek to the Bund</h4>
            </div>
          </div>
          <div className="explore-card" onClick={handleClickDumpling}>
            <div className="image-container">
              <img
                src={dumpling_img}
                alt="dumpling"
              />
            </div>
            <div className="card-description">
            <h4>Heritage Walk & Dumpling Workshop: Former French Concession Architecture & Culinary Craft</h4>
            </div>
          </div>
          <div className="explore-card" onClick={handleClickPaperCut}>
            <div className="image-container">
              <img
                src={papercut_img}
                alt="paperCut"
              />
            </div>
            <div className="card-description">
            <h4>Snip, Savor, Stroll:  Tianzifang Paper-Cut & Culinary Odyssey</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Explore;
