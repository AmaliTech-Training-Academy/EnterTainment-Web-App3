import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
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

        </div>
      </header>
    </div>
  );
}

export default App;
