import React from 'react';
import { Link } from 'react-router-dom'

import BigBasicButton from '../../components/Buttons/BigBasicButton'

class FirstWelcomePage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/escoge-tu-perfil">
          <BigBasicButton>Crear Cuenta</BigBasicButton>
        </Link>
      </div>
    )
  }
}

export default FirstWelcomePage;