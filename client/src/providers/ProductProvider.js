import React, { Component } from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

export const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  state = { products: [] }

  componentDidMount() {
    axios.get('/departments/:department_id/products')
      .then( res => {
        this.setState({ products: res.data })
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

  deleteProduct = (department_id, id) => {
    return axios.delete(`/api/departments/${department_id}/products/${id}`)
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        updateProduct: this.updateProduct,
        deleteProduct: this.deleteProduct

      }}>
        { this.props.children }
      </ProductContext.Provider>
    )
  }
}

export default ProductProvider;