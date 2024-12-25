import "./Explore.css";
import React from "react";
import { useNavigate } from 'react-router-dom';
import dummypic from "../assets/imgs/chenghuangtempo-nightview-generated.webp";
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
  return (
    <section id="experience">
      <div>
        <h2 className="explore-h2">Experience</h2>
        <div className="explore-cards">
          <div
            className="explore-card" onClick={handleClickXjh}
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
          <div className="explore-card" onClick={handleClickBund}>
            <div className="image-container">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Christmas Market"
              />
            </div>
            <div className="card-description">
            <h4>Discover the Hidden Charms: A Photography Walk from Suzhou Creek to the Bund</h4>
              <p>Embark on an exclusive small-group photography walk from Suzhou Creek to the Bund, capturing hidden gems and history with an expericed local guide and a professional photographer, culminating in a traditional Shanghai hotpot.</p>
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
