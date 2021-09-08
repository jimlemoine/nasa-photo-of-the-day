import React, { useState, useEffect } from 'react';

export default function Picture(props) {
    const { pic } = props
    return (
        <div>
            <img src={pic.url} alt='a pic from NASA' />
            <h2>Title: {pic.title}</h2>
            <p>{pic.explanation}</p>
        </div>
    )
}