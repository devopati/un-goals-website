import React from "react";
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import "./homepage.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import "bootstrap-icons";

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
        <div className="home-middle-card small-middle">
          <div className="homemid-image">
            {/* <img
                src=
                alt=""
              /> */}
          </div>
        </div>
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
      <div className="homepage-mid-section">
        <div className="midsection-header">
          <h1>
            buy & <span>sell</span> gabbbage
          </h1>
          <h3>
            We offer comprehensive recycling, industry-specific waste
            management, quality control & sustainability solutions for
            businesses and corporations.
            <span className="sow-icon-environmental"></span>
          </h3>
        </div>
      </div>
      <div className="homepage-mid-bottom">
        <div className="mid-bottom-hang">
          <h2>request free quote</h2>
        </div>
        <div className="midbottom-head">
          <h1>latest articles</h1>
          <h3>
            Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
            velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
            auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
          </h3>
          <div className="mid-bootom-cards">
            <div className="midbottom-card">
              <div className="mid-top">
                <h4>
                  august 15, 2012 | <span>recycling</span>
                </h4>
              </div>
              <h2>how to recycle paper</h2>
              <div className="mid-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit.
                </p>
              </div>
              <button className="middle-btn mid-bottom-btn">
                Learn More <BsFillArrowRightCircleFill id="btn-icon" />
              </button>
            </div>
            <div className="midbottom-card">
              <div className="mid-top">
                <h4>
                  january 26, 2022 | <span>recycling</span>
                </h4>
              </div>
              <h2>green business solutions</h2>
              <div className="mid-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit.
                </p>
              </div>
              <button className="middle-btn mid-bottom-btn">
                Learn More <BsFillArrowRightCircleFill id="btn-icon" />
              </button>
            </div>
            <div className="midbottom-card">
              <div className="mid-top">
                <h4>
                  december 13, 2016 | <span>recycling</span>
                </h4>
              </div>
              <h2>waste management tips</h2>
              <div className="mid-paragraph">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                  nibh id elit. bibendum auctor, nisi elit consequat ipsum, nec
                  sagittis sem nibh id elit. nibh id elit. bibendum auctor, nisi
                  elit consequat ipsum, nec sagittis sem nibh id elit. sagittis
                  sem nibh id elit. nibh id elit. bibendum auctor, nisi elit
                  consequat ipsum, nec sagittis sem nibh id elit.
                </p>
              </div>
              <button className="middle-btn mid-bottom-btn">
                Learn More <BsFillArrowRightCircleFill id="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
