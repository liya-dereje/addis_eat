import React, { useState, useEffect, useRef } from 'react';
import { loadDishes } from './api';
import CategoryBar from './CategoryBar';
import DishList from './DishList';

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    
    async function fetchMenuData() {
      try {
        setLoading(true);
        setError(null);
        
        const data = await loadDishes(category, controller.signal);
        setDishes(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "An unexpected error occurred.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMenuData();

    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <div className="menu-wrapper">
      <h2>Addis Eats Menu Hub</h2>

      <div className="search-section">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search menu items..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <CategoryBar selected={category} onSelect={setCategory} />

      {loading && <p className="loading-spinner">Loading Addis Eats menu details...</p>}
      {error && <p className="error-message"> Error: {error}</p>}
      
      {!loading && !error && (
        <DishList dishes={dishes} filterText={searchQuery} />
      )}
    </div>
  );
}
