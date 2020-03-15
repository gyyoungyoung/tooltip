import React from 'react';
import logo from './logo.svg';
import './App.css';

import Tooltip from './components/Tooltip/Tooltip'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Tooltip
          desc="这是tooltip的内容"
        >
          <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            鼠标放上来显示Tooltip
        </a>
        </Tooltip>
      </header>
    </div>
  );
}

export default App;
