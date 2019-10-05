import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import UserHome from ''
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
       <FetchUser>
          <ProtectedRoute exact path="/user_home" component={UserHome} />
       </FetchUser>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
  </>
)

export default App;