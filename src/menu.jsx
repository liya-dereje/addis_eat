import React, { useState } from 'react';
import { dishesData } from './data'; // Assumes item configurations exist here
import CategoryBar from './CategoryBar';
import OrderForm from './OrderForm';

export default function Menu() {
  // Lifted States
  const [category, setCategory] = useState("All");
  const [orderTotal, setOrderTotal] = useState(0);

  // Derive the active list from category state dynamically (No separate state variable needed!)
  const shownDishes = category === "All"
    ? dishesData
    : dishesData.filter(d => d.category === category);

  // Callback helper fired from individual nested dishes
  function handleAddToOrder(price) {
    setOrderTotal(prevTotal => prevTotal + price);
  }

  return (
    <div className="menu-container">
      <h1>Addis Eats Menu</h1>
      
      {/* Category selection */}
      <CategoryBar selected={category} onSelect={setCategory} />

      {/* Running Subtotal Header */}
      <div className="total-banner">
        <h3>Running Total: {orderTotal} ETB</h3>
      </div>

      {/* Dishes Render Grid */}
      <div className="dish-list">
        {shownDishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <h4>{dish.name} {dish.spicy ? '🔥' : ''}</h4>
            <p>{dish.price} ETB</p>
            <button onClick={() => handleAddToOrder(dish.price)}>
              Add to Order
            </button>
          </div>
        ))}
      </div>

      {/* Delivery Check-out section */}
      <hr />
      <h3>Delivery Details</h3>
      <OrderForm />
    </div>
  );
}
