import { memo } from "react";

const ProductCard = memo(({ product, addToCart }) => {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <p>₹ {product.price}</p>
      <p>{product.category}</p>
      <p>Stock: {product.stock}</p>

      <button
        disabled={product.stock === 0}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;
