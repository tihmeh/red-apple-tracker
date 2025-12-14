import properties from '../../data/properties.json';

export default function PropertiesPage() {
  return (
    <div>
      <h1>All Red Apple Properties</h1>

      <div className="grid">
        {properties.map((p) => (
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
