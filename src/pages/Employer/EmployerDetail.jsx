import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { Card,Button } from 'semantic-ui-react'
import EmployerService from "../../services/employerService"

export default function EmployerDetail() {
    let {id} = useParams()
    const [employers, setEmployers] = useState([]);
    
    useEffect(()=>{
      let employerService = new EmployerService();
      employerService.getEmployerById(id).then(result=>setEmployers(result.data.data))
    },[]); 
    return (
        <div>
          {
        employers.map(employer =>(
    <Card fluid color='red'>
      <Card.Content>
        <Card.Header>{employer.company_name}</Card.Header>
        <Card.Meta>{employer.mail}</Card.Meta>
        <Card.Meta>{employer.phone_number}</Card.Meta>
        <Card.Description>
        {employer.website}
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
