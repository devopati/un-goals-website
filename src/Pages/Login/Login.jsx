import React, { useState } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SET_LOGIN, SET_NAME } from "../../Redux/Features/Auth/authSlice";
import { loginUser } from "../../services/authService";
import { useDispatch } from "react-redux";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCurrentYear = new Date().getUTCFullYear();
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const [fielderr, setFielderr] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !email) {
      setFielderr(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        setFielderr(false);
      }, 4000);
      return;
    }
    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.user.name));
      navigate("/");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
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
            Can composting help reduce food waste?
            <div className="log-quiz">
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
        </div>
        <div className="reg-form-container log-in-container">
          <form onSubmit={handleSubmit} className="reg-form">
            <h1>Sign in form</h1>
            <small>{fielderr && "All fields are required"}</small>
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
            <div className="reg-sinin">
              <h4>
                Don't an account?{" "}
                <span>
                  <Link to="/register">Signup</Link>
                </span>
              </h4>
            </div>
            <div className="frm-btn">
              <button>{isLoading ? "Processing..." : "Sign in"}</button>
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

export default Login;
