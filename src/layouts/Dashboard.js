import React from 'react'
import EmployerList from '../pages/EmployerList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'
import Pages from './Pages'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column  width={12}>
                        <Pages/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
