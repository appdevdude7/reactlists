import React from 'react';
import './App.css';
import Header from './components/Header'
import Persons from './components/Persons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Persons />
    </div>
  );
}

export default App;
