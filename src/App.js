import './App.css';
import React, {useState} from 'react'
import Table from './components/table';

function App() {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setShowTable(!showTable)}>Show table</button>
        { showTable && <Table></Table>}
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

