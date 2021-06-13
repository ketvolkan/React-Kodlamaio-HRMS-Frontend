import React from 'react'
import "./SignedOut.css"
import {Button,Icon} from 'semantic-ui-react'
export default function LoginRegister(props) {
    return (
        <div className="login">
            <Button.Group>
                    <Button inverted onClick={props.signIn} ><Icon name="sign-in"/>Giris Yap</Button>
                    <Button.Or text='or' />
                    <Button inverted><Icon name="address card outline"/>Kayıt Ol </Button>
            </Button.Group>
        </div>
    )
}
