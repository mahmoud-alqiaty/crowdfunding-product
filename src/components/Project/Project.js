import React, {createContext, useState, useContext} from 'react'
import styled from 'styled-components'
import MasterCraftSec from '../MasterCraftSec/MasterCraftSec'
import AboutProject from '../AboutProject/AboutProject'
import ProgressBarSec from '../ProgressBarSec/ProgressBarSec'
import BackProjectModal from '../BackProjectModal/BackProjectModal'
import CompletedNotification from '../CompletedNotification/CompletedNotification'
import {finishNotificationContext, displayModalContext}from '../../App'



const ProjectContainer = styled.div `
    width: 60%;
    height: 300vh;
    margin: -100px auto;

    @media screen and (max-width: 650px){
        width: 90%;
        height: 400vh;
        margin: -200px auto;
    }
`
const BackProjectContainer = styled.div `
    width: 98vw;
    height: 350vh;
    position: absolute;
    top: 0;
    left:0;
    background-color: rgba(0, 0, 0, 0.8);
`

const Project = () => {
    const {finishNotification, setFinishNotification} = useContext(finishNotificationContext)
    const {displayBackProj, setDisplayBackProj, displayModal} = useContext(displayModalContext)

    return (
        <ProjectContainer>
            <MasterCraftSec />
            <ProgressBarSec />
            <AboutProject />
            {   displayBackProj &&
                <BackProjectContainer>
                    {displayModal && <BackProjectModal />}
                    {finishNotification &&<CompletedNotification />}
                </BackProjectContainer>
            }
        </ProjectContainer>
    )
}

export default Project
