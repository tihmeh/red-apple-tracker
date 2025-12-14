import properties from '../data/properties.json';

export default function Home() {
  const featured = properties.slice(0, 3);

  return (
    <div>
      <h1>Red Apple Group Real Estate Portfolio</h1>
      <p style={{ fontSize: '18px', color: '#555', maxWidth: '700px' }}>
        A curated, investor-focused overview of the real estate holdings and development projects owned by Red Apple Group.
      </p>

      <h2>Featured Properties</h2>

      <div className="grid">
        {featured.map((p) => (
          <a key={p.slug} href={`/properties/${p.slug}`} className="property-card">
            <div style={{ background: '#ddd', height: '180px', borderRadius: '8px' }}></div>
            <h3>{p.name}</h3>
            <p>{p.address}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
