import React from 'react';
import "./Cart.css";
import { FaPlus, FaMinus } from 'react-icons/fa';
const Cart = ({ marketData }) => {
    // Calculate total amount
    const totalAmount = marketData.reduce((total, product) => total + (product.price * product.quantity), 0);
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {marketData.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {marketData.map(product => (
                        <>
                        <div className="cart-item" key={product.id}>
                            <img src={product.image} alt="item" width={220} style={{marginRight: "20px"}}/>
                            <div className="item-info">
                                <h2>{product.title}</h2>
                                <p>Price: ${product.price}</p>
                                <div style={{display: "flex", gap: "10px", margin: "30px 0"}} >
                                    <button style={{height: "30px", width: "30px"}}><FaPlus id='faplus' /> </button>
                                    <input type="text"
                                    value={product.quantity}
                                    style={{width: "50px", height: "30px", textAlign: "center"}}
                                    />
                                    <button><FaMinus id='faminus' /> </button>
                                </div>
                                <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                            </div>
                            <div className="item-total">
                            </div>
                        </div>
                        <hr />
                        </>
                    ))}
                    <div className="cart-total">
                        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;