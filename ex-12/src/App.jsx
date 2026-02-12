import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div style={{ width: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Count: {count}</h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={handleDecrement} disabled={count === 0}>
          Decrement
        </button>

        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
}

export default App;
