import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/ProductCard.scss'
import Button from '../components/Button';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">    
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </Link>    
      <div className="product-details">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-title">{product.title}</h3>
        </Link>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <div className="product-actions">      
        <Link to={`/product/${product.id}`} className="button button-outline">
          View Details
        </Link>
        <Button onClick={handleAddToCart} className="button button-primary">  Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;