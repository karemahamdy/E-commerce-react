


export default function CartItem({ item, onRemove, onIncrement, onDecrement }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3 className="cart-item-title">{item.title}</h3>
        <p className="cart-item-price">${item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-actions">
        <button
          onClick={() => onDecrement(item)}
          disabled={item.quantity <= 1}
          className="btn btn-outline"
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button
          onClick={() => onIncrement(item)}
          className="btn btn-outline"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item)}
          className="btn btn-danger"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

