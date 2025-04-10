import React from 'react';

function ReviewsProfile() {
  return (
    <div style={{ padding: '30px' }}>
      <h2>🌿 Reviews & Profile Demo</h2>

      {/* Task 11: Disabled Review Button */}
      <div style={{ marginBottom: '40px' }}>
        <h3>Disabled Review Button</h3>
        <input type="text" placeholder="Write your review..." disabled /><br /><br />
        <button disabled style={{ backgroundColor: '#ccc', padding: '8px' }}>
          Submit Review
        </button>
      </div>

      {/* Task 12: Review Form */}
      <div style={{ marginBottom: '40px' }}>
        <h3>Review Form with Rating</h3>
        <textarea placeholder="Your review" rows="4" cols="40" /><br /><br />
        <label>Rating: </label>
        <select>
          <option>⭐</option>
          <option>⭐⭐</option>
          <option>⭐⭐⭐</option>
          <option>⭐⭐⭐⭐</option>
          <option>⭐⭐⭐⭐⭐</option>
        </select><br /><br />
        <button>Submit</button>
      </div>

      {/* Task 13: Profile Info */}
      <div>
        <h3>My Profile</h3>
        <p><strong>Name:</strong> Divya Sri</p>
        <p><strong>Email:</strong> divya@example.com</p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default ReviewsProfile;
