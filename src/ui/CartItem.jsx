import Button from "../components/Button";

export default function CartItem({ item, onRemove, onIncrement, onDecrement }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <Button
          className="btn btn-outline"
          onClick={() => onDecrement(item)}
          disabled={item.quantity <= 1}
        >
          -
        </Button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <Button
          className="btn btn-outline"
          onClick={() => onIncrement(item)}
        >
          +
        </Button>
        <Button
          className="btn btn-danger"
          onClick={() => onRemove(item)}
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

