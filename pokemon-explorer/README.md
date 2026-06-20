# ⚡ PokéExplorer — Pokemon Explorer App

A beautiful **Pokemon Explorer** built with **React + Vite + PokeAPI**.  
Browse 900+ Pokémon, filter by type, search by name, and view detailed stats!

---

## 🚀 Features

- ✅ Browse **900+ Pokémon** with official artwork
- 🔍 **Search** Pokémon by name in real-time
- 🏷️ **Filter** by 18 Pokémon types (Fire, Water, Grass...)
- 📊 **Detailed modal** with stats, height, weight, abilities
- 📄 **Pagination** to load more Pokémon
- 💾 **No API key needed** — uses free PokeAPI
- 📱 Fully **responsive** dark theme UI

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Fast build tool |
| PokeAPI | Free Pokémon data API |
| CSS3 | Custom dark theme |

---

## 📁 Project Structure

```
pokemon-explorer/
├── src/
│   ├── components/
│   │   ├── Header.jsx         # App header
│   │   ├── SearchBar.jsx      # Search input
│   │   ├── FilterBar.jsx      # Type filter buttons
│   │   ├── PokemonGrid.jsx    # Grid of pokemon cards
│   │   └── PokemonModal.jsx   # Detail popup modal
│   ├── App.jsx                # Main app + state
│   ├── App.css                # All styles
│   └── main.jsx               # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Getting Started

```bash
git clone https://github.com/Jatinmor89/pokemon-explorer.git
cd pokemon-explorer
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## 🚢 Deploy to GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

Live URL: `https://Jatinmor89.github.io/pokemon-explorer/`

---

## 📋 What I Learned

- Fetching data from a **REST API** with React
- `useEffect` for async data fetching
- Handling **loading states** and errors
- **Real-time search** and **type filtering**
- Modal/popup implementation in React
- Responsive grid layouts with CSS

---

## 🗂️ Part of My 15-Project Series

| # | Project | Level | Status |
|---|---------|-------|--------|
| 1 | Animated Landing Page | 🟢 Beginner | ✅ Done |
| 2 | Quiz App | 🟢 Beginner | ✅ Done |
| 6 | GitHub Profile Finder | 🟡 Intermediate | ✅ Done |
| 7 | Expense Tracker | 🟡 Intermediate | ✅ Done |
| **8** | **Pokemon Explorer** | 🟡 Intermediate | ✅ **This Project** |
| 11 | Blog Platform | 🔴 Advanced | 🔜 |
| 12 | Real-time Chat | 🔴 Advanced | 🔜 |
| 13 | E-commerce Store | 🔴 Advanced | 🔜 |
| 14 | AI Image Generator | 🔴 Advanced | 🔜 |
| 15 | NeuralChat AI | 🔴 Advanced | 🔜 |

---

## 👤 Author

**Jatin** — [GitHub](https://github.com/Jatinmor89)

---

## 📄 License

MIT License
