import React from 'react';
import { DepartmentConsumer } from '../../providers/DepartmentProvider';
import { Button, Header, Icon, Segment, } from "semantic-ui-react";

const Department = () => (
  <DepartmentConsumer>
    {value => (
      <Segment>
        <>
          { value.departments.map( d => (
            <>
            <a href="https://www.w3schools.com/html/" ><Header as="h3">{d.title}</Header></a>
            <div>
          <Button icon color="red" onClick={() => value.deleteDepartment(d.id)} >
            <Icon name="trash" />
          </Button>
          <Button icon color="blue" onClick={() => value.updateDepartment(d.id)} >
            <Icon name="pencil" />
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