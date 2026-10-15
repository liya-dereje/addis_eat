import React from 'react';

export default function CategoryBar({ selected, onSelect }) {
  const categories = ["All", "Main", "Vegan", "Grill"]; // Categories from presentation

  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <button
          key={cat}
          className={cat === selected ? "chip on" : "chip"} 
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
