import React, { Component } from 'react';
import { ProductConsumer } from '../../providers/ProductProvider';
import { Button, Header, Icon, Segment, } from "semantic-ui-react";
import axios from 'axios';

class Product extends Component {
  state = { products: [] }

  componentDidMount() {
    console.log(this.props)
    axios.get(`/api/departments/${this.props.match.params.department_id}/products`)
      .then( res => {
        this.setState({ products: res.data })
      })
      .catch( err => {
         console.log(err)
      })

  }

  handleDelete(department_id, id) {
    this.props.deleteProduct(department_id,id)
    // .then((res)=>{
    //   const { products } = this.state
    //   this.setState({ products: products.filter( p => p.id !== id ) })

    // })
  }
 
  render() {
    return (
        <Segment>
          { this.state.products.map( p => (
            <div key={p.id} >
              <Header as="h3">{p.name}</Header>
              <Header as="h3">{p.price}</Header>
              <Header as="h3">{p.stock}</Header>
            <Button icon color="red" onClick={() => this.handleDelete(p.department_id, p.id)} >
              <Icon name="trash" />
            </Button>
          </div>
          ))}
        </Segment>
  )}
}

const ConnectedProduct = (props) => {
  return(
    <ProductConsumer>
      { value => (
          <Product {...value} {...props} /> 
      )
      }
    </ProductConsumer>
  )

}

export default ConnectedProduct;