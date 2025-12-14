import './globals.css';

export const metadata = {
  title: "Red Apple Portfolio",
  description: "Secure real-estate investment dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* The nav only shows if NOT on login */}
        {typeof window !== "undefined" && !window.location.pathname.startsWith("/login") && (
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
