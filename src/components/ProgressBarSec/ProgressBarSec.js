import React, {useContext} from 'react'
import { ProgressBarContext } from '../../App'
import {ProgressBarSecContainer, BorederDiv, ProgressBarLabelsContainer, ProgressBar } from './ProgressBarSecStyles'



    
const ProgressBarSec = () => {
    let {backers, setBackers, pledges, setPledges} = useContext(ProgressBarContext)
    
    var stringPledges = pledges.toString();
        if(stringPledges.length > 3){
            stringPledges = stringPledges.split("")
            stringPledges.splice(-3, 0, ",");
             stringPledges = stringPledges.join("");
        }

    backers = backers.toString();
        if(backers.length > 3){
            backers = backers.split("")
            backers.splice(-3, 0, ",");
             backers = backers.join("");
        }

        var pledgesPercentage = pledges * 100 / 100000
        console.log(pledgesPercentage)


    return (
        <ProgressBarSecContainer pledgesPercentage={pledgesPercentage}>
            <ProgressBarLabelsContainer>
                <div>
                    <h1>{stringPledges}</h1>
                    <p>of $100000 backed</p>
                </div>
                <BorederDiv />
                <div>
                    <h1>{backers}</h1>
                    <p>total backers</p>
                </div>
                <BorederDiv />
                <div>
                    <h1>56</h1>
                    <p>days left</p>
                </div>
            </ProgressBarLabelsContainer>
            <ProgressBar pledgesPercentage={pledgesPercentage} >
                <div/>
            </ProgressBar>
        </ProgressBarSecContainer>
    )
}

export default ProgressBarSec
