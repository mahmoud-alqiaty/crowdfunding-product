import React, {useState} from 'react'
import logoImg from '../../images/logo.svg'
import iconHamburger from '../../images/icon-hamburger.svg'
import iconCloseMenu from '../../images/icon-close-menu.svg'
import {Nav, NavLogo, NavList, NavListItemLink, HamburgerImg} from './NavbarStyles'



const Navbar = () => {
    const [displayNavMenu, setDisplayNavMenu] = useState(false)
    const hndleNavMenuDisplay = ()=>{
        setDisplayNavMenu(!displayNavMenu)
    }
    return (
        <Nav>
            <NavLogo to="/">
                <img src={logoImg} alt="logoImg" />
            </NavLogo>
            <NavList displayNavMenu={displayNavMenu}>
                <li>
                    <NavListItemLink to="/about">About</NavListItemLink>
                </li>
                <li>
                    <NavListItemLink to="/discover">Discover</NavListItemLink>
                </li>
                <li>
                    <NavListItemLink to="/get-started">Get Started</NavListItemLink>
                </li>

            </NavList>
            <HamburgerImg src={displayNavMenu? iconCloseMenu :  iconHamburger} onClick={hndleNavMenuDisplay} />
        </Nav>
    )
}

export default Navbar
