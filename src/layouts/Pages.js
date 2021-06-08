import React from 'react'
import EmployerList from '../pages/EmployerList'
import JobList from '../pages/JobList'
import EmployeeList from '../pages/EmployeeList'
import { Grid,GridColumn } from 'semantic-ui-react'

export default function Pages() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={14}>
                        <JobList/>
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
                <Grid.Row>
                    <GridColumn size={14}>
                        <EmployeeList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
