import React from 'react';
import axios from 'axios';
import Picture from './picture';
import styled from 'styled-components';

const StyledPictures = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: ${pr => pr.theme.secondaryColor};
    color: ${pr => pr.theme.tertiaryColor}
`;

export default function Pictures(props) {
    const { pic } = props;
    // console.log(pic);
    return (
        <StyledPictures>
            <Picture pic={pic} />
        </StyledPictures>
    )
}