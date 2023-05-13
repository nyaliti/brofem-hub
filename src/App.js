/* eslint-disable max-len */
import React from 'react';
import log4js from 'log4js';
import logo from './logo.svg';
import './App.css';

const log = log4js.getLogger('App'); // Create a logger instance with the desired logger name

log4js.configure({
  appenders: {
    out: {type: 'stdout'}, // Output logs to the console
    file: {type: 'file', filename: 'app.log'}, // Output logs to a file
  },
  categories: {
    default: {appenders: ['out', 'file'], level: 'info'}, // Set the log level to 'info' for the default category
  },
});

function App() {
  log.info('App component initialized'); // Log an info message

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
