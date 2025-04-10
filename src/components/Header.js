import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <h1 style={styles.logo} onClick={() => navigate('/')}>
        Leafy Vibes 🌿
      </h1>
      <nav style={styles.nav}>
        <button style={styles.button} onClick={() => navigate('/products')}>Shop</button>
        <button style={styles.button} onClick={() => navigate('/cart')}>🛒 Cart</button>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#2e7d32',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    cursor: 'pointer'
  },
  nav: {
    display: 'flex',
    gap: '10px'
  },
  button: {
    padding: '8px 12px',
    fontSize: '1rem',
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'white'
  }
};

export default Header;
