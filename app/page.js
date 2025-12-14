export default function Home() {
  return (
    <div>
      <div className="hero">
        <h1>Red Apple Group Real Estate Portfolio</h1>
        <p>A curated, investor-grade presentation of New York and Florida development assets.</p>
      </div>

      <h2>Explore Portfolio</h2>

      <div className="grid">
        <a href="/properties" className="property-card">
          <h3>All Properties</h3>
          <p>Complete holdings & active developments</p>
        </a>

        <a href="/properties/new-york" className="property-card">
          <h3>New York</h3>
          <p>Brooklyn, Manhattan & Coney Island</p>
        </a>

        <a href="/properties/florida" className="property-card">
          <h3>Florida</h3>
          <p>Downtown St. Petersburg skyline projects</p>
        </a>
      </div>
    </div>
  );
}

