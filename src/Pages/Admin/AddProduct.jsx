import React, { useState } from 'react';
import Sidebar from './Component/Sidebar';
import { Link } from 'react-router-dom';

export const AddProduct = () => {
    const [productData, setProductData] = useState({
        title: '',
        description: '',
        price: '',
        image: ''
    });
    const [imageUrl, setImageUrl] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value
        });
        
        // Update imageUrl state when image input changes
        if (name === 'image') {
            setImageUrl(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get existing products from localStorage or initialize an empty array
        const existingProducts = JSON.parse(localStorage.getItem("marketData")) || [];

        // Append the new product to the existing products array
        const newProduct = {
            id: Date.now(), // Generate a unique ID for the product
            ...productData
        };
        const updatedProducts = [...existingProducts, newProduct];

        // Update localStorage with the updated products data
        localStorage.setItem("marketData", JSON.stringify(updatedProducts));

        // Clear the form fields after submission
        setProductData({
            title: '',
            description: '',
            price: '',
            image: ''
        });
        // Clear the image URL display
        setImageUrl('');
    };

    return (
        <div className="admin_container">
            <Sidebar />
            <div style={{ width: "85%", padding: "20px 20px" }}>
                <div className="topbar">
                    <input
                        type="search"
                        className="search_input"
                    />
                    <Link to={"./"} >Logout</Link>
                </div>

                <div className='add_product_container'>
                    <div className="add_product_form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="title">Product Title:</label>
                                <input
                                    id="title"
                                    className="product_title"
                                    placeholder='Product Title'
                                    name="title"
                                    value={productData.title}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="description">Product Description:</label>
                                <input
                                    id="description"
                                    className="product_description"
                                    placeholder='Product Description'
                                    name="description"
                                    value={productData.description}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="price">Product Price:</label>
                                <input
                                    id="price"
                                    className="product_price"
                                    placeholder='Product Price'
                                    name="price"
                                    value={productData.price}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="image">Product Image URL:</label>
                                <input
                                    id="image"
                                    type="text"
                                    className="product_image"
                                    name="image"
                                    value={productData.image}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='' style={{ height: "300px", width: "500px", border: "1px solid gray", margin: "20px 0", backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            </div>
                            <div>
                                <input
                                    type="submit"
                                    value="Add Product"
                                    style={{ backgroundColor: "darkblue", color: "white" }}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
