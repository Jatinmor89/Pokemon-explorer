function PokemonGrid({ pokemons, loading, onSelect }) {
  if (loading) return (
    <div className="loading">
      <div className="pokeball">⚡</div>
      <p>Loading Pokémon...</p>
    </div>
  );

  if (pokemons.length === 0) return (
    <div className="empty">
      <p>😢</p>
      <p>No Pokémon found</p>
    </div>
  );

  return (
    <div className="pokemon-grid">
      {pokemons.map(p => (
        <div key={p.id} className="pokemon-card" onClick={() => onSelect(p)}>
          <div className="pokemon-id">#{String(p.id).padStart(3, '0')}</div>
          <img
            className="pokemon-img"
            src={p.sprites.other['official-artwork'].front_default || p.sprites.front_default}
            alt={p.name}
            loading="lazy"
          />
          <div className="pokemon-name">{p.name}</div>
          <div className="type-tags">
            {p.types.map(t => (
              <span key={t.type.name} className="type-tag">{t.type.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PokemonGrid;
