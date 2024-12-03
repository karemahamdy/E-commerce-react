import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import './App.scss';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Footer from './ui/Footer';
import { fetchProducts } from './redux/productSlice';
import HomePage from './pages/HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <main className="flex-grow">
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