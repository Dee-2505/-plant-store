import React from 'react';
import plants from '../data/plants'; // Import your data
import PlantCard from '../components/PlantCard'; // Reusable component

const ProductListingPage = () => {
  // Get unique categories
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>🪴 Our Houseplants Collection</h2>

      {categories.map(category => (
        <div key={category}>
          <h3 style={{ color: '#4caf50' }}>{category}</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
