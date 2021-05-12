import React, { useContext } from 'react'
import logoMasterCraft from '../../images/logo-mastercraft.svg'
import Button from '../Button/Button'
import bookmarkImg from '../../images/icon-bookmark.svg'
import {displayModalContext} from '../../App'
import {MasterCraftSecContainer, LogoMasterCraft, ButtonsDiv, BookmarkDiv, BookmarkImg} from './MasterCraftStyles'




const MasterCraftSec = () => {
    const {setDisplayModal, setDisplayBackProj} = useContext(displayModalContext)
    return (
        <MasterCraftSecContainer>
            <LogoMasterCraft src={logoMasterCraft} />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <ButtonsDiv>
                <Button buttonText='Back this project' onClick={()=>{setDisplayModal(true); setDisplayBackProj(true)}} />
                <BookmarkDiv>
                    <BookmarkImg src={bookmarkImg} alt="bookmarkImg" />
                    <span>Bookmark</span>
                </BookmarkDiv>

            </ButtonsDiv>
            
        </MasterCraftSecContainer>
    )
}

export default MasterCraftSec
