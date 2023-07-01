import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MarketCard from "../../Components/Market Card/MarketCard";
import "./market.css";
import { marketData } from "../../Data/marketData";

const Market = () => {
  return (
    <>
      <Header />
      <div className="market-container">
        <div className="market-top">{/* Market Place */}</div>
        <div className="market-cards">
          {marketData.map((data) => {
            return (
              <div className="mk-card">
                <MarketCard
                  name={data.name}
                  date={data.date}
                  time={data.time}
                  image={data.image}
                  likecount={data.likecount}
                  title={data.title}
                  description={data.description}
                  id={data.id}
                  price={data.price}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Market;
