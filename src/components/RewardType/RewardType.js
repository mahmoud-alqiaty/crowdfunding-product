import React, { useContext, useState } from 'react'
import Button from '../Button/Button'
import { activeIndexContext, ProgressBarContext, leftedContext, finishNotificationContext, displayModalContext } from '../../App'
import{RewardTypeContainer, RewardTypeInfo, PledgeForm} from './RewardStyles'



const RewardType = ({index, rewardTitle, pledge, lefted, rewardText, rewardBtn, backprj, radio, onClick}) => {
    const {activeIndex, setActiveIndex, handleClick} = useContext(activeIndexContext)
    const {backers, setBackers, pledges, setPledges} = useContext(ProgressBarContext)
    const [inputValue, setInputValue] = useState(pledge)
    const {updatedLefted, setUpdatedLefted} = useContext(leftedContext)
    const {finishNotification, setFinishNotification} = useContext(finishNotificationContext)
    const {displayModal, setDisplayModal, displayBackProj, setDisplayBackProj} = useContext(displayModalContext)


    const handleInputChange = (e) => {
        e.target.value >= pledge && setInputValue(e.target.value)
    };

    const handlePledgeConfirm = (e, i)=>{
        e.preventDefault(); 
        setBackers((b)=> b+1)
        setPledges(pledges + (+inputValue))

        let newLefted = [...updatedLefted]
        newLefted[i]--
        setUpdatedLefted(newLefted)

        setDisplayModal(false)
        setFinishNotification(true)
    }

    return (
        <RewardTypeContainer  activeIndex={activeIndex} index={index} disapled={updatedLefted[index]<=0}>
            <RewardTypeInfo radio={radio} activeIndex={activeIndex} index={index}>
                {
                    radio &&
                    <div className="Radio">
                        <div />
                    </div>
                }
                <h1 className="reward-title">{rewardTitle}</h1>
                {
                    rewardTitle !== "Pledge with no reward" &&
                    (
                        <>
                            <p className="pledge">Pledge {pledge} or more</p>
                            <h1 className="lefted">{lefted}<span>left</span></h1>
                        </>
                    )

                }
                <p className="reward-text">
                    {rewardText}
                </p>
                {
                    rewardBtn&&
                    <Button 
                        index={index}
                        buttonText= {lefted > 0 ? "Select Reward" : "Out of Stock"} 
                        onClick={(index)=>{setDisplayBackProj(true); setDisplayModal(true); setActiveIndex(5)}} />
                }

            </RewardTypeInfo>
            
            {
                radio && backprj && activeIndex===index &&
                <PledgeForm>
                        <p>Enter your pledge</p>
                        <div className="formBox">
                            <div className="inputBox" >
                                <span>$</span>
                                <input type="number" defaultValue={pledge} value={inputValue}  onChange={(e)=>handleInputChange(e)} />
                            </div>
                            <Button buttonText="Continue" onClick={(e)=>handlePledgeConfirm(e, index)}/>
                        </div>
                </PledgeForm>
            }
        </RewardTypeContainer>
    )
}

export default RewardType
