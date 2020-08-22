import React from 'react';

class Register extends React.Component {
  render () {
    return (
      <div>
        <h1>Registrate</h1>
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
        <label htmlFor=""><input type="checkbox"/>Declaro tner más 13 años y estar de acuerdo con los Términos y condiciones</label>
        <button>Registrarme</button>
      </div>
    )
  }
}

export default Register;