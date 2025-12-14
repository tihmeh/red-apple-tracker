import properties from '../../data/properties.json';

export default function PropertiesPage() {
  return (
    <div>
      <h1>All Properties</h1>

      <div className="grid">
        {properties.map((p) => (
          <a href={`/properties/${p.slug}`} key={p.slug} className="property-card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.address}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
