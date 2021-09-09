import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: sans-serif;
    background-color: ${pr => pr.theme.secondaryColor};
    color: ${pr => pr.theme.tertiaryColor}
`;

export default function Picture(props) {
    const { pic } = props
    return (
        <StyledPicture>
            <img src={pic.url} alt='a pic from NASA' />
            <h2>Title: {pic.title}</h2>
            <p>{pic.explanation}</p>
        </StyledPicture>
    )
}