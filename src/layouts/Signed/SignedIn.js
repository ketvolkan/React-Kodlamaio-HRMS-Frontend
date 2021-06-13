import React from 'react'
import {Dropdown, Menu,Image} from "semantic-ui-react"
import "./SignedIn.css"
export default function SignedIn(props) {
    return (
        <div className="signin">
            <Menu.Item>
                <Image avatar spaced right src = "https://sukacagi.com.tr/uploads/calisan/ej0LR4n0w8lXJyInhaHszvlK4Jxs8AeI.png"/>
                <Dropdown pointing="top left" text="Volkan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon ="info"/>
                        <Dropdown.Item text="Çıkış Yap" onClick={props.signOut} icon ="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
