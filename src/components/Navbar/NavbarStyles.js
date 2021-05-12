import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav `
    width:100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    padding: 0 80px;

    @media screen and (max-width: 650px){
        padding: 0 20px;
    }
`
export const NavLogo = styled(NavLink) `

`
export const NavList = styled.ul `
    list-style-type: none;
    display: grid;
    grid-auto-flow: column;
    column-gap: 20px;

    @media screen and (max-width: 650px){
        display: ${({displayNavMenu})=> displayNavMenu ? "grid" : "none"};
        width: 90%;
        grid-auto-flow: row;
        grid-template-columns: 100%;
        column-gap: 0px;
        row-gap: 5px;
        position: absolute;
        left: 50%;
        top: 70px;
        transform: translateX(-50%);
        border-radius: 10px;
        background-color: #fff;
        padding: 10px 0px;
        justify-content: center;
        box-shadow: 0 2px 5px hsl(176, 50%, 47%);

        li{
            width: 100%;
            padding: 20px 30px;
            border-bottom: 1px solid hsl(176, 50%, 47%);
        }
    }
`

export const NavListItemLink = styled(NavLink) `
    text-decoration: none; 
    color: #fff;
    font-family: 'Commissioner', sans-serif;
    font-weight: 700;
    font-size: 18px;

    @media screen and (max-width: 650px){
        color: #000;
        font-size: 24px;
    }

`

export const HamburgerImg = styled.img`
    display: none;

    @media screen and (max-width: 650px){
        display: block;
        cursor: pointer;
    }

`