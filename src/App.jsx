import React from 'react';
import './App.css';
import HelloReact from './components/HelloReact'
import HelloDev from './components/HelloDev'

function App() {
  return (
    <div className="App">
      <HelloReact />
      <HelloDev dev_name="Gustavo"/>
    </div>
  );
}

export default App;
