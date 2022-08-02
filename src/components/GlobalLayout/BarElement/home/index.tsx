
import { FC } from 'react'
import { NavButtonType } from '../../NavBar/type'
import { LogoLayout } from './style'

const Home: FC = () => {
    return (
        <LogoLayout>HomePage</LogoLayout>
    )
}

const url = '/'

const element: NavButtonType = {
    Component: <Home />,
    url
}
export default element