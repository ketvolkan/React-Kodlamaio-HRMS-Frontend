import React from 'react'
import "./Login.css"
import {Button,Icon} from 'semantic-ui-react'
export default function LoginRegister() {
    return (
        <div className="login">
            <Button.Group>
                    <Button inverted><Icon name="sign-in"/>Giris Yap</Button>
                    <Button.Or text='or' />
                    <Button inverted><Icon name="address card outline"/>Kayıt Ol </Button>
            </Button.Group>
        </div>
    )
}
