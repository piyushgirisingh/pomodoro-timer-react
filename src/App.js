import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error("Failed to connect to Flask:", err);
        setMessage("❌ Failed to connect to Flask");
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Pomodoro Timer</h1>
      <p>Flask says: {message}</p>
    </div>
  );
}

export default App;
