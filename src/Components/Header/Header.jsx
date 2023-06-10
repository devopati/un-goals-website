import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/images/un-logo.png";
const Header = ({ configHead }) => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="header-container">
      <div className="header-top-socials">
        <FaFacebookF id="socials" />
        <FaTwitter id="socials" />
        <FaInstagram id="socials" />
        <FaLinkedin id="socials" />
        <FaYoutube id="socials" />
      </div>
      <div className={`header-menu-container ${configHead}`}>
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className={`header-menu-items ${menuActive && "menu-active"}`}>
          <div
            className="menu-items-head small-menu"
            onClick={() => setMenuActive(false)}
          >
            <VscChromeClose />
          </div>
          <Link>
            <li>home</li>
          </Link>
          <Link>
            <li>blog</li>
          </Link>
          <Link>
            <li>map</li>
          </Link>
          <Link>
            <li>about</li>
          </Link>
        </div>
        <div className="small-menu" onClick={() => setMenuActive(!menuActive)}>
          {menuActive ? <VscChromeClose /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>
    </div>
  );
};

export default Header;
