import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="landing">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Laddu Cement Store</h1>
        <p>Your One-Stop Solution for Construction Needs</p>
        <Link to="/shop-now" style={{textDecoration:"none"}}>
        <button>Shop Now</button>
        </Link>
      </section>

       {/* Unified Section for Rods and Cement */}
       <section className="section materials">
        <h2>Explore Our Products</h2>
        <p>Top-quality construction materials for all your needs.</p>
        <div className="cards">
          {/* Rod Card */}
          <Link to = "/shyam-steel" style={{textDecoration:"none"}}>
          <div className="card">
            <h3>Shyam Steel</h3>
            <p>Durable and strong for construction projects.</p>
          </div>
          </Link>
          

          {/* Cement Card */}
          <Link to="/acc-cement" style={{textDecoration:"none"}}>
          <div className="card">
            <h3>ACC Cement</h3>
            <p>High-quality brands for bonding and durability.</p>
          </div>
          </Link>
        </div>
          
          
        </section>


      {/* Extra Material Section */}
      <section className="section extra-material">
        <h2>Extra Construction Material</h2>
        <p>All the additional material you need, under one roof.</p>
        <div className="cards">
          <div className="card">
            <h3>Sand</h3>
            <p>High-quality sand for smooth plastering.</p>
          </div>
          <div className="card">
            <h3>Bricks</h3>
            <p>Top-grade bricks for strong walls.</p>
          </div>
          <div className="card">
            <h3>Concrete Blocks</h3>
            <p>Efficient and long-lasting construction blocks.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
