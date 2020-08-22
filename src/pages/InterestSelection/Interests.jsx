import React from 'react';
import { Link } from 'react-router-dom'

import BackButtonArrow from '../../components/Buttons/BackButtonArrow'

class Interests extends React.Component {
  render () {
    return (
      <div>
        <div>
          <BackButtonArrow />
          <h1>Intereses</h1>
          <p>Selecciona las casillas según tus intereses</p>

        </div>
        <section>

        <label htmlFor=""><input type="checkbox"/>Ecología</label>
        <label htmlFor=""><input type="checkbox"/>Deportes</label>
        <label htmlFor=""><input type="checkbox"/>Salud</label>
        <label htmlFor=""><input type="checkbox"/>Nutrición</label>
        <label htmlFor=""><input type="checkbox"/>Veganismo</label>
        <label htmlFor=""><input type="checkbox"/>Música</label>
        <label htmlFor=""><input type="checkbox"/>Dibujo</label>
        <label htmlFor=""><input type="checkbox"/>Meditación</label>
        <label htmlFor=""><input type="checkbox"/>Maquillaje</label>
        <label htmlFor=""><input type="checkbox"/>Causas sociales</label>
        <label htmlFor=""><input type="checkbox"/>Cine</label>
        <label htmlFor=""><input type="checkbox"/>Leer</label>
        <label htmlFor=""><input type="checkbox"/>Naturaleza</label>
        <label htmlFor=""><input type="checkbox"/>Feminismo</label>
        <label htmlFor=""><input type="checkbox"/>Animales</label>
        <label htmlFor=""><input type="checkbox"/>Fiestas</label>
        </section>
        <Link to="feed">
          <button>Continuar</button>
        </Link>
      </div>
    )
  }
}

export default Interests;