"use client";

import React, { useState } from 'react';

export default function CategoryBar() {
  const [active, setActive] = useState("All");
  const categories = ["All Dishes", "Traditional", "Vegan"];

  return (
    <div className="flex gap-2 bg-gray-100 p-2 rounded-lg w-fit">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
            active === cat
              ? "bg-white text-red-600 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
