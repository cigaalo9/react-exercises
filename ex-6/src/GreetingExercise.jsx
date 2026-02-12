import { useEffect, useState } from "react";

export default function GreetingExercise() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  // Decide what the title should be
  let title = "Welcome";

  if (greeting && name) {
    title = `${greeting}, ${name}`;
  } else if (!greeting && name) {
    title = `Welcome, ${name}`;
  }

  // Change the browser tab title
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div style={{ maxWidth: "500px", margin: "", fontFamily: "Arial" }}>
      

      <div style={{ marginBottom: "1rem" }}>
        <h2><label >Enter Your Name:</label></h2>
        <input
          type="text"
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "6px" }}
        />
      </div>

      <div>
        <h2><label>Choose a Greeting:</label></h2>
         <input
          type="text"
          placeholder="Type your greeting"
          value={greeting}
          onChange={(e) => setGreeting(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "6px" }}
        />
      </div>
    </div>
  );
}
