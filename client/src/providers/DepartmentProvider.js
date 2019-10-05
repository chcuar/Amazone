import React, { Component } from 'react';
import axios from 'axios';

const DepartmentContext = React.createContext();

export const DepartmentConsumer = DepartmentContext.Consumer;

class DepartmentProvider extends Component {
  state = { departments: [], }

  componentDidMount() {
    axios.get('/api/departments')
      .then( res => {
        this.setState({ departments: res.data })
      })
      .catch( err => {
         console.log(err)
      })
  }

  // addDepartment = (incommingDepartment) => {
  //   const department = incommingDepartment
  //   axios.post('/api/departments', { department })
  //     .then( res => {
  //       const { departments } = this.state
  //       this.setState({ departments: [ ...departments, res.data ] })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //    })
  // }

  addDepartment = (department) => {
    axios.post('/api/departments', department )
      .then( res => {
        const { departments } = this.state;
        this.setState({ departments: [...departments, res.data] });
      })
  }

  updateDepartment = (department) => {
    axios.put(`/api/department/${id}`, department)
      .then( res => {
        const departments = this.state.departments.map( d => {
          if (d.id === id)
            return res.data
          return d
        })
        this.setState({ departments })
      })
      .catch( err => {
        console.log(err)
      })
  }

  deleteDepartment = (id) => {
    axios.delete(`/api/departments/${id}`)
      .then( res => {
        const { departments } = this.state
        this.setState({ departments: departments.filter( d => d.id !== id ) })
      })
      .catch( err => {
        console.log(err)
      })
  }

  render() {
    return (
      <DepartmentContext.Provider value={{
        ...this.state,
        updateDepartment: this.updateDepartment,
        addDepartment: this.addDepartment,
        deleteDepartment: this.deleteDepartment,

      }}>
        { this.props.children }
      </DepartmentContext.Provider>
    )
  }
}

export default DepartmentProvider;