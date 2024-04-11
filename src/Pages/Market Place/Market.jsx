import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MarketCard from "../../Components/Market Card/MarketCard";
import "./market.css";
import { marketData } from "../../Data/marketData";
import { BsFilter } from "react-icons/bs";
import { MdOutlineAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import MarketAdd from "./Add/MarketAdd";

const Market = () => {
    const [marketAddOpen, setMarketAddOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    // Load cart items from local storage on component mount
    useEffect(() => {
      const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(storedCartItems);
    }, []);

    let storageData = JSON.parse(localStorage.getItem("marketData"));

    const addToCart = (item) => {
      const updatedCartItems = [...cartItems, item];
      setCartItems(updatedCartItems);
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };
  
    // console.log(storageData);
    let data = [];
    if (storageData) {
      data.push(...storageData);
      // data.push(...marketData, ...storageData);
    } else {
      data.push(...marketData);
    }
    // console.log(data);
    return (
      <>
        <Header />
        <div className="market-container">
          <div className="market-top">
            <Link onClick={() => setMarketAddOpen(true)}>
              <div className="add-to-market">
                <MdOutlineAddCircle id="amicon" />
                <span>Add to Market</span>
              </div>
            </Link>
            <div className="filter">
              <BsFilter id="amicon"/> <span>Filter</span>
            </div>
          </div>
          <div className="market-cards">
            {data.map((data) => {
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
                    onPurchase={() => addToCart(data)}
                  />
                </div>
              );
            })}
          </div>
          <div className={`market-mode ${!marketAddOpen && "market-none"}`}>
            <MarketAdd
              setMarketAddOpen={setMarketAddOpen}
              marketAddOpen={marketAddOpen}
            />
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Market;
