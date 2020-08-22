import React from 'react';
import { Link } from 'react-router-dom'


import BigBasicButton from '../../components/Buttons/BigBasicButton'

class EntryScreen extends React.Component {
  render() {
    return (
      <div>
        <h2>Soy Mentora</h2>
        <Link to="/crea-tu-cuenta">
          <BigBasicButton>REGISTRARME</BigBasicButton>

        </Link>
        <Link to="/inicia-sesion">
          <BigBasicButton>INICIA SESIÓN</BigBasicButton>

        </Link>
        <h2>Soy Alumna</h2>
        <Link to="/crea-tu-cuenta">
          <BigBasicButton>REGISTRARME</BigBasicButton>

        </Link>
        <Link to="/inicia-sesion">
          <BigBasicButton>INICIA SESIÓN</BigBasicButton>

        </Link>
      </div>
    )
  }
}

export default EntryScreen;