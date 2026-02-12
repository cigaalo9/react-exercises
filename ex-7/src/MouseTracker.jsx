import { useState, useEffect } from "react";

export default function MouseTracker() {
  // 1️⃣ State to store mouse coordinates
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 2️⃣ Function to handle mouse movement
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }

    // 3️⃣ Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // 4️⃣ Cleanup (VERY IMPORTANT)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // empty dependency = run once

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Mouse Position Tracker</h2>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
    </div>
  );
}
