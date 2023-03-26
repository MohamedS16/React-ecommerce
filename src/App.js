import './App.css';
import {Routes,Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/Shop';
import { Cart } from './pages/Cart';
import { Product } from './pages/Product';
import React from 'react';
import { CartContextProvider } from './components/CartContext';

function App() {
  return (
    <>
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
      </CartContextProvider>
      {/* <ProductContext.Provider value='Mohamed'>
        <Cart />
      </ProductContext.Provider> */}
    </>
  );
}

export default App;
