import React from 'react'
import styled from 'styled-components'
import desktopHeroImg from '../../images/image-hero-desktop.jpg'
// import mobileHeroImg from '../images/image-hero-mobile.jpg'

const HeroContainer = styled.div `
    width: 100%;
    height: 400px;
    background-image: url(${desktopHeroImg})
`
const Hero = () => {
    return (
        <HeroContainer>
        </HeroContainer>
    )
}

export default Hero
