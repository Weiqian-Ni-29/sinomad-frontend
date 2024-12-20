import "./Explore.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import dummypic from "../assets/imgs/chenghuangtempo-nightview-generated.webp";
function Explore() {
  const navigate = useNavigate();
  // 点击时执行的跳转函数
  const handleClick = (event) => {
    event.stopPropagation();  // 阻止事件冒泡
    navigate('/XujiahuiJingan'); // 跳转到 XujiahuiJingan 页面
  };
  return (
    <section id="experience">
      <div>
        <h2 className="explore-h2">Experience</h2>
        <div className="explore-cards">
          <div
            className="explore-card" onClick={handleClick}
          >
            <div className="image-container">
              <img src={dummypic} alt="jingan-temple" />
            </div>
            <div className="card-description">
              <h4>Strolling Through Shanghai" French Concession: A Cultural Journey</h4>
              <p>
                Embark on an exclusive city walk tour through the former French Concession, discovering historical buildings, lesser-known stories, regional culture, and culminating in a local culinary experience.
              </p>
            </div>
          </div>
          <div className="explore-card">
            <div className="image-container">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Christmas Market"
              />
            </div>
            <div className="card-description">
            <h4>Place holder</h4>
              <p>A first-timer's guide to Christmas market cruises</p>
            </div>
          </div>
          <div className="explore-card">
            <div className="image-container">
              <img src="https://via.placeholder.com/300x200" alt="Sydney" />
            </div>
            <div className="card-description">
            <h4>Place holder</h4>
              <p>How to spend a perfect day in Sydney for less than $100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Explore;
