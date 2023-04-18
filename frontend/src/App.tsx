import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Movies from './pages/Movies';
import { ViewProvider } from "./components/ViewContext";
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import useSearch from './hooks/useSearch';


function App() {
  const { search,word } = useSearch();
  return (
    <div className="App">
      <div className="App-container">
        <div className="wrapper">
        <SideBar />
        <ViewProvider search={search} word={word} >
          <SearchBar />
        </ViewProvider>
        </div>
            
      </div>
    </div>
  );
}

export default App;
