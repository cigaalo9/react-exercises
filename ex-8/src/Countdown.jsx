import { useEffect, useState } from "react";

export default function Countdown() {
  const [inputValue, setInputValue] = useState(30);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning]);

  function handleStart() {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  }

  function handleStop() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTimeLeft(inputValue);
  }

  function handleInputChange(e) {
    const value = Number(e.target.value);
    setInputValue(value);
    setTimeLeft(value);
    setIsRunning(false);
  }

  return (
    <div
      style={{ maxWidth: "400px", margin: "2rem auto", fontFamily: "Arial" }}
    >
      <h2>Countdown Timer</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <label htmlFor="secondsInput">SET TIME second(s):</label>
        <input
          type="number"
          min="1"
          value={inputValue}
          onChange={handleInputChange}
          style={{ padding: "8px", marginBottom: "1rem" }}
        />
      </div>

      <h3>Time Left: {timeLeft}s</h3>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleStart} disabled={isRunning || timeLeft === 0}>
          Start
        </button>

        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>

        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
