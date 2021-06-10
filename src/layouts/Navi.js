import React,{useState} from 'react'
import SignedOut from './SignedOut'
import {Container, Button, Menu,Icon } from 'semantic-ui-react'
import "./Navi.css"
import SignedIn from './SignedIn'
import { useHistory } from 'react-router'

export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false);
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true);
    }

    return (
        <div>
            
            <Menu inverted color="red" className="Menu" fixed="top">
            <Container>
            <Menu.Item>
                <a href="#" className="logo">KetHRMS</a>
            </Menu.Item>
                <Menu.Item> <Icon name ="edit outline"/>CV Hazırla</Menu.Item>
                <Menu.Item><Icon name ="suitcase"/>İş İlanları</Menu.Item>

                <Menu.Menu position='right'>
                <Menu.Item/>
                    {isAuthenticated? <SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn} className="LoginRegister"/>}
                    <Menu.Item>
                    <a className="SocialMedia" href ="https://facebook.com"><Button circular color='red' icon='facebook'/> </a>
                    <a className="SocialMedia" href ="https://github.com/ketvolkan"><Button circular color='red' icon='github' /></a>
                    <a className="SocialMedia" href ="https://instagram.com/ketvlkn"><Button circular color='red' icon='instagram' /></a>
                    </Menu.Item>
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
