import React, { useState } from 'react';

const EditModal = ({ product, closeModal, updateProduct }) => {
    const [editedProduct, setEditedProduct] = useState(product);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleSubmit = () => {
        updateProduct(editedProduct);
        closeModal();
        window.location.reload();
    };

    return (
        <div className="edit-modal-overlay">
            <div className="edit-modal">
                <h2>Edit Product</h2>
                <label htmlFor="productName">Product Name:</label>
                <input
                    type="text"
                    name="title"
                    value={editedProduct.title}
                    onChange={handleChange}
                />
                <label htmlFor="productPrice">Product Price:</label>
                <input
                    type="text"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleChange}
                />
                <label htmlFor="productDescription">Product Description:</label>
                <textarea
                    name="description"
                    value={editedProduct.description}
                    onChange={handleChange}
                />
                <textarea
                    name="image_path"
                    value={editedProduct.image}
                    onChange={handleChange}
                    row={10}
                />  
                <div className="modal-buttons">
                    <button onClick={handleSubmit}>Save</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
