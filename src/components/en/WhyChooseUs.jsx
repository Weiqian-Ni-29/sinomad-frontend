import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🏷️", 
      title: "Licensed agency",
      description: "We are a licensed travel agency certified by the MCT(China) , always adhering to industry standards to ensure compliant operations.",
    },
    {
      icon: "🎨",
      title: "Deep cultural experience",
      description: "Create lasting memories with our locally-vetted, expertly-curated experiences.",
    },
    {
      icon: "⭐",
      title: "Guaranteed Uniqueness",
      description:
        "Unlock exclusive places and activities that are inaccessible or unexperienced by the general public.",
    },
    {
      icon: "🗓️",
      title: "Stay planned or spontaneous",
      description:
        "The itinerary can be adjusted according to your needs .",
    },
  ];

  return (
    <div className="why-choose-us">
      <h2>Why Choose Us?</h2>
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

export default WhyChooseUs;
