import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';

export default function DishDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: dish, loading, error } = useFetch(`/api/dishes/${id}`);

  if (loading) return <p>Loading dish profile details...</p>;
  if (error) return <p>Error compiling item configurations.</p>;
  if (!dish) return <p>No dish configuration matching target path identifier.</p>;

  return (
    <div className="dish-profile">
      <button onClick={() => navigate(-1)}>Back</button>
      <h2>{dish.name}</h2>
      <p>{dish.description}</p>
      <span>{dish.price} ETB</span>
    </div>
  );
}
