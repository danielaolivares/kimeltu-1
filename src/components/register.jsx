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
          <label htmlFor="">telefono</label>
          <input type="text"/>
          <label htmlFor="">password</label>
          <input type="password"/>
        </form>
        <button>Registrarme</button>
        <p>Declaro ser mayor de 16 año y acepto los Términos y condiciones</p>

        <button>Busco trabajo</button>
        <button>Ofrezco trabajo</button>
        <button>Ofrezco servicios / productos</button>
        <button>Busco servicios / productos</button>
        <button>Tengo para donar</button>
      </div>
    )
  }
}

export default Register;