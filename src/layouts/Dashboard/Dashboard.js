import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import JobAdvertismentList from '../../pages/JobAdvertisement/JobAdvertismentList'
import List from '../List/List'
import JobAdvertismentAdd from '../../pages/JobAdvertisement/JobAdvertismentAdd'
import JobAdvertismentSubmitList from '../../pages/JobAdvertisement/JobAdvertismentSubmitList'
import index from '../Index'
export default function Dashboard() {
    return (
        <div>    
                    <Route exact path="/JobAdvertisment" component={JobAdvertismentList}/>
                    <Route path ="/List" component={List}/>    
                    <Route exact path ="/" component={index}/>                
                    <Route exact path ="/JobAdvertisment/Add" component={JobAdvertismentAdd}/>          
                    <Route exact path ="/JobAdvertisment/Submit" component={JobAdvertismentSubmitList}/>    
        </div>
    )
}
