import React from 'react';
import { redirect } from 'next/navigation';
import { getSession } from '../../lib/session';

export default async function KitchenDashboardPage() {
  const user = await getSession();

  if (!user) {
    redirect("/signin?next=/kitchen");
  }

  if (user.role !== "staff") {
    throw new Error("403 Unauthorized: Kitchen permissions required.");
  }

  return (
    <main className="p-8 space-y-4 bg-amber-50 min-h-screen">
      <h2 className="text-2xl font-bold text-amber-900">Active Kitchen Orders Terminal</h2>
      <p className="text-gray-700">Authenticated Staff Session Verified: Welcome back, {user.name}.</p>
    </main>
  );
}
