import React from 'react';
import Link from 'next/link';
import CategoryBar from './categorybar';

export const revalidate = 3600;

export const metadata = {
  title: "Traditional Menu",
  description: "Explore authentic Ethiopian dishes ready for delivery across Addis Ababa.",
  alternates: {
    canonical: "/menu",
  },
};

export default function MenuPage() {
  const sampleDishes = [
    { id: 'kitfo', name: 'Traditional Kitfo' },
    { id: 'shiro', name: 'Special Shiro' }
  ];

  return (
    <main className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Addis Eats Menu Hub</h2>
      
      <CategoryBar />

      <ul className="space-y-2 mt-4">
        {sampleDishes.map((dish) => (
          <li key={dish.id} className="border p-4 rounded shadow-sm flex justify-between items-center bg-white">
            <span className="font-medium text-gray-900">{dish.name}</span>
            <Link href={`/menu/${dish.id}`} className="text-blue-500 underline text-sm hover:text-blue-600">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
