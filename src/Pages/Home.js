import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero/Hero'
import Project from '../components/Project/Project'

const HomeContainer = styled.div `
    background-color: hsl(0, 0%, 48%);
    font-family: 'Commissioner', sans-serif;
`

const Home = () => {
    return (
        <HomeContainer>
            <Hero />
            <Project />
        </HomeContainer>
    )
}

export default Home
