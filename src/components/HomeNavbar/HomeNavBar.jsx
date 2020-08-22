import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home-navbar.css'

class MenuBar extends Component {
  render() {
    return (
      <navbar className="home-navbar">
        <Link to="ver-mentees">
          <a>Mentees</a>
        </Link>
        &#124;
        <Link to="ver-mentoras">
          <a>Mentoras</a>
        </Link>
      </navbar>
    )
  }
}
export default MenuBar;
