import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home'
import Profile from '../Profile/Profile'
import Feed from '../../components/Feed/Feed'
import HomeContent from '../../components/HomeContent/HomeContent';
import FirstWelcomePage from '../FirstWelcomePage/FirstWelcomePage';
import LogIn from '../LogIn/LogIn';
import EntryScreen from '../EntryScreen/EntryScreen';
import CreateAccount from '../CreateAccount/CreateAccount';
import Interests from '../InterestSelection/Interests';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

function HomeRouter() {
  return (
    <div id="home-router">
      <Router>
        <HomeContent>
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/tu-perfil" component={Profile} />
          <Route exact path="/ver-mentees" component={FirstWelcomePage}/>
          <Route exact path="/ver-mentoras" component={LogIn}/>
          <Route exact path="/bienvenida" component={FirstWelcomePage} />
            <Route exact path="/escoge-tu-perfil" component={EntryScreen} />
            <Route exact path="/inicia-sesion" component={LogIn} />
            <Route exact path="/crea-tu-cuenta" component={CreateAccount} />
            <Route exact path="/selecciona-tus-intereses" component={Interests} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/recuperar-contrasena" component={ForgotPassword} />
        </Switch>
      </HomeContent>
      </Router>
    </div>
  );
}

export default HomeRouter;