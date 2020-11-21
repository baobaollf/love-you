import React from 'react';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PageController from "./MainPages/PageController"


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
