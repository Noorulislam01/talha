import React from 'react';
import './ShyamSteel.css'; // Optional: Create a CSS file for styling
import st from "../Photos/ShyamSteel.jpeg"
const ShyamSteel = () => {
  return (
    <div className="shyam-steel-page">
      <h1>Shyam Steel</h1>
      <p>
        Shyam Steel is known for its durability, strength, and resistance to corrosion. 
        It is perfect for various construction projects, ensuring high-quality performance.
      </p>
      <img
        src={st} /* Replace with actual image URL */
        alt="Shyam Steel"
        className="steel-image"
      />
      <h2>Features:</h2>
      <ul>
        <li>Durable and corrosion-resistant</li>
        <li>High strength for structural support</li>
        <li>Perfect for residential and commercial projects</li>
      </ul>
      <button onClick={() => window.history.back()} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default ShyamSteel;
