import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Containers/Dashboard/Dashboard';
import Landing from './Containers/Landing/Landing';
import Login from './Containers/Login/Login';
import Pasos from './components/pasos/Pasos';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </BrowserRouter>
      <Pasos/>
    </div>
  );
}

export default App;
