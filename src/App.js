// jshint esversion: 6
import React from "react";
import { Switch, Route } from "react-router-dom";
import './App.css';


const HomePage = props => {
  return (
    <div>
      <button onClick={() => props.history.push('/topics')}>Topics </button>
      <h1>HOME PAGE </h1>
    </div>
  )
}

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
