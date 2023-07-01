import React, { useState } from "react";
import "./register.css";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  conPassword: "",
};

const Register = () => {
  const getCurrentYear = new Date().getUTCFullYear();
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, conPassword } = formData;

  const [passerr, setPaserr] = useState(false);
  const [fielderr, setFielderr] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password || !conPassword || !email) {
      setFielderr(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setFielderr(false);
      }, 4000);
      return;
    }
    if (password !== conPassword) {
      if (fielderr) {
        setFielderr(false);
      }
      setPaserr(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setPaserr(false);
      }, 4000);
    }
    console.log(formData);
  };
  return (
    <>
      <div className="register-container">
        <div className="reg-side">
          <div className="reg-back-icon">
            <Link to="/">
              <BsArrowLeftCircle />
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1569622296640-38737c1d82de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className="reg-top">
            Is recycling important for the environment?
            <div className="log-quiz">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
        </div>
        <div className="reg-form-container">
          <form onSubmit={handleSubmit} className="reg-form">
            <h1>Signup form</h1>
            <small>{fielderr && "All fields are required"}</small>
            <small>{passerr && "Passwords do not match"}</small>
            <label htmlFor="name">Full name</label>
            <input
              type="text"
              placeholder="Full name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="@example.gmail.com"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <label htmlFor="conPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              name="conPassword"
              value={conPassword}
              onChange={handleInputChange}
            />
            <div className="reg-sinin">
              <h4>
                Have an account?{" "}
                <span>
                  <Link to="/login">Sign in</Link>
                </span>
              </h4>
            </div>
            <div className="frm-btn">
              <button>Signup</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer__copyright footer-reg">
        <small>
          Copyright &copy; {getCurrentYear} Environment. All rights reserved.{" "}
        </small>
      </div>
    </>
  );
};

export default Register;
