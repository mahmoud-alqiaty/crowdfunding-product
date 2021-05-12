import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button `
    height: 40px;
    padding: 0px 25px;
    border-radius: 20px;
    background-color: hsl(176, 72%, 28%);
    cursor: pointer;
    border: none;
    outline: none;
    color: #fff;
`

const Button = ({buttonText, onClick}) => {
    return (
        <StyledButton onClick={onClick} >
            {buttonText}
        </StyledButton>
    )
}

export default Button
