import React, { Component } from 'react';

import './buttons.css'

const BigBasicButton = (props) => {

    return <button
      className="btn-big"
      style={props.styleCSS}
      onClick={props.handleClick}>
      {props.children}
    </button>
  
}
export default BigBasicButton;
