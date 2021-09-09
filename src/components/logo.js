import React from 'react'
import styled, { keyframes } from 'styled-components';

const LogoSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    
    animation: ${LogoSpin} infinite 20s linear;
    
    
`;

export default function Header() {
    return (
        <StyledLogo>
            <img src='../../logo192.png' className='App-logo' alt='a React logo'/>
        </StyledLogo>
    )
}