import React from "react";
import "./footer.css";
import { MdEmail, MdOutlineRecycling } from "react-icons/md";
import { AiTwotonePhone } from "react-icons/ai";
import { TfiEmail } from "react-icons/tfi";
import { TbWorldWww } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { BsRecycle } from "react-icons/bs";
const Footer = () => {
  const getCurrentYear = new Date().getUTCFullYear();
  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="footer-subscribe">
          <div className="subscribe-cards">
            <div className="subscribe-card">
              <h1>subscribe to our news letter</h1>
              <small>sign up to recieve news and updates!</small>
            </div>
            <div className="subscribe-card">
              <div className="subscribe-input">
                <input type="text" placeholder="Your E-mail" />
                <div>
                  <MdEmail id="sub-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-menu">
          <div className="footer-menu-cards">
            <div className="footer-menu-card footer-about">
              <h2>about us</h2>
              <p>
              Welcome to Green Waste Recycle Hub, your go-to online
               platform for all things related to green waste recycling. 
               Our mission is to educate and empower individuals, businesses, 
               and communities to embrace sustainable waste management practices 
               while creating a marketplace for buying and selling green waste resources. 
               We believe in the power of collaboration and the transformative potential of 
               recycling, and we are here to connect like-minded individuals and foster a greener, cleaner future.
              </p>
              <button>about</button>
            </div>
            <div className="footer-menu-card">
              <h2>menu</h2>
              <li>home</li>
              <li>blog</li>
              <li>map</li>
              <li>about</li>
              {/* <li>contact</li> */}
            </div>
            <div className="footer-menu-card">
              <h2>contact info</h2>
              <div>
                <BsRecycle id="footer-icon" />
                <div>
                  <h5>recycling company</h5>
                  <h5>Thika , Kenya</h5>
                </div>
              </div>
              <div>
                <AiTwotonePhone id="footer-icon" />
                <h5>07-58-233-436</h5>
              </div>
              <div>
                <TfiEmail id="footer-icon" />
                <h5>georgiehackathon@gmail.com</h5>
              </div>
              <div>
                <TbWorldWww id="footer-icon" />
                <h5>anothersite.com</h5>
              </div>
            </div>
            <div className="footer-menu-card footer-about">
              <h2>latest news</h2>
              <div className=" f-last-card">
                <div>
                  <h5>growing a green business</h5>
                  <div>
                    <SlCalender id="footer-icon" />
                    <small>APRIL 26, 2023</small>
                  </div>
                </div>
                <div>
                  <h5>earth quote</h5>
                  <div>
                    <SlCalender id="footer-icon" />
                    <small>APRIL 17, 2022</small>
                  </div>
                </div>
                <div>
                  <h5>happy earth day</h5>
                  <div>
                    <SlCalender id="footer-icon" />
                    <small>APRIL 23, 2024</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <small>
          Copyright &copy; {getCurrentYear} Environment. All rights reserved.{" "}
        </small>
      </div>
    </div>
  );
};

export default Footer;
