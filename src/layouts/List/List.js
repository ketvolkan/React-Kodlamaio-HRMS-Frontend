import React from 'react'
import EmployerList from '../../pages/Employer/EmployerList'
import Categories from '../Categories/Categories'
import { Grid } from 'semantic-ui-react'
import { Route } from 'react-router'
import EmployeeList from '../../pages/Employee/EmployeeList'
import JobList from '../../pages/Job/JobList'
import EmployerDetail from '../../pages/Employer/EmployerDetail'
import EmployeeDetail from '../../pages/Employee/EmployeeDetail'
export default function List() {
    return (
        <div>
             <Grid>
                <Grid.Row>
            <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        <Route exact path="/List/" component={EmployerList}/>
                        <Route exact path="/List/Employer" component={EmployerList}/>
                        <Route  path="/List/Employer/:id" component={EmployerDetail}/>
                        <Route exact path="/List/Employee" component={EmployeeList}/>
                        <Route exact path="/List/Employee/:id" component={EmployeeDetail}/>
                        <Route exact path="/List/Job" component={JobList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
