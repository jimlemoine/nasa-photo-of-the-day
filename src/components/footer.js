import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: sans-serif;
    width: 100%;

    background-color: ${pr => pr.theme.primaryColor};
    color: ${pr => pr.theme.white};
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>Thank you for visiting Jim's NASA Pictures page!</p>
            <p>Contact us at 555-5555</p>
        </StyledFooter>
    )
}