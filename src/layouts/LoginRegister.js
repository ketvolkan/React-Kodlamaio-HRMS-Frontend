import React from 'react'
import {Button} from 'semantic-ui-react'
export default function LoginRegister() {
    return (
        <div>
            <Button.Group>
                    <Button positive>Login</Button>
                    <Button.Or />
                    <Button negative>Register</Button>
            </Button.Group>
        </div>
    )
}
