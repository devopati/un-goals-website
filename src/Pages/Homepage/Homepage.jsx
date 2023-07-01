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
import Footer from "../../Components/Footer/Footer";

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
            <h1>Welcome to Green Reuse</h1>
            <h3>
              We are a Food Waste Management Company, committed to The
              environment
            </h3>
            <p>
               We address the challenges asscociated with food waste and providing sustainable solutions. Our team provides advisory services to help users, organisation suh as school and many others to optimize their operations and minimizefood waste generation. 

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
        green waste and the circular economy are interconnected concepts that promote sustainable
         waste management and resource utilization. Green waste, which includes organic materials 
         like food scraps and yard trimmings, can be effectively recycled and transformed into valuable
          resources through processes like composting and anaerobic digestion. This enables the recovery
           of nutrients, the generation of renewable energy, and the creation of economic opportunities. 
           By incorporating green waste into circular economy models, we can minimize waste, maximize resource 
           efficiency, and contribute to a more sustainable and regenerative approach to waste management and resource 
           utilization.
        </h3>
        <div className="circular-pattern-btns">
          <button>Clarity</button>
          <button>Cleanse</button>
          <button>Connect</button>
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
            <small>trees saved yearly</small>
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
                  <input type="text" placeholder="Your E-mail" />
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
              <div>
                <button className="contact-btn">send</button>
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
             simple to use website and really informant , contains accurate fact and statistics.
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
              Im happy with the services offered by the chatbot really resourcfull in helping me find my way around the website.
            </p>
          </div>
        </div>
      </div>
      <div className="homepage-international-icons">
        <div className="international-icons-cards">
          <div className="international-icons-card">
            <img src={icon1} alt="icon" />
          </div>
          <div className="international-icons-card">
            <img src={icon2} alt="icon" />
          </div>
          <div className="international-icons-card">
            <img src={icon3} alt="icon" />
          </div>
          <div className="international-icons-card">
            <img src={icon4} alt="icon" />
          </div>
          <div className="international-icons-card">
            <img src={icon5} alt="icon" />
          </div>
          <div className="international-icons-card">
            <img src={icon6} alt="icon" />
          </div>
        </div>
      </div>
      <div className="homepage-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
