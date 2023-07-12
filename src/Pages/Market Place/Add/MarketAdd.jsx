import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectName } from "../../../Redux/Features/Auth/authSlice";
import { toast } from "react-toastify";

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
    let mData = [];
    e.preventDefault();
    setIsLoading(true);
    // localStorage.removeItem("marketData");
    let currData = JSON.parse(localStorage.getItem("marketData"));
    if (currData) {
      await mData.push(formData);
      mData.push(currData);
      await localStorage.setItem("marketData", JSON.stringify(mData));
    } else {
      mData.push(formData);
      localStorage.setItem("marketData", JSON.stringify(mData));
    }
    setTimeout(() => {
      toast.success("Posted Successfully");
      setIsLoading(false);
      setMarketAddOpen(false);
    }, 3000);
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
        <input
          type="title"
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={handleChange}
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
