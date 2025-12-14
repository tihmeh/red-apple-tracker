'use client';

import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("authorized");

    if (loggedIn === "yes") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      window.location.href = "/login";
    }
  }, []);

  if (authorized === null) {
    return null; // prevents layout flicker
  }

  return (
    <html lang="en">
      <body>
        {authorized && (
          <>
            <nav>
              <a href="/">Home</a>
              <a href="/properties">All Properties</a>
              <a href="/properties/new-york">New York</a>
              <a href="/properties/florida">Florida</a>
            </nav>

            <main>{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
