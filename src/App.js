import React from 'react';
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
  );
}

export default App;
