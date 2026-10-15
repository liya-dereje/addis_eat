import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useCartStore } from '../cart/cartStore';

export default function Checkout() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      area: "Bole",
      notes: ""
    }
  });

  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clear);
  const cartTotal = useMemo(() => items.reduce((sum, d) => sum + d.price, 0), [items]);

  const onFormSubmit = async (data) => {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, items, total: cartTotal })
      });

      if (!res.ok) {
        throw new Error("Server submission failed.");
      }

      clearCart();
      alert("Order processed successfully!");
    } catch (err) {
      alert(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Complete Your Order</h2>
      
      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && <p id="name-error" role="alert">{errors.name.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">TeleBirr number</label>
          <input
            id="phone"
            type="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone", {
              required: "Please enter your phone number",
              pattern: {
                value: /^(?:\+251|0)9\d{8}\$/,
                message: "Use 09... or +2519..."
              }
            })}
          />
          {errors.phone && <p id="phone-error" role="alert">{errors.phone.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="area">Delivery Area</label>
          <select id="area" {...register("area")}>
            <option value="Bole">Bole</option>
            <option value="Kazanchis">Kazanchis</option>
            <option value="Megenagna">Megenagna</option>
            <option value="Piassa">Piassa</option>
          </select>
        </div>

        <div className="form-field">
          <label htmlFor="notes">Notes (Optional)</label>
          <textarea
            id="notes"
            maxLength={200}
            {...register("notes", {
              maxLength: { value: 200, message: "Notes cannot exceed 200 characters" }
            })}
          />
          {errors.notes && <p role="alert">{errors.notes.message}</p>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending your order..." : `Order - ${cartTotal} ETB`}
        </button>
      </form>
    </div>
  );
}
