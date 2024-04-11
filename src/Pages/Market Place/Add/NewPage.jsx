import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import product_list from "./productData";

const NewPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    product_name: "",
    price: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProductList = [...product_list, formData];
    // Here you can update your state or local storage with updatedProductList

    // For demonstration, I'm just logging it here
    console.log(updatedProductList);
    navigate("/market")
    // Redirect back to the main page after submission
  };

  return (
    <div>
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product_name">Product Name:</label>
        <input
          type="text"
          name="product_name"
          value={formData.product_name}
          onChange={handleChange}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPage;
