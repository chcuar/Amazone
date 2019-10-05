import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import UserHome from './components/userHome/UserHome';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Product from './components/Product/Product';

const App = () => (
  <>
    <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/departments/:department_id/products" component={Product} />
       <FetchUser>
          <ProtectedRoute exact path="/user_home" component={UserHome} />
       </FetchUser>
          
          <Route component={NoMatch} />
        </Switch>
      </Container>
  </>
)

export default App;