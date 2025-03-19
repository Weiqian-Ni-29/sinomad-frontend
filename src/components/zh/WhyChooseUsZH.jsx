import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUsZH = () => {
  const features = [
    {
      icon: "🏷️", 
      title: "正规资质保障",
      description: "我们是中国文旅部颁发经营许可证的正规旅行社，严守行业规范，确保服务合规可靠。",
    },
    {
      icon: "🎨",
      title: "深度文化体验",
      description: "依托本土资源精筛与专业行程设计，为您打造镌刻于心的文化记忆。",
    },
    {
      icon: "⭐",
      title: "独特性体验",
      description:
        "解锁常规游客难以触及的独家秘境与特色活动，开启\"仅你可见\"的中国篇章。",
    },
    {
      icon: "🗓️",
      title: "随心而行 自在无忧",
      description:
        "行程可根据您的需求，做相应调整。",
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>为什么选择我们?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUsZH;
