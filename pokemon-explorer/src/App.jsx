import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import PokemonGrid from './components/PokemonGrid';
import PokemonModal from './components/PokemonModal';
import './App.css';

const TYPES = ['all','fire','water','grass','electric','psychic','ice','dragon','dark','fairy','fighting','poison','ground','rock','ghost','steel','flying','bug','normal'];

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState('all');
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(0);
  const LIMIT = 48;

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${page * LIMIT}`);
      const data = await res.json();
      const details = await Promise.all(
        data.results.map(p => fetch(p.url).then(r => r.json()))
      );
      setPokemons(details);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const filtered = pokemons.filter(p => {
    const matchSearch = p.name.includes(search.toLowerCase());
    const matchType = activeType === 'all' || p.types.some(t => t.type.name === activeType);
    return matchSearch && matchType;
  });

  return (
    <div className="app">
      <Header />
      <main className="main">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterBar types={TYPES} activeType={activeType} setActiveType={setActiveType} />
        <PokemonGrid pokemons={filtered} loading={loading} onSelect={setSelected} />
        <div className="pagination">
          <button className="page-btn" onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0}>← Prev</button>
          <span className="page-info">Page {page + 1}</span>
          <button className="page-btn" onClick={() => setPage(p => p + 1)}>Next →</button>
        </div>
      </main>
      {selected && <PokemonModal pokemon={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default App;
