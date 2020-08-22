import React from 'react';
import { Link } from 'react-router-dom'

import BigBasicButton from '../../components/Buttons/BigBasicButton'
import BackButtonArrow from '../../components/Buttons/BackButtonArrow'


class CreateAccount extends React.Component {
  render () {
    return (
      <div>
        <BackButtonArrow />
        <h1>Registrar cuenta</h1>
        <form>
          <label>Nombre</label>
          <input type="text" placeholder="Natalia"/>
          <label>Apellido</label>
          <input type="text" placeholder="Barriga"/>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="nataliabarriga@gmail.com"/>
          <label htmlFor="">password</label>
          <input type="password"/>
        </form>
        <label htmlFor=""><input type="checkbox"/>Declaro tener más 13 años y estar de acuerdo con los Términos y condiciones</label>
        <Link to="selecciona-tus-intereses">
          <BigBasicButton>Registrarme</BigBasicButton>
        </Link>
      </div>
    )
  }
}

export default CreateAccount;