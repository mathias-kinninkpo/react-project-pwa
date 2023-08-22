import React from 'react';
import { Link } from 'react-router-dom';
import '.'

function Home() {
  return (
    <div>
      <h1 className='welcome'>Page Home</h1>
      <p>Bienvenue sur la page d'accueil de notre application.</p>
      <Link to="/about" className='App-link'>Aller vers la page About</Link>
    </div>
  );
}

export default Home;
