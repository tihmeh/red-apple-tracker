'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    
    if (password === "apple") {
      // Store simple auth flag
      localStorage.setItem("authorized", "yes");
      window.location.href = "/";
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "80px auto", textAlign: "center" }}>
      <h1>Portfolio Login</h1>
      <p>Enter password to continue.</p>

      <form onSubmit={handleLogin}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px"
          }}
        />

        <button 
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "var(--brand)",
            color: "white",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
            border: "none"
          }}
        >
          Login
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
}
