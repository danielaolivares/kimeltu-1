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
        <svg width="15" height="23" viewBox="0 0 15 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.69942 11.4282L13.8998 2.52083C14.4744 1.94617 14.6181 1.08417 14.0434 0.509499C13.4688 -0.0651675 12.6068 -0.208834 12.0321 0.365833L0.53875 10.4225C-0.179583 10.9972 -0.179583 12.0028 0.53875 12.5775L12.0321 22.6342C12.6068 23.2088 13.4688 23.0652 14.0434 22.4905C14.6181 21.9158 14.4744 21.0538 13.8998 20.4792L3.69942 11.4282Z" fill="#40404E" />
        </svg>

      </button>
    )
  }
}

export default withRouter(BackButtonArrow);