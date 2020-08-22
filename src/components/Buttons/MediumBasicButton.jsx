import React, { Component } from 'react';


const MediumBasicButton = (props) => {

    return <button
      className="btn btn-medium"
      onClick={props.handleClick}>
      {props.children}
    </button>
  
}
export default MediumBasicButton;
