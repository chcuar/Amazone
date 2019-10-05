import React from 'react';
import Department from './Department';
import { DepartmentConsumer } from '../../providers/DepartmentProvider';


// updateDepartment, deleteDepartment

const DepartmentList = ({ departments }) => (
  <DepartmentConsumer >
  <div>
    { departments.map( department => 
        <Department
          key={department.id}
          {...department}
          // updateDepartment={updateDepartment}
          // deleteDepartment={deleteDepartment}
        />
      )
    }
  </div>
  </DepartmentConsumer>
)

export default DepartmentList;