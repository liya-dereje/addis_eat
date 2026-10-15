import React from 'react';
import { useCartStore } from './cartStore';

export default function CartBadge() {
  const count = useCartStore((s) => s.items.length);

  return <span className="badge">{count}</span>;
}
