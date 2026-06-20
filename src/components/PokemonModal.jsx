function PokemonModal({ pokemon, onClose }) {
  const img = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-header">
          <div className="modal-id">#{String(pokemon.id).padStart(3, '0')}</div>
          <img className="modal-img" src={img} alt={pokemon.name} />
          <div className="modal-name">{pokemon.name}</div>
          <div className="modal-types">
            {pokemon.types.map(t => (
              <span key={t.type.name} className="modal-type">{t.type.name}</span>
            ))}
          </div>
        </div>

        <div className="modal-info">
          <div className="info-box">
            <div className="info-label">Height</div>
            <div className="info-value">{(pokemon.height / 10).toFixed(1)}m</div>
          </div>
          <div className="info-box">
            <div className="info-label">Weight</div>
            <div className="info-value">{(pokemon.weight / 10).toFixed(1)}kg</div>
          </div>
          <div className="info-box">
            <div className="info-label">Base XP</div>
            <div className="info-value">{pokemon.base_experience || '—'}</div>
          </div>
          <div className="info-box">
            <div className="info-label">Abilities</div>
            <div className="info-value" style={{fontSize:'12px', textTransform:'capitalize'}}>
              {pokemon.abilities.slice(0,2).map(a => a.ability.name).join(', ')}
            </div>
          </div>
        </div>

        <div className="modal-stats">
          <h3>Base Stats</h3>
          {pokemon.stats.map(s => (
            <div key={s.stat.name} className="stat-row">
              <span className="stat-name">{s.stat.name.replace('special-', 'sp.')}</span>
              <div className="stat-bar-bg">
                <div className="stat-bar" style={{ width: `${Math.min(100, (s.base_stat / 255) * 100)}%` }} />
              </div>
              <span className="stat-val">{s.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonModal;
