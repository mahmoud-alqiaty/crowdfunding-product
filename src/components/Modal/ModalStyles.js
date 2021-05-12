import styled from 'styled-components'
import {MasterCraftSecContainer} from '../MasterCraftSec/MasterCraftStyles'

export const ModalContainer = styled(MasterCraftSecContainer)`
    margin: 20px auto;
    padding: 30px 40px;

    .about-project-title{
        text-align: left;
        margin-bottom: 40px;
        font-size: 28px;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        text-align: justify;
    }

    @media screen and (max-width: 650px){
        padding: 20px;
    }


`

export const IconCloseModal = styled.img`
width: 15px;
height: 15px;
position: absolute;
top: 30px;
right: 30px;
cursor: pointer;
`