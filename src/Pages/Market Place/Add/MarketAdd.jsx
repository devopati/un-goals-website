import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectName } from "../../../Redux/Features/Auth/authSlice";
import { toast } from "react-toastify";
import product_list from "./productData"; // Importing product_list from productData.js

const MarketAdd = ({ setMarketAddOpen }) => {
  const [isLoading, setIsLoading] = useState(false);

  const date = new Date();

  const userName = useSelector(selectName);
  const getName = () => {
    if (userName) {
      return userName;
    } else {
      return "";
    }
  };
  //   console.log(getName());

  const imgUrls = [
   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT14AAz48mkYxTWkglZGfCVlnMmMf3l-qUOIg&usqp=CAU",
    "https://c0.wallpaperflare.com/preview/521/810/544/compost-garbage-biological-waste.jpg",
    "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybSUyMHByb2R1Y2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1661876193320-7060e330c9b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFybSUyMHByb2R1Y2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhcm0lMjBwcm9kdWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://plus.unsplash.com/premium_photo-1678344169781-ae39c13554d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhcm0lMjBwcm9kdWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  ];

  const getDate = () => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleString("en-IN", options);
  };
  //   console.log(getDate());

  const getTime = () => {
    let hh = date.getHours();
    hh = ("0" + hh).slice(-2);

    let mm = date.getMinutes();
    mm = ("0" + mm).slice(-2);

    return hh + ":" + mm;
  };
  //   console.log(getTime());

  const getImage = () => {
    const index = Math.floor(Math.random() * imgUrls.length);
    return imgUrls[index];
  };
  //   console.log(getImage());

  const [formData, setFormData] = useState({
    id: `${getTime().toString()}_d888id-${date.getMilliseconds()}`,
    name: getName(),
    date: getDate(),
    time: getTime(),
    price: "",
    image: getImage(),
    likeCount: 1,
    title: "",
    description: "",
  });
  //   console.log(formData.id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
   
    // Retrieve existing data from localStorage
    let currData = JSON.parse(localStorage.getItem("marketData")) || [];
   
    // Append new data to the existing data
    currData.push(formData);
   
    // Store the updated data back into localStorage
    await localStorage.setItem("marketData", JSON.stringify(currData));
   
    setTimeout(() => {
       toast.success("Posted Successfully");
       setIsLoading(false);
       setMarketAddOpen(false);
    }, 3000);
   };

  const handleSelectProduct = (price, description, title) => {
    setFormData(prevState => ({
      ...prevState,
      price,
      description,
      title
   }));
y  
 };

  return (
    <div className="market-add-container">
      <div className="close-btnn" onClick={() => setMarketAddOpen(false)}>
        <MdArrowBack />
      </div>
      <div className="market-add-top">
        <h1>Fill the Fields to add To Market Place</h1>
      </div>
      <div className="marketadd-form">
        <label htmlFor="title">Title</label>
        <div className="option_card_container">
          {product_list.map((product, index) => (
            <Product_options key={product.product_name} product={product} onSelectProduct={handleSelectProduct} imgUrls={imgUrls[index]} />
          ))}
        </div>

        <input
            type="title"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={{display: 'none'}}
          />

        <div className="price">
          {" "}
          <label htmlFor="price">Price</label>
          <input
            type="price"
            placeholder="Enter price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            autoComplete={false}
          />
        </div>

        <label htmlFor="description">Description</label>
        <textarea
          type="description"
          placeholder="Enter description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <div>
          <button onClick={handleSubmit}>
            {isLoading ? "Processing..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketAdd;

const Product_options = ({ product, onSelectProduct, imgUrls }) => {
  return (
     <div onClick={() => onSelectProduct(product.price, product.description, product.product_name)} className="option_card">
       <div key={product.product_name} className="option_cards">
          <img src={imgUrls} alt="product" width={`100%`} height={`100px`} />
         <h2>Product Name: {product.product_name}</h2>
        
       </div>
     </div>
  );
 }; 