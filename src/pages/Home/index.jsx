import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function Home() {
  return (
    <div>
      <div className='container p-4 m-auto d-flex flex-column align-items-center'>
        <h1 >Page Home</h1>
        <p style={{display:'inline-block'}}>Bienvenue sur la page d'accueil de notre application.</p>
      </div>
      <Link to="/about" className='App-link text-decoration-none '>Aller vers la page About</Link>
    </div>
  );
}

export default Home;
