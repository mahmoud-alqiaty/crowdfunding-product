import styled from 'styled-components'


export const CompletedNotificationContainer = styled.div `
    display:${({finishNotification})=> finishNotification ? 'flex' : 'none'};
    width: 350px;
    height: 350px;
    padding: 25px 20px;
    background-color: #fff;
    border-radius: 10px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2000;
    h3{
        font-size: 22px;
    }
    p{
        line-height: 1.4;
        text-align: center;
        color: hsl(176, 50%, 47%);
    }

    @media screen and (max-width: 650px){
        top: 5%;
    }

`
export const CheckImg = styled.img `
    display: block;
    width: 50px;
    height:50px;
    border-radius: 50%;
`