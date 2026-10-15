import React, { createContext, useReducer, useMemo } from 'react';
import { cartReducer } from './cartReducer';

export const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const total = state.items.reduce((sum, d) => sum + d.price, 0);

  const contextValue = useMemo(() => ({
    items: state.items,
    total,
    dispatch
  }), [state.items, total]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}
