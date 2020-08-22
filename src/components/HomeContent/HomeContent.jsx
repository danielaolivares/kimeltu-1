import React from 'react';

import MenuBar from '../../components/MenuBar/MenuBar'

const HomeContent = (props) => {

    return (
      <div>
        <div className="home-content">
          {props.children}
          <MenuBar />
        </div>
      </div>
    )
  }
export default HomeContent;