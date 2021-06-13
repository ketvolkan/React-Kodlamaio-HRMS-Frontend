import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Icon, Menu, Table } from 'semantic-ui-react'
import EmployerService from "../../services/employerService"


export default function JobList() {
    const [employers, setEmployers] = useState([]);
    
    useEffect(()=>{
      let employerService = new EmployerService();
      employerService.getEmployer().then(result=>setEmployers(result.data.data))
    },[]); 
    return (
        <div>
          <Table color="red"  celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Id</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Password</Table.HeaderCell>
        <Table.HeaderCell>Company Name</Table.HeaderCell>
        <Table.HeaderCell>Website</Table.HeaderCell>
        <Table.HeaderCell>Phone Number</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        employers.map(employer =>(
      <Table.Row key = {employer.id}>
          <Table.Cell>{employer.id}</Table.Cell>
          <Table.Cell><Link to={`/Employer/${employer.id}`}>{employer.mail}</Link></Table.Cell>
          <Table.Cell>{employer.password}</Table.Cell>
          <Table.Cell>{employer.company_name}</Table.Cell>
          <Table.Cell>{employer.website}</Table.Cell>
          <Table.Cell>{employer.phone_number}</Table.Cell>
      </Table.Row>
        ))
      }
      
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='6'>
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
