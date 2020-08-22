import React from 'react';

import BigBasicButton from '../../components/Buttons/BigBasicButton'
import BackButtonArrow from '../../components/Buttons/BackButtonArrow'

class ForgotPassword extends React.Component {
  render () {
    return (
      <div>
        <BackButtonArrow />
        <h1>¿Olvidaste tu contraseña?</h1>
        <p>Ingresa la dirección de email con la que te registraste. Te enviaremos instrucciones para recuperar tu contraseña</p>
        <form>          
          <label htmlFor="">Email</label>
          <input type="email"/>
        </form>
        <BigBasicButton>Enviar</BigBasicButton>
      </div>
    )
  }
}

export default ForgotPassword;