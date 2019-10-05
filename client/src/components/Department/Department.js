import React from 'react';
import { DepartmentConsumer } from '../../providers/DepartmentProvider';
import { Button, Header, Icon, Segment, } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Department = () => (
  <DepartmentConsumer>
    {value => (
      <Segment>
        <>
          { value.departments.map( d => (
            <>
            <Link to={`/departments/${d.id}/products`} ><Header as="h3">{d.title}</Header></Link>
            <div>
          <Button icon color="red" onClick={() => value.deleteDepartment(d.id)} >
            <Icon name="trash" />
          </Button>
        </div>
        </>
          )
          )}
        </>
        
      </Segment>
    )}
  </DepartmentConsumer>
)

export default Department;