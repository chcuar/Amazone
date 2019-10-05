import React, { Component } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import Department from './Department/Department';
import DepartmentList from './Department/DepartmentList';
import { Container } from 'semantic-ui-react'

class Home extends Component {

  render() {
    return (
      <>
        <Header>Department</Header>
        <Container style={{ padding: "30px 0" }}>
        <Department />  
        {/* <DepartmentForm addItem={this.addItem} />
        <br />
        <br />
        <DepartmentList
          departments={this.state.departments}
          updateDepartment={this.updateDepartment}
          deleteDepartment={this.deleteDepartment}
        /> */}
      </Container>
    );
  }
}
      </>
    )
  }
}

export default Home;

