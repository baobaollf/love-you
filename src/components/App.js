import React from 'react';
<<<<<<< HEAD:src/components/App.js
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
=======
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageController from "./components/MainPages/PageController"


function App() {
  return (
    <Router>

      <div className="App">
        <PageController/>
     </div>

    </Router>
>>>>>>> b808ef0729a403d723c4fe02035cfcdafd191fb9:src/App.js
  );
}

export default App;
