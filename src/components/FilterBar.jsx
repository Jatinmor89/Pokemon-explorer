function FilterBar({ types, activeType, setActiveType }) {
  return (
    <div className="filter-bar">
      {types.map(type => (
        <button
          key={type}
          className={`type-btn type-${type} ${activeType === type ? 'active' : ''}`}
          onClick={() => setActiveType(type)}
        >
          {type === 'all' ? '✨ All' : type}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
