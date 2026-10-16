import Link from 'next/link';
import { notFound } from 'next/navigation';

const staticDishesDb = {
  kitfo: { name: "Traditional Kitfo", price: "450", summary: "Fresh minced prime beef seasoned with mitmita and niter kibbeh." },
  shiro: { name: "Special Shiro", price: "220", summary: "Slow-simmered chickpea powder stew blended with local clarified butter." }
};

export async function generateStaticParams() {
  return [
    { id: 'kitfo' },
    { id: 'shiro' }
  ];
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const dish = staticDishesDb[id];

  if (!dish) return { title: "Dish Not Found" };

  return {
    title: dish.name,
    description: `${dish.name} - ${dish.price} ETB. ${dish.summary}`,
  };
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;
  const dish = staticDishesDb[id];

  if (!dish) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "name": dish.name,
    "description": dish.summary,
    "offers": {
      "@type": "Offer",
      "price": dish.price,
      "priceCurrency": "ETB"
    }
  };

  return (
    <main className="p-8 space-y-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/menu" className="text-sm text-gray-500 hover:underline">← Back to Hub</Link>
      <h2 className="text-2xl font-bold capitalize">{dish.name}</h2>
      <p className="text-lg font-semibold text-red-600">{dish.price} ETB</p>
      <p className="text-gray-700 max-w-md">{dish.summary}</p>
    </main>
  );
}
