import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';

import './App.css';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';

import Footer from './ui/Footer';
import Hero from './pages/Hero';
import { fetchProducts } from './redux/productSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;