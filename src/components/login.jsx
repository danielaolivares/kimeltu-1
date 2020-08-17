import React from 'react';

class Register extends React.Component {
  render () {
    return (
      <div>
        <h1>Ingresa</h1>
        <form>          
          <label htmlFor="">Email</label>
          <input type="email"/>
          <label htmlFor="">Password</label>
          <input type="password"/>
        </form>
        <button>Ingresar</button>
      </div>
    )
  }
}

export default Register;