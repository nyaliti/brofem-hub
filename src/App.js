import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Home />
        {/* Other components */}
      </div>
    </BrowserRouter>
  );
};

export default App;
