import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import sideBarElement from './BarElement'
import { WindowLayout } from './style'

const NavBar = dynamic(() => import('./NavBar'))

const GlobalLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <WindowLayout>
            <NavBar navBarProps={sideBarElement} />
            {children}
        </WindowLayout>
    )
}

export default GlobalLayout