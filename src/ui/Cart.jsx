import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart" className="header-link cart-link">
      <span className="cart-icon">🛒 Cart</span>
      <span className="cart-badge">{totalCartItems}</span>
    </Link>
  )
}
