import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-bold text-red-600">Welcome to Addis Eats</h1>
      <p className="text-gray-600">Discover today's hot traditional specials.</p>
      <Link href="/menu" className="inline-block bg-amber-500 text-white px-4 py-2 rounded">
        Browse Our Menu
      </Link>
    </main>
  );
}
