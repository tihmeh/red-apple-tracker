'use client';

import { useState, useEffect } from "react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hide nav bar by forcing layout to skip rendering nav
  useEffect(() => {
    document.body.classList.add("no-nav");
    return () => document.body.classList.remove("no-nav");
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    if (password === "apple") {
      document.cookie = "authorized=yes; Path=/; SameSite=Lax; Secure";
      window.location.href = "/";
    } else {
      setError("Incorrect password");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1 className="login-title">🔒 Secure Portfolio</h1>
        <p className="login-sub">Enter password to continue</p>

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
