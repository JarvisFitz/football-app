import logo from './logo.svg';
import './App.css';
//import React, { useState, useEffect } from 'react';
import React from 'react';
import { GetTeams } from './Apis/standings';


function App() {
  GetTeams();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <table>
          <thead id="th"></thead>
          <tbody id="tb"></tbody>
        </table>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn about football!
        </a>
      </header>
    </div>
  );
}

export default App;

