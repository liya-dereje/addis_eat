import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CategoryBar from './categorybar';

export const revalidate = 3600;

export default function MenuPage() {
  const sampleDishes = [
    { id: 'kitfo', name: 'Traditional Kitfo', img: '/dishes/kitfo.jpg', price: 450 },
    { id: 'shiro', name: 'Special Shiro', img: '/dishes/shiro.jpg', price: 220 }
  ];

  return (
    <main className="p-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Addis Eats Menu Hub</h2>
      
      <CategoryBar />

      <ul className="space-y-4 mt-4">
        {sampleDishes.map((dish) => (
          <li key={dish.id} className="border p-4 rounded-xl shadow-sm flex gap-4 items-center bg-white">
            <div className="relative w-24 h-24 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
              <Image 
                src={dish.img} 
                alt={`Fresh plate of ${dish.name}`}
                width={96}
                height={94}
                sizes="96px"
                className="object-cover"
              />
            </div>
            <div className="flex-grow">
              <span className="font-semibold block text-lg text-gray-900">{dish.name}</span>
              <span className="text-sm text-gray-500 block">{dish.price} ETB</span>
            </div>
            <Link href={`/menu/${dish.id}`} className="text-blue-500 hover:text-blue-600 font-medium text-sm underline">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
