import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQty }) => {
  const items = Object.values(cart);

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.product.price,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Your Cart</h1>
          <Link to="/" className="back-link">
            ← Back to Products
          </Link>
        </div>

        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          <>
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="cart-item">
                <div className="cart-info">
                  <p className="cart-title">{product.title}</p>
                  <p className="cart-price">₹ {product.price}</p>
                </div>

                <div className="cart-actions">
                  <button
                    onClick={() => updateQty(product.id, quantity - 1)}
                  >
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

            <div className="cart-summary">
              <p><b>Total Items:</b> {totalItems}</p>
              <p><b>Total Price:</b> ₹ {totalPrice.toFixed(2)}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
