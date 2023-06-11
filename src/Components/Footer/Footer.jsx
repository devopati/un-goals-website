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
              <h2>about</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                massa ligula, aliquet euismod eleifend vitae, interdum ut mi.
                Praesent fringilla pharetra sapien sit amet semper. Nunc id
                massa ut mi tempus mattis ac eu lectus. or project.
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
                  <h5>595 Commonwealth Ave, Massachusetts 02215</h5>
                </div>
              </div>
              <div>
                <AiTwotonePhone id="footer-icon" />
                <h5>+1-202-555-0190</h5>
              </div>
              <div>
                <TfiEmail id="footer-icon" />
                <h5>email@example.com</h5>
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
