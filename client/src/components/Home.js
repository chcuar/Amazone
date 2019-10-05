import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Department from './Department/Department';
import { Container } from 'semantic-ui-react';
import Product from './Product/Product';

class Home extends Component {

  render() {
    return (
      <>
        <Header>Department</Header>
        <Container style={{ padding: "30px 0" }}>
        <Department />  
        {/* <Product /> */}
      </Container>
      </>
    )
  }
}

export default Home;

