import Link from 'next/link';

export default function DishDetailPage({ params }) {
  const { id } = params;

  return (
    <main className="p-8 space-y-4">
      <Link href="/menu" className="text-sm text-gray-500 hover:underline">← Back to Hub</Link>
      <h2 className="text-2xl font-bold capitalize">Dish Profile: {id}</h2>
      <p className="text-gray-700">Assembling authentic, fresh recipe profile datasets matching your selection.</p>
    </main>
  );
}
