import React from 'react'
import styled from 'styled-components';
import Logo from './logo';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    width: 100%;

    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.white};
`;

export default function Header() {
    return (
        <StyledHeader>
            <Logo />
            <h1>Welcome to Jim's NASA Pictures page!</h1>
        </StyledHeader>
    )
}