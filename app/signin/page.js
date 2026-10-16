"use client";

import React, { use, useActionState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextTarget = searchParams.get("next") ?? "/menu";

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const roleChoice = formData.get("roleSelection");

    const targetToken = roleChoice === "staff" ? "valid-staff-token" : "valid-customer-token";
    document.cookie = `session=${targetToken}; path=/; max-age=604800; SameSite=Lax; Secure`;

    const safeDestination = nextTarget.startsWith("/") && !nextTarget.startsWith("//") ? nextTarget : "/menu";
    router.push(safeDestination);
  };

  return (
    <main className="p-8 max-w-sm mx-auto space-y-6 bg-white shadow border rounded-xl mt-20">
      <h2 className="text-xl font-bold text-gray-800 text-center">Addis Eats Portals</h2>
      <form onSubmit={handleLoginSubmit} className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label htmlFor="roleSelection" className="text-sm font-medium text-gray-700">Select Role Access Profile</label>
          <select id="roleSelection" name="roleSelection" className="border p-2.5 rounded-lg text-sm bg-gray-50 outline-none">
            <option value="customer">Customer Profile (Almaz)</option>
            <option value="staff">Kitchen Staff Profile (Chef Chala)</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white p-3 rounded-lg text-sm font-semibold shadow hover:bg-red-700 transition">
          Authorize Session Profile
        </button>
      </form>
    </main>
  );
}
