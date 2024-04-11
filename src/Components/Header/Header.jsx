import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaShoppingCart
} from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import logo from "../../assets/images/un-logo.png";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_NAME,
  SET_LOGIN,
  selectIsloggedIn,
  selectName,
} from "../../Redux/Features/Auth/authSlice";
import { toast } from "react-toastify";
import Cart from "../Crat/Cart";

const Header = ({ configHead }) => {
  const defaultMarketData = [
      { id: 1, title: 'Product 1', price: 10, quantity: 2, image: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2023/06/chicken-manure-fertilizer.jpg" },
      { id: 2, title: 'Product 2', price: 20, quantity: 1, image: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2023/06/chicken-manure-fertilizer.jpg" },
      { id: 3, title: 'Product 3', price: 15, quantity: 3, image: "https://www.nature-and-garden.com/wp-content/uploads/sites/4/2023/06/chicken-manure-fertilizer.jpg" }
  ];

  const dispatch = useDispatch();

  const [menuActive, setMenuActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = window.innerHeight * 0.1;

      if (scrollPosition > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logoutUser = async () => {
    setMenuActive(false);
    dispatch(SET_LOGIN(false));
    await dispatch(REMOVE_NAME(""));
    toast.success("Logout Successfull");
  };

  const isLoagedIn = useSelector(selectIsloggedIn);
  const name = useSelector(selectName);
  return (
    <div className={`header-container `}>
      <div className="header-top-socials">
        <FaFacebookF id="socials" />
        <FaTwitter id="socials" />
        <FaInstagram id="socials" />
        <FaLinkedin id="socials" />
        <FaYoutube id="socials" />
        <FaShoppingCart id="socials" />
      </div>
      <div
        className={`header-menu-container ${configHead} ${
          isScrolled && "header-scrolled"
        }`}
      >
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
          <Link to="/" onClick={() => setMenuActive(false)}>
            <li>home</li>
          </Link>
          <Link to="/market" onClick={() => setMenuActive(false)}>
            <li>market</li>
          </Link>
          <Link to="/blog" onClick={() => setMenuActive(false)}>
            <li>blog</li>
          </Link>

          <Link to="/about" onClick={() => setMenuActive(false)}>
            <li>about</li>
          </Link>

          {isLoagedIn || name ? (
            <Link onClick={logoutUser}>
              <li onClick={() => setMenuActive(false)}>Logout</li>
            </Link>
          ) : (
            <div className="acc-btns">
              <Link to="/register">
                <button id="reg-btn">Register</button>
              </Link>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
          )}
        </div>
      <Cart marketData={defaultMarketData} />

        <div className="small-menu" onClick={() => setMenuActive(!menuActive)}>
          {menuActive ? <VscChromeClose /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>
    </div>
  );
};

export default Header;
