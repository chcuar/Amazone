import React from "react";
import { Form, } from "semantic-ui-react";
import { DepartmentConsumer } from '../../providers/DepartmentProvider';

class DepartmentForm extends React.Component {
  state = { title: "" };

  componentDidMount(){
    console.log(this.props)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDepartment(this.state);
    this.setState({ title: "" });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input 
            placeholder="Title"
            label="Title"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <Form.Button color="green">Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
};

const ConnectedDepartmentForm = (props) => {
  return (
    <DepartmentConsumer>
      {value => <DepartmentForm {...props} {...value} />}
    </DepartmentConsumer>
  )
}

export default ConnectedDepartmentForm;
