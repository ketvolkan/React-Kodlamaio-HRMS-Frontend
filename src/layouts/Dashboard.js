import React from 'react'
import EmployerList from '../pages/EmployerList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import Pages from './Pages'
import { Route } from 'react-router'
import EmployeeList from '../pages/EmployeeList'
import JobList from '../pages/JobList'
import EmployerDetail from '../pages/EmployerDetail'
import EmployeeDetail from '../pages/EmployeeDetail'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        <Route exact path="/" component={EmployerList}/>
                        <Route exact path="/Employer" component={EmployerList}/>
                        <Route path="/Employer/:id" component={EmployerDetail}/>
                        <Route exact path="/Employee" component={EmployeeList}/>
                        <Route exact path="/Employee/:id" component={EmployeeDetail}/>
                        <Route exact path="/Job" component={JobList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
