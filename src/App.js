import logo from './logo.svg';
import './App.css';
import { GetTeams } from './Apis/standings';
import React, {useState} from 'react'

function App() {
  const [showTable, setShowTable] = useState(false);
  GetTeams();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowTable(!showTable)}>Show table</button>
        { showTable && }
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

