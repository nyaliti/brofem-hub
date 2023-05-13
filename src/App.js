/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import React from 'react'; // Added import statement for React
import logo from './logo.svg';
import './App.css';

/**
 * Main application component.
 * @return {JSX.Element} The rendered App component.
 */
function App() {
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
