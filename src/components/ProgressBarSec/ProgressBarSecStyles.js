import styled from 'styled-components'
import { MasterCraftSecContainer } from '../MasterCraftSec/MasterCraftStyles'



export const ProgressBarSecContainer = styled(MasterCraftSecContainer)`
    padding-left: 20px;
    padding-right: 20px;
    h1{
        margin: 20px auto 5px;
    }
`

export const BorederDiv = styled.div `
    width: 2px;
    height: 80px;
    background-color: hsl(176, 50%, 47%);

    @media screen and (max-width: 650px){
        width: 100px;
        height: 1px;
     }
`
export const ProgressBarLabelsContainer = styled.div `
     display: flex;
     justify-content: space-between;
     align-items: center;
     width: 100%;

     @media screen and (max-width: 650px){
         flex-direction: column;
     }
`
     
export const ProgressBar = styled.div  `
    width: 100%;
    height: 20px;
    background-color: hsl(176, 50%, 47%);
    border-radius: 20px;
    div{
        height: 100%;
        width: ${({pledgesPercentage})=> `${pledgesPercentage}%`};
        background-color: hsl(0, 0%, 48%);
        border-radius: 20px;
    }

`