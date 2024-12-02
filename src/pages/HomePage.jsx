
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import '../styles/HomePage.css';

function HomePage() {
  const { items: products, loading, error } = useSelector((state) => state.products);

  if (loading) {
    return <div className="homepage-container">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="homepage-container homepage-error">
        Error loading products: {error}
      </div>
    );
  }

  return (
    <div className="homepage-container">
      <h1 className="homepage-heading">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;