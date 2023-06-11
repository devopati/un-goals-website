import React from "react";
import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import "./homepage.css";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightCircleFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { AiFillStar, AiTwotonePhone } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
// import "bootstrap-icons";
import recycle from "../../assets/images/recycle.jpg";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import { HiUser } from "react-icons/hi";

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
          <div className="mid-bottom-nav-btns">
            <BsFillArrowLeftSquareFill id="nav-btn" />
            <BsFillArrowRightSquareFill id="nav-btn" />
          </div>
        </div>
      </div>
      <div className="homepage-circular-pattern">
        <h1>
          circular <span>economy</span>
        </h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit
          auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
          elit consequat ipsum, nec sagittis sem nibh id elit.
        </h3>
        <div className="circular-pattern-btns">
          <button>reduce</button>
          <button>reuse</button>
          <button>recycle</button>
        </div>
        <div className="circular-pattern-cards">
          <div className="circular-pattern-card">
            <div className="circular-pattern-card-image">
              <img src={recycle} alt="" />
            </div>
          </div>
          <div className="circular-pattern-card cp-2">
            <h2>Reducing waste</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
              velit auctor aliquet.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
            </p>
            <button className="middle-btn mid-bottom-btn">
              Learn More <BsFillArrowRightCircleFill id="btn-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="homepage-waste-counter">
        <div className="overlay"></div>
        <div className="waste-counter-cards">
          <div className="waste-counter-card">
            <h1>4570</h1>
            <small>gabbage bought</small>
          </div>
          <div className="waste-counter-card">
            <h1>1070</h1>
            <small>gabbage sold</small>
          </div>
          <div className="waste-counter-card">
            <h1>4200</h1>
            <small>tons of waste recycled </small>
          </div>
          <div className="waste-counter-card">
            <h1>2590</h1>
            <small>tress saved yearly</small>
          </div>
        </div>
      </div>
      <div className="homepage-contacts">
        <div className="homepage-contacts-cards">
          <div className="homepage-contacts-card">
            <form>
              <h1>
                contact <span>us!</span>
              </h1>
              <div className="contact-input">
                <div>
                  <input type="text" placeholder="Your Full Name" />
                  <div className="input-icon">
                    <HiUser />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Company" />
                  <div className="input-icon">
                    <AiFillStar />
                  </div>
                </div>
              </div>
              <div className="contact-input">
                <div>
                  <input type="text" placeholder="Your Email" />
                  <div className="input-icon">
                    <TfiEmail />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Phone Number" />
                  <div className="input-icon">
                    <AiTwotonePhone />
                  </div>
                </div>
              </div>
              <div className="contact-textarea">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="How can we help?"
                ></textarea>
              </div>
            </form>
          </div>
          <div className="homepage-contacts-card contacts-card2">
            <h1>
              Users' <span>testimonials</span>
            </h1>
            <div className="client-avatar">
              <img
                src="https://recycle.orionthemes.com/demo-1/wp-content/uploads/2016/12/teammember3-150x150.jpg"
                alt=""
              />
              <div>
                <small>Andrew London</small>
                <small>ScrapCorp International</small>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
            <div className="client-avatar">
              <img
                src="https://recycle.orionthemes.com/demo-1/wp-content/uploads/2016/11/teammember5-150x150.jpg"
                alt=""
              />
              <div>
                <small>Robert Jones</small>
                <small>Metal, Glass & Co.</small>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-international-icons">
        <div className="international-icons-cards">
          <div className="international-icons-card">
            <img src={icon1} alt="" />
          </div>
          <div className="international-icons-card">
            <img src={icon2} alt="" />
          </div>
          <div className="international-icons-card">
            <img src={icon3} alt="" />
          </div>
          <div className="international-icons-card">
            <img src={icon4} alt="" />
          </div>
          <div className="international-icons-card">
            <img src={icon5} alt="" />
          </div>
          <div className="international-icons-card">
            <img src={icon6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
