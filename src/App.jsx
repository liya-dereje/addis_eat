import React,{lazy,Suspense} from 'react';
import errorBoundary from './errorBoundary';
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

const checkout =lazy(()=>import('./checkout/checkout'));
const recipt =lazy(()=>import('./orders/receipt'))

export default function App() {
  return (
    <cartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<menu />} />
            <Route path="menu/:id" element={<dishDetail />} />
            <Route path="cart" element={<cart />} />
            <Route path="checkout" element={
              <requireAuth>
                <checkout />
              </requireAuth>
            } />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </cartProvider>
  );
}
