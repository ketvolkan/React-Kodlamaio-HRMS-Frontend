import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react'
import EmployeeService from "../services/employeeService"


export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    
    useEffect(()=>{
      let employeeService = new EmployeeService();
      employeeService.getEmployee().then(result=>setEmployees(result.data.data))
    },[]); 
    return (
        <div>
          <Table color="red" celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Password</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Nationality Id</Table.HeaderCell>
        <Table.HeaderCell>Date Year</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        employees.map(employee =>(
      <Table.Row key = {employee.id}>
          <Table.Cell>{employee.id}</Table.Cell>
          <Table.Cell><Link to={`/Employee/${employee.id}`}>{employee.mail}</Link></Table.Cell>
          <Table.Cell>{employee.password}</Table.Cell>
          <Table.Cell>{employee.first_name}</Table.Cell>
          <Table.Cell>{employee.last_name}</Table.Cell>
          <Table.Cell>{employee.nationality_id}</Table.Cell>
          <Table.Cell>{employee.date_year}</Table.Cell>
      </Table.Row>
        ))
      }
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='7'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
    )
}
