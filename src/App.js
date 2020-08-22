import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/LogIn/LogIn'
import CreateAccount from './pages/CreateAccount/CreateAccount'
import EntryScreen from './pages/EntryScreen/EntryScreen'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import FirstWelcomePage from './pages/FirstWelcomePage/FirstWelcomePage';
import Interests from './pages/InterestSelection/Interests'
import Home from './pages/Home/Home'
//import Profile from './pages/Profile/Profile';

//<Route exact path="/" component={} />


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
          <Route exact path="/bienvenida" component={FirstWelcomePage} />
            <Route exact path="/escoge-tu-perfil" component={EntryScreen} />
            <Route exact path="/inicia-sesion" component={Login} />
            <Route exact path="/crea-tu-cuenta" component={CreateAccount} />
            <Route exact path="/selecciona-tus-intereses" component={Interests} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/recuperar-contrasena" component={ForgotPassword} />
          </Switch>
        </Router>
      </div>
    )
  }

}

export default App;
