import React from "react";
import "../../components/Hero/Hero.css";
import ebayimage from "../../assets/ebay.png";
import alibabaimage from "../../assets/alibaba.png";
import brandimage from "../../assets/brand-image.png";
import brandimage2 from "../../assets/brand-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Affordable healthcare will never be out of your reach again.</h1>
        <p>
          Welcome to Sun Medisys Inc, a pioneering force in the medical device
          industry with roots tracing back to the early 2000s. We are your
          dedicated partner in the pursuit of accessible and effective
          healthcare solutions.
        </p>
        <div className="hero-btn">
          <button className="primary-btn">Our Products</button>
          <button className="secondary-btn">About us</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="brand-icons">
            <img src={ebayimage} alt="ebay" className="ebay" />
            <img src={alibabaimage} alt="alibaba" className="ali" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src={brandimage2} alt="brand-image" className="brand-image" />
      </div>
    </div>
  );
};

export default Hero;
