import React, { useContext, useRef } from 'react'
import styled from 'styled-components'
import Modal from '../Modal/Modal'
import RewardType from '../RewardType/RewardType'
import {rewards} from '../RewardType/RewardTypeData'
import { activeIndexContext, leftedContext } from '../../App'
import {displayModalContext} from '../../App'


const BackProjectContainer = styled.div `
    width: 60%;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);

    @media screen and (max-width: 650px){
        width: 100%;
    }
`

const BackProjectModal = () => {
   const {handleClick} = useContext(activeIndexContext)
   const {updatedLefted} = useContext(leftedContext)
   const {displayModal, setDisplayModal} = useContext(displayModalContext)
   
    return ( 
        <BackProjectContainer>
            <Modal 
                closeModal
                modalTitle='Back this project'
                paragraphOne='Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?'
            >
            

                {
                    rewards.map((reward, index)=>
                        <div key={index} onClick={()=>handleClick(index)} >
                            <RewardType
                                lefted={updatedLefted[index]}
                                index={index}
                                radio
                                rewardTitle={reward.rewardTitle} 
                                pledge={reward.pledge} 
                                rewardText={reward.rewardText}
                                backprj = {index > 0  && "backprj"}
                            />
                        </div>
                        
                    )
                }
                
            </Modal>
        </BackProjectContainer>
    )
}

export default BackProjectModal
