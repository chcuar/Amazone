import React from 'react';
import { DepartmentConsumer } from '../../providers/DepartmentProvider';
import { Button, Header, Icon, Segment, } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import DepartmentEditForm from './DepartmentEditForm';

const Department = () => (
  <DepartmentConsumer>
    {value => (
      <Segment>
          { value.departments.map( d => (
            <>
            <Link to={`/departments/${d.id}/products`} ><Header as="h3">{d.title}</Header></Link>
            
        
          <Button icon color="red" onClick={() => value.deleteDepartment(d.id)} >
            <Icon name="trash" />
          </Button>
          <Button icon color="blue" onClick={value.toggleEdit}>
            <Icon name="pencil" />
          </Button>
          { value.editing ? <DepartmentEditForm {...d} edit={value.updateDepartment}/> : <></> }

        </>
      
      ))}
      </Segment>

    )}
  </DepartmentConsumer>
)

export default Department;