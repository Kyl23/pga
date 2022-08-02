import Link from 'next/link'
import { FC } from 'react'
import { NavBarLayout, NavButton } from './style'
import { NavBarProps, NavButtonType } from './type'

const NavBar: FC<NavBarProps> = ({ navBarProps }) => {
    return (
        <NavBarLayout>
            {navBarProps.map((navBtn, index) => {
                return (<NavButton key={index} {...navBtn.styles}> <Link href={navBtn.url}><a>{navBtn.Component}</a></Link></NavButton>)
            })}
        </NavBarLayout>
    )
}

export default NavBar