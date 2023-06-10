import React from "react";
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import "./homepage.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-hero">
        <div className="homepage-header">
          <Header configHead={"configHead"} />
        </div>
        <div className="homepage-slider">
          <Slider />
        </div>
      </div>
      <div className="homepage-sub-hero">
        <div className="sub-hero-cards">
          <div className="sub-hero-card">
            <h2>INDUSTRIAL</h2>
            <h3>Waste Management</h3>
            <p>
              We offer complete industrial waste management services, from
              collection to recycling.
            </p>

            <button className="subhero-btn">
              Learn More <BsFillArrowRightCircleFill id="btn-icon" />
            </button>
          </div>
          <div className="sub-hero-card">
            <h2>SUSTAINABLE</h2>
            <h3>Business Solutions</h3>
            <p>
              We help business adopt sustainable and environmentally responsible
              recycling practices.
            </p>
            <button className="subhero-btn">
              Learn More <BsFillArrowRightCircleFill id="btn-icon" />
            </button>
          </div>
          <div className="sub-hero-card">
            <h2>ENVIRONMENTAL</h2>
            <h3>Quality Services</h3>
            <p>
              We focus on disposing of all waste sustainably minimizing
              environmental impact.
            </p>
            <button className="subhero-btn">
              Learn More <BsFillArrowRightCircleFill id="btn-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="homepage-middle">
        <div className="home-middle-cards">
          <div className="home-middle-card">
            <small className="round-head">What we do</small>
            <h1>Welcome to Recycle</h1>
            <h3>
              We are a Leading Global Waste Management Company, Committed to The
              Environment
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              massa ligula, aliquet euismod eleifend vitae, interdum ut mi.
              Praesent fringilla pharetra sapien sit amet semper. Nunc id massa
              ut mi tempus mattis ac eu lectus.
              <button className="middle-btn">
                Learn More <BsFillArrowRightCircleFill id="btn-icon" />
              </button>
            </p>
          </div>
          <div className="home-middle-card">
            <div className="homemid-image">
              {/* <img
                src=
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
