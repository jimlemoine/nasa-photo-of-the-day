import React, { useState, useEffect } from 'react';

export default function Picture(props) {
    const { pic } = props
    return (
        <div>
            <img src='https://apod.nasa.gov/apod/image/2109/M31WideField_Ziegenbalg_960.jpg' alt='a pic from NASA' />
            <p>Title: </p>
        </div>
    )
}