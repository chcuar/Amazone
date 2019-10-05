import React from 'react';
import { DepartmentConsumer } from '../../providers/DepartmentProvider';

const Department = () => (
  <DepartmentConsumer>
    {value => (
      <>
        { value.departments.map( d => (
          <h1>{d.title}</h1>
        ))}
      </>
    )}
  </DepartmentConsumer>
)

export default Department;