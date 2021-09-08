import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL, API_KEY } from './constants';
import Header from './components/header';
import Pictures from './components/pictures';
import Footer from './components/footer';
import "./App.css";

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
    <div className="App">
      <Header />
      {pic && 
      <Pictures pic={pic} />}
      <Footer />
    </div>
  );
}

export default App;
