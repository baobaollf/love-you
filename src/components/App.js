import React from 'react';
import '../styles/App.css';
import Img from "../Image/IMG_0046.jpg"

function App() {
  return (
    <div className="App">
      <h1>
        Love you Sitong, from the moon and back
      </h1>
	  <h5>
	  	Baobao
	  </h5>
        <h6>
            06/10/2020
        </h6>
        <img className="image" src={Img} alt={Img}/>
    </div>
  );
}

export default App;
