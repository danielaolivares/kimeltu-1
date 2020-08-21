import React from 'react';

class Register extends React.Component {
  render () {
    return (
      <div>
        <h1>Registrate</h1>
        <form>
          <label>Nombre y apellido</label>
          <input type="text"/>
          <label htmlFor="">Email</label>
          <input type="email"/>
          <label htmlFor="">Edad</label>
          <input type="text"/>
          <label htmlFor="">password</label>
          <input type="password"/>
        </form>
        <button>Registrarme</button>
        <p>Declaro ser mayor de 13 año </p>
      </div>
    )
  }
}

export default Register;