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
          <label htmlFor="">password</label>
          <input type="password"/>
          <label htmlFor="">password</label>
          <input type="password"/>
        </form>
        <button>Registrarme</button>
      </div>
    )
  }
}

export default Register;