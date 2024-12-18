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
    <section id="discover">
      <div>
        <h2 className="explore-h2">Explore</h2>
        <div className="explore-cards">
          <div
            className="explore-card" onClick={handleClick}
          >
            <div className="image-container">
              <img src={dummypic} alt="jingan-temple" />
            </div>
            <div className="card-description">
              <h4>A City Walk Through the Former French Concession</h4>
              <p>
                Explore XuHui-Jing'an, where modern vibes meet historic charm.
                Discover vibrant streets, local culture, and iconic landmarks
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
