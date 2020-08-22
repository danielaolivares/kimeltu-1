import React from 'react';
import { Link } from 'react-router-dom'

import '../../components/Buttons/buttons.css'

import MediumBasicButton from '../../components/Buttons/MediumBasicButton'

class FirstWelcomePage extends React.Component {

  render() {
    const styleButton = {
      color: '#7D4EE6',
      backgroundColor: '#FFFFFF',
      borderRadius: '30px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      border: '1px solid #7D4EE6',
    }
    return (
      <div>
        <Link  to="/escoge-tu-perfil">
          <MediumBasicButton styleCSS={styleButton} >CREAR CUENTA</MediumBasicButton>
        </Link>
      </div>
    )
  }
}

export default FirstWelcomePage;