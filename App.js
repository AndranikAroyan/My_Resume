import React from 'react';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';

function App() {
  return (
    <div className="app">
      <div className="left-section">
        <Profile />
      </div>
      <div className="right-section">
        <About />
      </div>
    </div>
  );
}

export default App;