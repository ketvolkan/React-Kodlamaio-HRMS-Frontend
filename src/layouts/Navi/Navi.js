import React,{useState} from 'react'
import SignedOut from '../Signed/SignedOut'
import {Container, Button, Menu,Icon } from 'semantic-ui-react'
import "./Navi.css"
import SignedIn from '../Signed/SignedIn'
import { useHistory } from 'react-router'
import { NavLink } from 'react-router-dom'

export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()
    function handleSignOut() {
        setIsAuthenticated(false);
        history.push("/List")
    }

    function handleSignIn() {
        setIsAuthenticated(true);
    }

    return (
        <div>
            
            <Menu inverted color="red" className="Menu" fixed="top">
           
            <Menu.Item>
                <a href="#" className="logo">KetHRMS</a>
            </Menu.Item>
                <Menu.Item > <Icon name ="edit outline"/>CV Hazırla</Menu.Item>
                <Menu.Item as={NavLink} to="/JobAdvertisment"><Icon name ="suitcase"/>İş İlanları</Menu.Item>
                <Menu.Item as={NavLink} to="/List"><Icon name ="list alternate outline"/>Listeler</Menu.Item>
                <Menu.Item as={NavLink} to="/JobAdvertisment/Add"><Icon name ="pencil alternate"/>İş İlanı Ekle</Menu.Item>
                <Menu.Item as={NavLink} to="/JobAdvertisment/Submit"><Icon name ="eraser"/>İş İlanı Onayla</Menu.Item>
                <Menu.Menu position='right'>
                <Menu.Item/>
                    {isAuthenticated? <SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn} className="LoginRegister"/>}
                    <Menu.Item>
                    <a className="SocialMedia" href ="https://facebook.com"><Button circular color='red' icon='facebook'/> </a>
                    <a className="SocialMedia" href ="https://github.com/ketvolkan"><Button circular color='red' icon='github' /></a>
                    <a className="SocialMedia" href ="https://instagram.com/ketvlkn"><Button circular color='red' icon='instagram' /></a>
                    </Menu.Item>
                </Menu.Menu>
                
            </Menu>
        </div>
    )
}
