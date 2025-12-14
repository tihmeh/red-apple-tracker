import properties from '../../../data/properties.json';

export default function FloridaPage() {
  const fl = properties.filter((p) => p.state === 'florida');

  return (
    <div>
      <h1>Florida Properties</h1>

      <div className="grid">
        {fl.map((p) => (
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
