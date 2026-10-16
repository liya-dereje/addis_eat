import React from 'react';

export default function MenuLayout({ children }) {
  return (
    <div className="flex p-6 gap-6">
      <aside className="w-1/4 bg-white p-4 rounded-lg shadow-sm h-fit space-y-2 border">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Categories</h3>
        <button className="w-full text-left px-3 py-2 rounded bg-amber-100 text-amber-800 font-medium">All Dishes</button>
        <button className="w-full text-left px-3 py-2 rounded text-gray-600 hover:bg-gray-50">Traditional</button>
        <button className="w-full text-left px-3 py-2 rounded text-gray-600 hover:bg-gray-50">Vegan</button>
      </aside>

      <section className="w-3/4 bg-white p-4 rounded-lg shadow-sm border">
        {children}
      </section>
    </div>
  );
}
