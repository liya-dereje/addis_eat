import react from 'react';
import Link from 'next/link';
import categorybar from './categorybar';
export const revalidate=3600;
export default function MenuPage() {
  const sampleDishes = [
    { id: 'kitfo', name: 'Traditional Kitfo' },
    { id: 'shiro', name: 'Special Shiro' }
  ];

  return (
    <main className="p-8 space-y-4">
      <h2 className="text-2xl font-bold">Addis Eats Menu Hub</h2>
      <categorybar />
      <ul className="space-y-2">
        {sampleDishes.map((dish) => (
          <li key={dish.id} className="border p-4 rounded shadow-sm flex justify-between items-center">
            <span>{dish.name}</span>
            <Link href={`/menu/${dish.id}`} className="text-blue-500 underline">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
