"use client";

import React, { useActionState } from 'react';
import { placeOrder } from '../actions';

export default function CheckoutPage() {
  const [state, formAction, isPending] = useActionState(placeOrder, null);

  return (
    <main className="p-8 max-w-md mx-auto space-y-6 bg-white shadow-sm border rounded-xl mt-10">
      <h2 className="text-2xl font-bold text-gray-800">Complete Your Delivery</h2>

      {state?.success && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200">
          🎉 Order processed successfully on the server!
        </div>
      )}

      {state?.error && !state?.success && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm font-medium border border-red-200">
          ❌ {state.error}
        </div>
      )}

      <form action={formAction} className="space-y-4" noValidate>
        <div className="flex flex-col space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className={`border p-2.5 rounded-lg text-sm focus:ring-2 outline-none ${
              state?.fieldErrors?.name ? 'border-red-400 focus:ring-red-200' : 'focus:ring-red-100'
            }`}
          />
          {state?.fieldErrors?.name && (
            <p className="text-xs text-red-600 font-medium mt-1">⚠️ {state.fieldErrors.name}</p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">TeleBirr Mobile Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="09..."
            className={`border p-2.5 rounded-lg text-sm focus:ring-2 outline-none ${
              state?.fieldErrors?.phone ? 'border-red-400 focus:ring-red-200' : 'focus:ring-red-100'
            }`}
          />
          {state?.fieldErrors?.phone && (
            <p className="text-xs text-red-600 font-medium mt-1">⚠️ {state.fieldErrors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-red-600 text-white p-3 rounded-lg text-sm font-semibold shadow-sm hover:bg-red-700 disabled:bg-gray-300 transition duration-150"
        >
          {isPending ? "Transacting securely..." : "Submit Order Request"}
        </button>
      </form>
    </main>
  );
}
