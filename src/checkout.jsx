import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from './cart/cartStore';

export default function Checkout() {
  const navigate = useNavigate();
  const total = useCartStore((s) => s.items.reduce((sum, d) => sum + d.price, 0));
  const clear = useCartStore((s) => s.clear);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    clear();
    navigate('/receipt');
  };

  return (
    <div className="checkout-panel">
      <h3>Order Summary</h3>
      <p>Total Due: {total} ETB</p>
      <form onSubmit={handleOrderSubmit}>
        <button type="submit">Confirm Order</button>
      </form>
    </div>
  );
}
