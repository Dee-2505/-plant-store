import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import SearchPlants from './SearchPlants';
import ReviewsProfile from './ReviewsProfile';

function App() {
  return (
    <Router>
      <Routes>

        {/* Home Page with Logout and Disabled Review */}
        <Route path="/" element={
          <div style={{ padding: '30px' }}>
            <h2>🌿 Welcome to Plant Store</h2>
            <p>Shop indoor plants and gardening tools.</p>
            <button style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px'
            }}>
              Logout
            </button>

            {/* Task 11: Disabled Review Section */}
            <div style={{ marginTop: '40px' }}>
              <h3>Leave a Review</h3>
              <input type="text" placeholder="Write your review..." disabled /><br /><br />
              <button disabled style={{ backgroundColor: '#ccc', padding: '10px' }}>
                Submit Review
              </button>
            </div>
          </div>
        } />

        {/* Other Pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<SearchPlants />} />
        <Route path="/reviews-profile" element={<ReviewsProfile />} />

      </Routes>
    </Router>
  );
}

export default App;
