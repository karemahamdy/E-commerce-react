import Button from "../components/Button";


export default function CartSummary({ total }) {

  return (
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
      <Button className="btn btn-primary">Proceed to Checkout</Button>
      
    </div>
  )
}
