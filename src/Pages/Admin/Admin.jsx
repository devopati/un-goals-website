import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import EditModal from '../Market Place/Add/EditModal';
import Sidebar from './Component/Sidebar';
export default function Admin() {
    const [productsData, setProductsData] = useState(JSON.parse(localStorage.getItem("marketData")) || []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const updateProduct = (updatedProduct) => {
        // Find the index of the product to be updated
        const index = productsData.findIndex(product => product.id === updatedProduct.id);

        // Create a copy of the products array and update the specific product
        const updatedProducts = [...productsData];
        updatedProducts[index] = updatedProduct;

        // Update localStorage with the updated products data
        localStorage.setItem("marketData", JSON.stringify(updatedProducts));

        // Update state to reflect changes
        setProductsData(updatedProducts);
    };

    const deleteProduct = (productId) => {
        // Filter out the deleted product from the products array
        const updatedProducts = productsData.filter(product => product.id !== productId);

        // Update localStorage with the updated products data
        localStorage.setItem("marketData", JSON.stringify(updatedProducts));

        // Update state to reflect changes
        setProductsData(updatedProducts);
    };
    
    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <div className="admin_container">
            <Sidebar />
            <div style={{width: "85%", padding: "20px 20px"}}>
                <div className="topbar">
                    <input 
                        type="search"  
                        className="search_input" 
                    />
                    <Link to={"./"} >Logout</Link>
                </div>
                
                <Products_tab products={productsData} openModal={openModal} deleteProduct={deleteProduct} />
            </div>
            {isModalOpen && (
                <EditModal closeModal={() => setIsModalOpen(false)} product={selectedProduct} updateProduct={updateProduct} />
            )}
        </div>
    )
}

const Products_tab = ({ products, openModal, deleteProduct }) => {
    return (
        <div className='content_area'> 
            <table className='product_table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td className='productName'>{product.price}</td>
                            <td className='productDescription'>{product.description}</td>
                            <td style={{display: "flex", justifyContent: "center", gap: "30px"}}>
                                <button className='edit_btn' onClick={() => openModal(product)}>EDIT</button>
                                <button className='delete_btn' onClick={() => deleteProduct(product.id)}>DELETE</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
