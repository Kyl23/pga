import { FC } from 'react'
import { NavButtonType, StyleType } from '../../NavBar/type'
import { LoginButton } from './style'

const Login: FC = () => {
    return (
        <LoginButton>Login</LoginButton>
    )
}

const url = '/login'

const element: NavButtonType = { Component: <Login />, url, styles: { isRight: true } }

export default element