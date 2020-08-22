import React from 'react';
import { Link } from 'react-router-dom'

import './entry-screen.css'

import BigBasicButton from '../../components/Buttons/BigBasicButton'

class EntryScreen extends React.Component {
  render() {
    const styleButtonOutline = {
      color: '#7D4EE6',
      backgroundColor: '#FFFFFF',
      borderRadius: '30px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      border: '1px solid #7D4EE6',
      margin: '10px auto',
    }
    const styleButtonOutlineWhite = {
      backgroundColor: '#7D4EE6',
      color: '#FFFFFF',
      borderRadius: '30px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      border: '1px solid #FFFFFF',
      margin: '10px auto',

    }
    const styleButtonSolid = {
      backgroundColor: '#7D4EE6',
      color: '#FFFFFF',
      borderRadius: '30px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      border: '1px solid #7D4EE6',
      margin: '10px auto',

    }
    return (
      <div className="entry-screen-container">
        <section className="section-solid-white">
          <h2 style={{marginTop: '100px', fontSize: '18px'}}>Soy Mentora</h2>
          <Link to="/crea-tu-cuenta">
            <BigBasicButton styleCSS={styleButtonSolid}>REGISTRARME</BigBasicButton>

          </Link>
          <Link to="/inicia-sesion">
            <BigBasicButton styleCSS={styleButtonOutline}>INICIAR SESIÓN</BigBasicButton>

          </Link>
        </section>

        <section className="section-solid-background">
          <h2 style={{ color: '#FFFFFF', marginTop: '50px',fontSize: '18px' }}>Soy Alumna</h2>
          <Link to="/crea-tu-cuenta">
            <BigBasicButton styleCSS={styleButtonOutline}>REGISTRARME</BigBasicButton>

          </Link>
          <Link to="/inicia-sesion">
            <BigBasicButton styleCSS={styleButtonOutlineWhite}>INICIAR SESIÓN</BigBasicButton>

          </Link>
        </section>

      </div>
    )
  }
}

export default EntryScreen;