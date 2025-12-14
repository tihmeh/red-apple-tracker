import properties from '../../../data/properties.json';

export default function PropertyPage({ params }) {
  const property = properties.find((p) => p.slug === params.slug);

  if (!property) return <h1>Property Not Found</h1>;

  return (
    <div>
      <h1>{property.name}</h1>

      <div style={{
        width: '100%',
        maxWidth: '600px',
        height: '300px',
        background: '#ddd',
        borderRadius: '12px',
        marginBottom: '20px'
      }}></div>

      <p><strong>Address:</strong> {property.address}</p>
      <p><strong>State:</strong> {property.state}</p>
      <p><strong>Units:</strong> {property.units ?? 'N/A'}</p>
      <p><strong>Year Built:</strong> {property.year}</p>
      <p><strong>Ownership LLC:</strong> {property.llc}</p>
      <p><strong>Type:</strong> {property.type}</p>

      <br />
      <a href="/properties" style={{ color: 'var(--brand)', textDecoration: 'underline' }}>
        ← Back to Properties
      </a>
    </div>
  );
}

