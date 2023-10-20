import React, { useContext, useState, useEffect, SyntheticEvent } from 'react';
import { CartContext } from '../context/cart';
import { createOrder } from '../api/routes';

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

interface OrderItem {
    id: number;
    quantity:number;
}

export default function Cart() {
  const context = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [username, setUsername] = useState<string>('fuckmylife');

  if (!context) {
    throw new Error('cartItems must be used within a CartProvider');
  }

  const { cartItems, removeFromCart, clearCart, getTotal } = context;

  const handleRemoveFromCart = (item: Item) => {
    removeFromCart(item);
  };

  const handleCheckout = async (evt: SyntheticEvent) => {
    evt.preventDefault();
    try {
      const order_items = cartItems.map((item) => ({
        item: item.id, // Use "item" instead of "id" as expected by the server
        quantity: item.quantity,
      }));
  
      const requestData = {
        username,
        order_items,
      };
  
      const response = await createOrder(requestData);
      console.log(response);
  
      clearCart();
    } catch (err) {
      console.error(err);
    }
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
        </div>
        <div className='cart-checkout-container'>
          <p className='cart-order-details'>ORDER DETAILS</p>
          <div className='cart-checkout-price-container'>
            <div>Total:</div>
            <div>${totalPrice}</div>
          </div>
          <button className='cart-checkout-button' onClick={handleCheckout}>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}
