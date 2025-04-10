import React from 'react';

const PlantCard = ({ plant }) => {
  return (
    <div style={styles.card}>
      <img src={plant.image} alt={plant.name} style={styles.image} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px'
  },
  button: {
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#2e7d32',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default PlantCard;
