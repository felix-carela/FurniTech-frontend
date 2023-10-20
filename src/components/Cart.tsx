import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cart';

interface Item {
  id: number;
  image: string;
  name: string;
  color: string;
  price: string;
  description: string;
  category: string;
  tags: string;
  quantity: number;
}

export default function Cart() {
  const context = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  if (!context) {
    throw new Error('cartItems must be used within a CartProvider');
  }

  const { cartItems, removeFromCart, getTotal } = context;

  const handleRemoveFromCart = (item: Item) => {
    removeFromCart(item);
  };

  useEffect(() => {
    const total = getTotal();
    setTotalPrice(total);
  }, [cartItems, getTotal]);

  return (
    <div>
      <div className="cart-items-container">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="cart-item-details">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-quantity">Quantity: {item.quantity}</p>
              <p className="cart-item-price">Price: ${item.price}</p>
            </div>
            <button
              className="remove-button"
              onClick={() => handleRemoveFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
        <div className='cart-separator'>
          <hr className='cart-separator-hr'></hr>
        </div>
        <div className='cart-checkout-container'>
          <p className='cart-order-details'>ORDER DETAILS</p>
          <div className='cart-checkout-price-container'>
            <div>Total:</div>
            <div>${totalPrice}</div>
          </div>
          <button className='cart-checkout-button'>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
