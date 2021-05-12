import React, {useContext} from 'react'
import checkIcon from '../../images/icon-check.svg'
import Button from '../Button/Button'
import {CompletedNotificationContainer, CheckImg} from '../CompletedNotification/CompletedNotificationStyles'
import {displayModalContext, finishNotificationContext} from '../../App'



const CompletedNotification = () => {
    const {setDisplayBackProj} = useContext(displayModalContext)
    const {finishNotification, setFinishNotification} = useContext(finishNotificationContext)
    return (
        <CompletedNotificationContainer finishNotification={finishNotification}>
            <CheckImg src={checkIcon} alt='checkIcon' />
            <h3>Thanks for your support!</h3>
            <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
            </p>
            <Button buttonText="Got it!" onClick={()=>{setDisplayBackProj(false); setFinishNotification(false)}} />
        </CompletedNotificationContainer>
    )
}

export default CompletedNotification
