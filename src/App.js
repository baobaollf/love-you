import React from 'react';
import logo from './logo.svg';
import './App.css';
import Img from "../src/Image/IMG_0046.jpg"

function App() {
  return (
    <div className="App">
      <h1>
        Love you Sitong, from the moon and back
      </h1>
	  <h5>
	  	Baobao
	  </h5>
        <img className="image" src={Img}/>
    </div>
  );
}

export default App;
