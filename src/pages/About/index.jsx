import React from 'react';
import { Link } from 'react-router-dom';
import '.'

function About() {
  return (
    <div>
      <h1 className='welcome'>Page About</h1>
      <p className='App-link'>Sur cette page, vous en apprendrez plus sur notre application.</p>
      <Link to="/">Aller vers la page Home</Link>
      <button onClick={() => window.history.back()}>Retour en arrière</button>
    </div>
  );
}

export default About;
