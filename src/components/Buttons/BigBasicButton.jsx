import React, { Component } from 'react';


const BigBasicButton = (props) => {

    return <button
      className="btn btn-default"
      onClick={props.handleClick}>
      {props.children}
    </button>
  
}
export default BigBasicButton;
