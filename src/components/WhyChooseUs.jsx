import React from "react";
import "./WhyChooseUs.css"; // Custom CSS for styling

const WhyChooseUs = () => {
  const features = [
    {
      icon: "📞", // Example placeholder for an icon
      title: "24/7 customer support",
      description: "No matter the time zone, we're here to help.",
    },
    {
      icon: "💎", // Example placeholder for an icon
      title: "Earn rewards",
      description: "Explore, earn, redeem, and repeat with our loyalty program.",
    },
    {
      icon: "⭐", // Example placeholder for an icon
      title: "Millions of reviews",
      description:
        "Plan and book with confidence using reviews from fellow travelers.",
    },
    {
      icon: "🗓️", // Example placeholder for an icon
      title: "Plan your way",
      description:
        "Stay flexible with free cancellation and the option to reserve now and pay later at no additional cost.",
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
