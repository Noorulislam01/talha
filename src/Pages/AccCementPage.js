import React from 'react';
import './AccCementPage.css'; // Optional: Create a CSS file for styling
import Acc from '../Photos/AccCement.jpg'

const AccCementPage = () => {
  return (
    <div className="acc-cement-page">
      <h1>ACC Cement</h1>
      <p>
        ACC Cement is known for its excellent bonding strength, durability, and quality. 
        It is perfect for residential, commercial, and industrial construction projects.
      </p>
      <img
        src={Acc} /* Replace with actual image URL */
        alt="ACC Cement"
        className="cement-image"
      />
      <h2>Features:</h2>
      <ul>
        <li>Superior quality and strength</li>
        <li>Durable and long-lasting</li>
        <li>Perfect for various types of construction projects</li>
      </ul>
      <button onClick={() => window.history.back()} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default AccCementPage;
