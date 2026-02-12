import { CartProvider } from "./CartContext";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";

function App() {
  return (
    <CartProvider>
      <div style={{ padding: "40px" }}>
        <ProductList />
        <CartSummary />
      </div>
    </CartProvider>
  );
}

export default App;
