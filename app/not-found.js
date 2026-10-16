import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="p-12 text-center space-y-4">
      <h2 className="text-3xl font-bold text-gray-800">404 - Item Not Found</h2>
      <p className="text-gray-600">The selection path or menu page segment you are looking for does not exist.</p>
      <Link href="/menu" className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
        Return to Menu Hub
      </Link>
    </main>
  );
}
