'use client';

import { useState } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (password === "apple") {
      document.cookie = "authorized=yes; path=/; max-age=86400"; // 24 hours
      window.location.href = "/";
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🔒 Secure Access</h1>
        <p>Enter password to access portfolio</p>

        <form onSubmit={handleLogin}>
          <input
            autoFocus
            type="password"
            placeholder="Enter password…"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button className="login-button">Unlock</button>
        </form>

        {error && <p className="login-error">{error}</p>}
      </div>
    </div>
  );
}
