import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/productSlice';
import { addToCart } from '../redux/cartSlice';
import '../styles/ProductDetailPage.scss'; 

function ProductDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.currentProduct);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product) {
    return <div className="product-detail-container">Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-grid">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-price">${product.price.toFixed(2)}</div>
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
        
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
