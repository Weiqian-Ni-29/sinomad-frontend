import "../styles/Explore.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import xujiahui_jingan_img from '../../assets/imgs/trips/xjh/xjh1.jpg';
import bund_img from '../../assets/imgs/trips/bund/bund1.jpg';
import jingze_img from '../../assets/imgs/trips/jingze/jingze1.jpg';
import xlb_img from '../../assets/imgs/trips/xlb/xlb1.jpg';
import dumpling_img from "../../assets/imgs/trips/dumpling/dumpling1.jpg";
import papercut_img from "../../assets/imgs/trips/papercut/papercutting1.jpg";
function ExploreZH() {
  const navigate = useNavigate();
  // 点击时执行的跳转函数
  const handleClickXjh = (event) => {
    event.stopPropagation();
    navigate('/XujiahuiJingan/zh');
  };
  const handleClickBund = (event) => {
    event.stopPropagation();
    navigate('/Bund/zh');
  };
  const handleClickJingze = (event) => {
    event.stopPropagation();
    navigate('/Jingze/zh');
  };
  const handleClickXlb = (event) => {
    event.stopPropagation();
    navigate('/Xlb/zh');
  };
  const handleClickDumpling = (event) => {
    event.stopPropagation();
    navigate('/Dumpling/zh');
  };
  const handleClickPaperCut = (event) => {
    event.stopPropagation();
    navigate('/PaperCut/zh');
  };
  return (
    <section id="experience">
      <div>
        <h2 className="explore-h2">体验活动产品介绍</h2>
        <div className="explore-cards">
          <div className="explore-card">
            <div className="image-container">
              <img src={jingze_img} onClick={handleClickJingze} alt="jingze" />
            </div>
            <div className="card-description">
              <h4>江南水乡国画大师亲授体验</h4>
            </div>
          </div>
          <div className="explore-card">
            <div className="image-container">
              <img src={xlb_img} onClick={handleClickXlb} alt="xlb" />
            </div>
            <div className="card-description">
              <h4>在私家江南园林制作小笼包</h4>
            </div>
          </div>
          <div
            className="explore-card" onClick={handleClickXjh}
          >
            <div className="image-container">
              <img src={xujiahui_jingan_img} alt="xujiahui-jingan" />
            </div>
            <div className="card-description">
              <h4>漫步上海前法租界</h4>
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
            <h4>从苏州河到外滩的步行之旅</h4>
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
            <h4>漫步历史韵味·手作沪上风味：法租界建筑探索与饺子工坊</h4>
            </div>
          </div>
          <div className="explore-card" onClick={handleClickPaperCut}>
            <div className="image-container">
              <img
                src={papercut_img}
                alt="papercut"
              />
            </div>
            <div className="card-description">
            <h4>「剪影艺巷·舌尖上海」非遗匠心体验之旅</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ExploreZH;
