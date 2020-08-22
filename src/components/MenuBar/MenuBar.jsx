import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './menubar.css'

class MenuBar extends Component {
  render() {
    return (
      <navbar className="navbar">
        <Link to="/feed">
          <a>Home</a>
        </Link>
        <Link to="/buscador-feeds">
          <a>Search</a>
        </Link>
        <Link to="/nuevo-contenido">
          <a>New</a>
        </Link>
        <Link to="/mensajeria">
          <a>Messages</a>
        </Link>
        
          <a href="/tu-perfil">Profile</a>
      </navbar>
    )
  }
}
export default MenuBar;
