import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { Card,Button } from 'semantic-ui-react'
import EmployeeService from "../../services/employeeService"

export default function EmployeeDetail() {
    let {id} = useParams()
    const [employees, setEmployees] = useState([]);
    
    useEffect(()=>{
      let employeeService = new EmployeeService();
      employeeService.getEmployeeById(id).then(result=>setEmployees(result.data.data))
    },[]); 
    return (
        <div>
          {
        employees.map(employee =>(
    <Card fluid color='red'>
      <Card.Content>
        <Card.Header>{employee.first_name} {employee.last_name}</Card.Header>
        <Card.Meta>{employee.mail}</Card.Meta>
        <Card.Description>
        {employee.nationality_id}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Onayla
          </Button>
          <Button basic color='red'>
            Reddet
          </Button>
        </div>
      </Card.Content>
    </Card>
        ))}
        </div>
    )
}
