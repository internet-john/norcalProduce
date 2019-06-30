import React from 'react';
import './App.css';

import ProduceGrid from './ProduceGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        NorCal Produce
      </header>
      {ProduceGrid()}
    </div>
  );
}

export default App;
