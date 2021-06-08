import React from 'react'
import LoginRegister from './LoginRegister'
import {Container, Button, Menu } from 'semantic-ui-react'

export default function Navi() {
    
    return (
        <div>
            
            <Menu inverted fixed="top">
            <Container>
                <Menu.Item
                    name='Iş Ilanlari'
                />
                <Menu.Item
                    name='Cv Hazirla'
                />

                <Menu.Menu position='right'>
                   <LoginRegister/>
                    <Menu.Item>
                    <a href ="https://facebook.com"><Button circular color='facebook' icon='facebook'/> </a>
                    <a href ="https://github.com/ketvolkan"><Button circular color='github' icon='github' /></a>
                    <a href ="https://instagram.com/ketvlkn"><Button circular color='instagram' icon='instagram' /></a>
                    </Menu.Item>
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
