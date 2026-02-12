import { useContext } from "react";
import { CartContext } from "./CartContext";

function ProductList() {
  const { addToCart } = useContext(CartContext);

  const products = [
    { name: "Widget", price: 19.99 },
    { name: "Gadget", price: 29.99 },
  ];

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
