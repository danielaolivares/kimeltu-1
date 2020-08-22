import React from 'react';
import { Link } from 'react-router-dom'

import BigBasicButton from '../../components/Buttons/BigBasicButton'
import BackButtonArrow from '../../components/Buttons/BackButtonArrow'

import './create-account.css'


class CreateAccount extends React.Component {
  render() {
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
      <div className="create-account-container">
        <section style={{ display: 'flex', backgroundColor: '#7D4EE6' }}>
          <BackButtonArrow className="back-white"/>
          <h1 style={{ width: '160px', fontSize: '18px', color: '#FFFFFF' }}>Registrar cuenta como Mentee</h1>
        </section>
        <section className="create-account-form-container">
          <form className="create-account">
            <label>Nombre</label>
            <input className="register-text-input" type="text" placeholder="Natalia" />
            <label>Apellido</label>
            <input className="register-text-input" type="text" placeholder="Barriga" />
            <label htmlFor="">Email</label>
            <input className="register-text-input" type="email" placeholder="nataliabarriga@gmail.com" />
            <label htmlFor="">password</label>
            <input className="register-text-input" type="password" />
          </form>
          <label htmlFor="" style={{fontSize: '10px'}}>
            <input type="checkbox" style={{borderRadius: '10px'}}/>Declaro tener más 13 años y estar de acuerdo con los <a>Términos y condiciones</a></label>
          <Link to="selecciona-tus-intereses">
            <BigBasicButton styleCSS={styleButtonSolid}>REGISTRARME</BigBasicButton>
          </Link>
        </section>
      </div>
    )
  }
}

export default CreateAccount;