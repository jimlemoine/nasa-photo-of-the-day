import React, { useState, useEffect } from 'react';
import { BASE_URL, API_KEY } from '../constants';
import axios from 'axios';
import Picture from './picture';

export default function Pictures(props) {
    const { pic } = props;
    console.log(pic);
    return (
        <div>
            <Picture pic={pic} />
        </div>
    )
}