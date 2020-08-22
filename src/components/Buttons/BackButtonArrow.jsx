import React from 'react';
import { withRouter } from 'react-router-dom';

import './buttons.css'

class BackButtonArrow extends React.Component {
  
  handleBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <button
        className="btn-go-back"
        onClick={this.handleBack}
      >
        &lt;
      </button>
    )
  }
}

export default withRouter(BackButtonArrow);