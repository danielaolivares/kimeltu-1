import React from 'react';

import BackButtonArrow from '../../components/Buttons/BackButtonArrow'

class LogIn extends React.Component {
  render () {
    return (
      <div>
        <BackButtonArrow />
        <h1>Iniciar Sesión</h1>
        <form>          
          <label htmlFor="">Email</label>
          <input type="email"/>
          <label htmlFor="">Contraseña</label>
          <input type="password"/>
          <a href="recuperar-contrasena">¿Olvidaste tu contraseña?</a>
        </form>
        <button>Iniciar sesión</button>
      </div>
    )
  }
}

export default LogIn;