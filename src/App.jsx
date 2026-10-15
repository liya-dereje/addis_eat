import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import menu from './menu';
import dishDetail from './dishDetail';
import cart from './cart';
import checkout from './checkout/checkout';
import NotFound from './NotFound';
import requireAuth from './auth/requireAuth';
import { cartProvider } from './cart/cartProvider';

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="menu/:id" element={<DishDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={
              <RequireAuth>
                <Checkout />
              </RequireAuth>
            } />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
