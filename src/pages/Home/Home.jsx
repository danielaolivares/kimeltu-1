import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import MenuBar from '../../components/MenuBar/MenuBar'
// import HomeRouter from './HomeRouter'
import HomeContent from '../../components/HomeContent/HomeContent';




class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HomeContent />
        </div>
      </div>
    )
  }
}

export default Home;