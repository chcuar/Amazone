import React, { Component } from 'react';
import axios from 'axios';

const DepartmentContext = React.createContext();

export const DepartmentConsumer = DepartmentContext.Consumer;

class DepartmentProvider extends Component {
  state = { departments: [] }

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
  //   const item = incommingTodo
  //   axios.post('/api/items', { item })
  //     .then( res => {
  //       const { todos } = this.state
  //       this.setState({ todos: [ ...todos, res.data ] })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //    })
  // }

  // updateTodo = (id, item) => {
  //   axios.put(`/api/items/${id}`, { item })
  //     .then( res => {
  //       const todos = this.state.todos.map( t => {
  //         if (t.id === id)
  //           return res.data
  //         return t
  //       })
  //       this.setState({ todos })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  // deleteTodo = (id) => {
  //   axios.delete(`/api/items/${id}`)
  //     .then( res => {
  //       const { todos } = this.state
  //       this.setState({ todos: todos.filter( t => t.id !== id ) })
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  render() {
    return (
      <DepartmentContext.Provider value={{
        ...this.state,
        updateDepartment: this.updateDepartment,

      }}>
        { this.props.children }
      </DepartmentContext.Provider>
    )
  }
}

export default DepartmentProvider;