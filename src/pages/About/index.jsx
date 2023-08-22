import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

function About() {
  return (
    <div>
      <div className='container p-4 m-auto d-flex flex-column align-items-center'>
        <h1>Page About</h1>
        <p>Sur cette page, vous en apprendrez plus sur notre application.</p>
      </div>
      <Link to="/" className='App-link text-decoration-none'>Aller vers la page Home</Link>
      
    </div>
  );
}

export default About;
