import React, { useEffect, useState } from "react";
import { SlideData } from "../../Data/HomeSliderData";
import "./slider.css";
import Button from "../Button/Button";
const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrSlide((prevSlide) => (prevSlide + 1) % SlideData.length);
    }, 3500);
    return () => {
      clearInterval(timer);
    };
  }, [SlideData.length]);
  return (
    <div className="slider">
      {SlideData.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currSlide ? "active" : ""}`}
        >
          <img src={image.imgUrl} alt={image.caption} />
          <div className="caption">
            <div>
              <h1>{image.heading}</h1>
            </div>
            <div>
              <small>{image.caption}</small>
            </div>
            <div className="slider-btns">
              <Button text={"Discover"} />
              <Button text={"Learn more"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
