import React from 'react';
import { withRouter } from 'react-router-dom';

class BackButtonArrow extends React.Component {
  
  handleBack = () => {
    this.props.history.goBack()
  }
  render() {
    return (
      <button
        onClick={this.handleBack}
      >
        &lt;
      </button>
    )
  }
}

export default withRouter(BackButtonArrow);