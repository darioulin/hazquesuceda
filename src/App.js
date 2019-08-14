import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Containers/Dashboard/Dashboard';
import Landing from './Containers/Landing/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
