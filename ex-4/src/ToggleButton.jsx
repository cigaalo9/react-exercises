import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-container">
      <button onClick={handleToggle}>{isOn ? "ON" : "OFF"}</button>

      <p>The button is currently: {isOn ? "ON" : "OFF"}</p>
    </div>
  );
}

export default ToggleButton;
