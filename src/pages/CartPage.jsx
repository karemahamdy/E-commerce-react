import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementItem,
  decrementItem,
} from '../redux/cartSlice';


import CartEmptyMessage from '../ui/CartEmptyMessage';
import '../styles/CartPage.scss';
import CartItem from '../ui/CartItem';
import CartSummary from '../ui/CartSummary';

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
    return <CartEmptyMessage />;
  }

  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemoveItem}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          ))}
        </div>
        <CartSummary total={total} />
      </div>
    </div>
  );
}

export default CartPage;
