import styled, {css} from 'styled-components'
import { MasterCraftSecContainer } from '../MasterCraftSec/MasterCraftStyles'


export const RewardTypeContainer = styled.div `
    border: ${({radio, activeIndex, index})=> activeIndex===index ? '2px solid hsl(176, 72%, 28%)' : '1px solid hsl(176, 50%, 47%)'} ;
    border-radius: 10px;
    margin-bottom: 20px;
    opacity: ${({disapled})=> disapled? "0.4" : "1"}
`

export const RewardTypeInfo = styled(MasterCraftSecContainer) `
    display: grid;
    grid-template-columns: 40px 240px repeat(2, 1fr);
    column-gap: 0px;
    justify-content: space-between;
    align-items: start;
    padding: 10px 20px;
    cursor: pointer;
    

    h1{
        font-size: 20px;
        margin: 0;
        text-align: left;
    }

    p{
        font-size: 14px;
        margin: 0;
    }

    .reward-title{
        grid-area: 1 / 1 / 2 /3
    }


    .pledge{
        grid-area: 1 / 4 / 2 / 5;
        margin-bottom: 0;
        justify-self: end;
    }


    .reward-text{
        grid-area: 2 / 1 / 3 / 5;
        margin: 15px 0 0px;
    }

    .lefted{
        grid-area: 3 / 1 / 4 / 2;
        display:flex;
        align-items: center;
        font-size: 32px;
    }

    .lefted span{
       color: hsl(176, 50%, 47%);
       font-size: 16px;
       margin-left: 5px;
    }

    Button{
        grid-area: 3 / 4 / 4 / 5;
        color: #fff;
    }


    ${({radio})=> radio && css`

        .Radio{
            grid-area: 1 / 1 / 4 / 2;
            align-self: flex-start;
            width: 20px;
            height: 20px;
            border: 1px solid hsl(176, 50%, 47%);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        .Radio div{
            width: 10px;
            height: 10px;
            background-color: ${({activeIndex, index})=> activeIndex===index ? 'hsl(176, 72%, 28%)' : '#fff'} ;
            border-radius: 50%;
        }
        .reward-title{
            grid-area: 1 / 2 / 2 /3;
            font-size: 20px;
        }
        .pledge{
            grid-area: 1 / 3 / 2 / 4;
            justify-self: start;
            margin-left: 10px;
        }

        .reward-text{
            grid-area: 2 / 2 / 3 / 5;
        }

        .lefted{
            grid-area: 1 / 4 / 2 / 5;
            justify-self: end;
        }
    `}


    @media screen and (max-width: 650px){
        grid-template-columns: 1fr;
        .reward-title{
            grid-area: 1 / 1 / 2 /2
        }


        .pledge{
            grid-area: 2 / 1 / 3 / 2;
            justify-self: start;
            font-size: 16px;
            margin-top: 7px;
        }


        .reward-text{
            grid-area: 3 / 1 / 4 / 2;
            margin: 15px 0 0px;
        }

        .lefted{
            grid-area: 4 / 1 / 5 / 2;
            display:flex;
            align-items: center;
            font-size: 32px;
            margin: 20px 0 25px;
        }
        Button{
            grid-area: 5 / 1 / 6 / 2;
            width: 180px;
        }

            
        ${({radio})=> radio && css`

            grid-template-columns: 40px 1fr;
            .Radio{
                grid-area: 1 / 1 / 3 / 2;
            }
            
            .reward-title{
                grid-area: 1 / 2 / 2 /3;
            }

            .pledge{
                grid-area: 2 / 2 / 3 / 3;
                justify-self: start;
                margin-left: 0px;
            }

            .reward-text{
                grid-area: 3 / 1 / 4 / 3;
            }

            .lefted{
                grid-area: 4 / 1 / 5 / 2;
                justify-self: start;
            }
    `}
    }

`

export const PledgeForm = styled.form `
    border-top: 1px solid hsl(176, 50%, 47%);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        font-weight: 500;
        font-size: 18px;
    }

    .formBox{
        display: flex;
    }

    .inputBox{
        border: 2px solid hsl(176, 50%, 47%);
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        margin-right: 15px;
        border-radius: 20px;
    }

    span{
        font-weight: 700;
        font-size: 16px;
        color: hsl(176, 50%, 47%);
    }

    input{
        outline: none;
        border: none;
        width: 50px;
        font-size: 18px;
        font-weight: 700;
        padding-left: 5px;
    }

    @media screen and (max-width: 650px){
        flex-direction: column;
    }
`
