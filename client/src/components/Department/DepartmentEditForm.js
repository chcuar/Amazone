import React from "react";
import { Form, } from "semantic-ui-react";
import { DepartmentConsumer } from '../../providers/DepartmentProvider';

class DepartmentEditForm extends React.Component {
  state = { title: "" };

  componentDidMount() {
    if (this.props.id)
      this.setState({ title: this.props.title});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      this.props.edit( this.props.id, {...this.state} );
      this.props.toggleEdit()
    } else {
      this.props.add(this.state);
    }
    this.setState({ title: "", body: "", });
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

const ConnectedDepartmentEditForm = (props) => {
  return (
    <DepartmentConsumer>
      {value => <DepartmentEditForm {...props} {...value} />}
    </DepartmentConsumer>
  )
}

export default ConnectedDepartmentEditForm;
