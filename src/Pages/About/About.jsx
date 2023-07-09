import React from "react";
import "./about.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import img11 from "../../assets/images/img11.jpg";
import img10 from "../../assets/images/img10.jpg";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-top">
          <div className="about-top-card">
            <h1>Who We Are</h1>
          </div>
          <div className="about-top-card">
            <p>
              Garbage Dump Communities are, most simply put, the communities
              that rely on the world’s garbage dumps to survive by either
              working or living within them. The families that we work with
              specifically make their living as “recyclers” or “pickers”,
              combing through the garbage by hand and finding items to sell or
              keep. Those who live here have to be incredibly resilient because
              this way of life does not pay well: nearly all garbage dump
              community members live on less than $2 a day, putting them below
              the United Nation’s line for extreme poverty. Living in garbage
              dump communities also has extreme adverse effects on both physical
              and mental health, combined with extremely high barriers to access
              to healthcare, education, proper food and shelter, and employment
              opportunities outside the garbage dump.
            </p>
          </div>
        </div>
        <div className="about-top-image">
          <img src={img11} alt="image" />
        </div>
        <div className="about-top about-bottom-cards">
          <div className="about-top-card about-card-bottom2">
            <h1>What we do</h1>
            <p>
              Garbage Dump Communities are, most simply put, the communities
              that rely on the world’s garbage dumps to survive by either
              working or living within them. The families that we work with
              specifically make their living as “recyclers” or “pickers”,
              combing through the garbage by hand and finding items to sell or
              keep. Those who live here have to be incredibly resilient because
              this way of life does not pay well: nearly all garbage dump
              community members live on less than $2 a day, putting them below
              the United Nation’s line for extreme poverty. Living in garbage
              dump communities also has extreme adverse effects on both physical
              and mental health, combined with extremely high barriers to access
              to healthcare, education, proper food and shelter, and employment
              opportunities outside the garbage dump.
            </p>
            <h1>Our Plans</h1>
            <p>
              Garbage Dump Communities are, most simply put, the communities
              that rely on the world’s garbage dumps to survive by either
              working or living within them. The families that we work with
              specifically make their living as “recyclers” or “pickers”,
              combing through the garbage by hand and finding items to sell or
              keep. Those who live here have to be incredibly resilient because
              this way of life does not pay well: nearly all garbage dump
              community members live on less than $2 a day, putting them below
              the United Nation’s line for extreme poverty. Living in garbage
              dump communities also has extreme adverse effects on both physical
              and mental health, combined with extremely high barriers to access
              to healthcare, education, proper food and shelter, and employment
              opportunities outside the garbage dump.
            </p>
          </div>
          <div className="about-top-card">
            <img src={img10} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
