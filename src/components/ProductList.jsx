import { memo } from "react";
import ProductCard from "./ProductCard";

const ProductList = memo(({ products, addToCart }) => {
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
});

export default ProductList;
