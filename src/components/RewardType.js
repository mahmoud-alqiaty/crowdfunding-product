import React, { useContext, useState } from 'react'
import Button from './Button'
import { MasterCraftSecContainer } from './MasterCraftSec'
import { activeIndexContext, ProgressBarContext, leftedContext, finishNotificationContext } from '../App'
import{ RewardTypeContainer, RewardTypeInfo, PledgeForm, }





const RewardType = ({index, rewardTitle, pledge, lefted, rewardText, rewardBtn, backprj, radio, onClick}) => {
    const {activeIndex, setActiveIndex} = useContext(activeIndexContext)
    const {backers, setBackers, pledges, setPledges} = useContext(ProgressBarContext)
    const [inputValue, setInputValue] = useState(pledge)
    const {updatedLefted, setUpdatedLefted} = useContext(leftedContext)
    const {setDisplayFinishNotification} = useContext(finishNotificationContext)




    const handleInputChange = e => setInputValue = e.terget.value;

    const handlePledgeConfirm = (e, i)=>{
        e.preventDefault(); 
        setBackers((b)=> b+1)
        setPledges((p)=> p + inputValue)

        let newLefted = [...updatedLefted]
        newLefted[i]--
        setUpdatedLefted(newLefted)

        setDisplayFinishNotification(true)
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
                    <Button buttonText= {lefted > 0 ? "Select Reward" : "Out of Stock"}  />
                }

            </RewardTypeInfo>
            
            {
                radio && backprj && activeIndex===index &&
                <PledgeForm>
                        <p>Enter your pledge</p>
                        <div className="formBox">
                            <div className="inputBox" >
                                <span>$</span>
                                <input type="text" defaultValue={pledge} value={inputValue} onChange={(e)=>handleInputChange(e)} />
                            </div>
                            <Button buttonText="Continue" onClick={(e)=>handlePledgeConfirm(e, index)}/>
                        </div>
                </PledgeForm>
            }
        </RewardTypeContainer>
    )
}

export default RewardType
