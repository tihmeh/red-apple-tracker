import './globals.css';

export const metadata = {
  title: 'Red Apple Real Estate Portfolio',
  description: 'Professional investor-grade portfolio of Red Apple Group properties.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">Home</a>
          <a href="/properties">All Properties</a>
          <a href="/properties/new-york">New York</a>
          <a href="/properties/florida">Florida</a>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

