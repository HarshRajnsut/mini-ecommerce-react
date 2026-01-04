import { useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Cart from "./components/Cart";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
       
        const withStock = data.map(p => ({
          ...p,
          stock: Math.floor(Math.random() * 5) + 1
        }));
        setProducts(withStock.slice(0, 20));
      });
  }, []);

  
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category !== "all") {
      result = result.filter(p => p.category === category);
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, sort]);

  // Add to cart
  const addToCart = (product) => {
    setCart(prev => {
      const currentQty = prev[product.id]?.quantity || 0;

      
      if (currentQty >= product.stock) return prev;

      return {
        ...prev,
        [product.id]: {
          product,
          quantity: currentQty + 1
        }
      };
    });
  };

  
  const updateQty = (id, qty) => {
    if (qty < 0) return;

    setCart(prev => {
      if (qty === 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }

      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: qty
        }
      };
    });
  };

  return (
    <div className="container">
      <h1>Mini E-Commerce</h1>

      <Filters
        products={products}
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />

      {filteredProducts.length === 0 ? (
        <p>No products found</p>
      ) : (
        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />
      )}

      <Cart cart={cart} updateQty={updateQty} />
    </div>
  );
}

export default App;
