export async function loadDishes(category, signal) {
  const url = category === "All" 
    ? "/api/dishes" 
    : `/api/dishes?category=${encodeURIComponent(category)}`;

  const res = await fetch(url, { signal });

  if (!res.ok) {
    throw new Error("Could not load the menu from server properly.");
  }

  return await res.json();
}
