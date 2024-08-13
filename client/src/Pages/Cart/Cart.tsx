import React, { useState } from 'react';
import './Cart.css';

export default function Cart() {
    const [cart, setCart] = useState([{ name: 'Shirt', price: 1000, quantity: 1 }, { name: 'Pant', price: 2000, quantity: 1 }]);

    const handleQuantityChange = (index, delta) => {
        const newCart = [...cart];
        newCart[index].quantity += delta;
        if (newCart[index].quantity === 0) {
            newCart.splice(index, 1);
        }
        setCart(newCart);
    };

    return (
        <div>
            <div className="Cart">
                <div className="CartItems">
                    <div className="CartTitle">Cart</div>
                    <div className='amount'>
                        <div className='CartTotal'>
                            <div className="CartTotalTitle">Quantity: </div>
                            <div className="CartTotalAmount">
                                {cart.reduce((acc) => acc + 1, 0)}
                            </div>
                        </div>
                        <div className="CartTotal">
                            <div className="CartTotalTitle">Total: </div>
                            <div className="CartTotalAmount">
                                {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                            </div>
                        </div>
                    </div>
                    <div className="Cartline"></div>
                    <div className="CartItemsHeader">
                        <div className="CartItemsHeaderTitle">Items</div>
                        <div className="CartItemsHeaderTitle">Price</div>
                        <div className="CartItemsHeaderTitle">Quantity</div>
                        <div className="CartItemsHeaderTitle">Total</div>
                    </div>
                    {cart.map((item, index) => (
                        <div className="CartItem" key={index}>
                            <div className="CartItemTitle">
                                <span><img src='sell1.webp' style={{height:"80px"}}></img></span>
                                <span  style={{fontSize:"20px"}}>{item.name}</span>
                            </div>
                            <div className="CartItemPrice">{item.price}</div>
                            <div className="CartItemQuantity">
                                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                                {item.quantity}
                                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                            </div>
                            <div className="CartItemTotal">{item.price * item.quantity}</div>
                        </div>
                    ))}
                    <div className='checkOut'>
                        Check Out
                    </div>
                </div>
            </div>
        </div>
    );
}

