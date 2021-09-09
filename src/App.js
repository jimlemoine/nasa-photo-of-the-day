import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import Header from './components/header';
import Pictures from './components/pictures';
import Footer from './components/footer';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

function App() {
  
  const [pic, setPic] = useState(null);

  useEffect(() => {
    // console.log(`${BASE_URL}${API_KEY}`)
    axios.get(`${BASE_URL}${API_KEY}`)
    .then(resp => {
      // console.log(resp.data);
      setPic(resp.data);
    })
    .catch(err => console.error(err));
  }, [])
    // console.log(pic);

  return (
    <WrapperDiv>
      <Header />
      {pic && 
      <Pictures pic={pic} />}
      <Footer />
    </WrapperDiv>
  );
}

export default App;
