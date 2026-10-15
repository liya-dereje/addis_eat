import React, { useState, useMemo, useContext } from 'react';
import { useFetch } from './hooks/useFetch';
import { CartContext } from './cart/CartContext';
import CategoryBar from './CategoryBar';
import DishList from './DishList';

export default function Menu() {
  const [category, setCategory] = useState("All");
  const { data, loading, error } = useFetch(`/api/dishes?c=${category}`);
  const { dispatch } = useContext(CartContext);

  const shown = useMemo(() => {
    return (data ?? []).sort((a, b) => a.price - b.price);
  }, [data]);

  const handleAddItem = (dish) => {
    dispatch({ type: "add", dish });
  };

  if (loading) return <p>Loading system menu...</p>;
  if (error) return <p>Error rendering menu dashboard.</p>;

  return (
    <div className="menu-hub">
      <CategoryBar selected={category} onSelect={setCategory} />
      <DishList dishes={shown} onAdd={handleAddItem} />
    </div>
  );
}
