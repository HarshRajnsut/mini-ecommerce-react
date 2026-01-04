const Cart = ({ cart, updateQty }) => {
  const items = Object.values(cart);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  if (items.length === 0) {
    return <p><b>Cart is empty</b></p>;
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {items.map(({ product, quantity }) => (
        <div key={product.id} className="cart-item">
          <div className="cart-info">
            <p className="cart-title">{product.title}</p>
            <p>₹ {product.price}</p>
          </div>

          <div className="cart-actions">
            <button onClick={() => updateQty(product.id, quantity - 1)}>
              −
            </button>

            <span>{quantity}</span>

            <button
              onClick={() => updateQty(product.id, quantity + 1)}
              disabled={quantity >= product.stock}
            >
              +
            </button>

            <button
              className="remove-btn"
              onClick={() => updateQty(product.id, 0)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <hr />

      <p><b>Total Items:</b> {totalItems}</p>
      <p><b>Total Price:</b> ₹ {totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
