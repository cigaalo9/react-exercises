import { useContext } from "react";
import { CartContext } from "./CartContext";

function CartSummary() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cart.length}</p>

      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
            <button
              onClick={() => removeFromCart(index)}
              style={{ marginLeft: "10px" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartSummary;
