import React from 'react';

class Profile extends React.Component {
  render () {
    return (
      <div>
        <p>Selecciona lo qe más te gusta</p>
        <label htmlFor=""><input type="checkbox"/>Mascotas</label>
        <label htmlFor=""><input type="checkbox"/>Maquillarme</label>
        <label htmlFor=""><input type="checkbox"/>Andar en bicicleta</label>
        <label htmlFor=""><input type="checkbox"/>Carretear con mis amigos</label>
        <label htmlFor=""><input type="checkbox"/>Estudiar</label>
        <label htmlFor=""><input type="checkbox"/>Dormir</label>
        <label htmlFor=""><input type="checkbox"/>Ver película</label>
        <label htmlFor=""><input type="checkbox"/>Practicar deporte</label>
        <label htmlFor=""><input type="checkbox"/>leer</label>
        <label htmlFor=""><input type="checkbox"/>jugar</label>
      </div>
    )
  }
}

export default Profile;