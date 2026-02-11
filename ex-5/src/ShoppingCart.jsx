import { useState } from "react";
import "./App.css";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    if (!name.trim() || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: parseFloat(price),
      quantity: 1,
    };

    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  const removeProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const changeQty = (id, amount) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? { ...p, quantity: Math.max(1, p.quantity + amount) }
          : p
      )
    );
  };

  const total = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  return (
    <div className="container">
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={addProduct}>Add to Cart</button>
      </div>

      <h2>Products in Cart</h2>

      {products.length === 0 && <p>The cart is empty.</p>}

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            • {p.name} - ${p.price.toFixed(2)}
            <div className="qty">
              Quantity:
              <button onClick={() => changeQty(p.id, -1)}>-</button>
              <span>{p.quantity}</span>
              <button onClick={() => changeQty(p.id, 1)}>+</button>
            </div>
            <button className="remove" onClick={() => removeProduct(p.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h3>Total Price: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
