import styled from 'styled-components'

export const MasterCraftSecContainer = styled.div `
    background-color: #fff;
    padding: 50px 40px;
    position: relative;
    border-radius: 10px;
    margin-bottom: 25px;

    h1{
        font-family: 'Commissioner', sans-serif;
        font-weight: 700;
        font-size: 32px;
        margin: 20px auto 15px;
        text-align: center;

    }

    p{
        font-family: 'Commissioner', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: hsl(176, 50%, 47%);
        text-align: center;
        margin-bottom: 30px;
        line-height: 1.6;
    }
`
export const LogoMasterCraft = styled.img `
   display: block;
   width: 40px;
   height: 40px;
   border-radius: 50%;
   position: absolute;
   top: -20px;
   left: 50%;
   transform: translateX(-50%);
`

export const ButtonsDiv = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BookmarkDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: hsl(176, 50%, 47%);
    padding: 0 25px 0 0;
    border-radius: 20px;
    
    span{
        display: inline-block;
        color: #000;
        font-weight: 500;
        padding-left: 15px;
    }

    @media screen and (max-width: 650px){
        padding: 0;
        border-radius: 50%;
        span{
            display: none;
        }
    }

`
export const BookmarkImg = styled.img `
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    @media screen and (max-width: 650px){
        width: 60px;
        height: 60px;
    }

`