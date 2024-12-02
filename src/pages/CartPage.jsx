
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from '../redux/cartSlice';
import '../styles/CartPage.css'; 

function CartPage() {
  const dispatch = useDispatch();
  const { items: cartItems, total } = useSelector((state) => state.cart);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleIncrement = (item) => {
    dispatch(incrementItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(decrementItem(item));
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2 className="cart-empty-heading">Your Cart is Empty</h2>
        <p className="cart-empty-text">Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-heading">Your Cart</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="cart-item-actions">
                <button
                  onClick={() => handleDecrement(item)}
                  disabled={item.quantity <= 1}
                  className="btn btn-outline"
                >
                  -
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button
                  onClick={() => handleIncrement(item)}
                  className="btn btn-outline"
                >
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h2 className="cart-summary-heading">Order Summary</h2>
          <div className="cart-summary-content">
            <div className="cart-summary-item">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="cart-summary-item">
              <span>Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="cart-summary-total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="btn btn-primary">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
