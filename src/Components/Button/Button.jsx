import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "./button.css";

const Button = ({ text }) => {
  return (
    <div>
      <button className="main-btn-component">
        {text} <BsFillArrowRightCircleFill />
      </button>
    </div>
  );
};

export default Button;
