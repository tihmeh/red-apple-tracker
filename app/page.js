export default function Home() {
  return (
    <div>
      <h1>Red Apple Real Estate Portfolio</h1>
      <p style={{ fontSize: "18px", color: "#666", maxWidth: "700px" }}>
        Explore detailed information about major Red Apple Group real estate developments.
      </p>

      <h2>Browse Portfolio</h2>

      <div className="grid">
        <a href="/properties" className="property-card">
          <h3>All Properties</h3>
          <p>Full portfolio overview</p>
        </a>

        <a href="/properties/new-york" className="property-card">
          <h3>New York</h3>
          <p>Brooklyn, Manhattan, & Coney Island assets</p>
        </a>

        <a href="/properties/florida" className="property-card">
          <h3>Florida</h3>
          <p>St. Petersburg developments</p>
        </a>
      </div>
    </div>
  );
}

