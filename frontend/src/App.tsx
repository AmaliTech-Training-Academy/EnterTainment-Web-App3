import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
function App() {
  return (
    <div className="App bg-teal-blue">
      <TvSeries/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
