import React, { useContext } from 'react'
import { MasterCraftSecContainer } from '../MasterCraftSec/MasterCraftStyles'
import closeModalImg from '../../images/icon-close-modal.svg'
import {displayModalContext} from '../../App'
import {ModalContainer, IconCloseModal} from './ModalStyles'


const Modal = ({modalTitle, paragraphOne, paragraphTwo, closeModal, children}) => {
    const {displayModal, setDisplayModal, setDisplayBackProj} = useContext(displayModalContext)
    return (
        <ModalContainer>
            {
                closeModal && <IconCloseModal src={closeModalImg} onClick={()=>{setDisplayModal(false); setDisplayBackProj(false)}}/>
            }
            <h1 className="about-project-title">{modalTitle}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>

            {children}

        </ModalContainer>
    )
}

export default Modal
