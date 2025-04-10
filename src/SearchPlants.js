import React, { useState } from 'react';

const samplePlants = ["Snake Plant", "Aloe Vera", "Peace Lily", "Spider Plant", "ZZ Plant"];

function SearchPlants() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    const filtered = samplePlants.filter(plant =>
      plant.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQuery(e.target.value);
    setResults(filtered);
  };

  return (
    <div style={{ padding: '30px' }}>
      <h2>Find a Plant 🌿</h2>
      <input
        type="text"
        placeholder="Search for a plant"
        value={query}
        onChange={handleSearch}
      /><br /><br />
      {results.length > 0 && (
        <ul>
          {results.map((plant, idx) => <li key={idx}>{plant}</li>)}
        </ul>
      )}
    </div>
  );
}

export default SearchPlants;
