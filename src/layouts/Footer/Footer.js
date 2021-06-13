import React from 'react'
import { Segment,Icon } from 'semantic-ui-react'
import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer">
             <Segment  textAlign='center' inverted color='red'>
                <Icon name = "envelope outline"/>ketvolkan1@gmail.com 	&nbsp;&nbsp;&nbsp;
                <Icon name = "phone"/>0523 222 11 23 &nbsp;&nbsp;&nbsp;
                <Icon name = "address book outline"/>Aydın/Türkiye &nbsp;&nbsp;&nbsp;
                <br></br>
                <br></br>
                 ©Copyright Made By Ket
            </Segment>
        </div>
    )
}
