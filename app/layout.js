'use client';

import './globals.css';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const [authorized, setAuthorized] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    // Allow login page without redirect
    if (pathname === '/login') {
      setAuthorized(true);
      return;
    }

    const loggedIn = localStorage.getItem("authorized");

    if (loggedIn === "yes") {
      setAuthorized(true);
    } else {
      setAuthorized(false);
      window.location.href = "/login";
    }
  }, [pathname]);

  // Prevent flash while checking auth
  if (authorized === null) {
    return null;
  }

  return (
    <html lang="en">
      <body>
        {/* Hide nav bar on login screen */}
        {pathname !== '/login' && (
          <nav>
            <a href="/">Home</a>
            <a href="/properties">All Properties</a>
            <a href="/properties/new-york">New York</a>
            <a href="/properties/florida">Florida</a>
          </nav>
        )}

        <main>{children}</main>
      </body>
    </html>
  );
}
