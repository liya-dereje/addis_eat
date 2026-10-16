import { NextResponse } from 'next/server';

export async function GET() {
  const sampleDishes = [
    { id: 'kitfo', name: 'Traditional Kitfo', price: 450 },
    { id: 'shiro', name: 'Special Shiro', price: 220 }
  ];

  return NextResponse.json(sampleDishes, { status: 200 });
}
