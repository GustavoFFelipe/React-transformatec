import React from 'react';
import './App.css';
import PersonClass from './components/PersonClass';
function App() {
  return (
    <div className="App">
     <PersonClass name='Gustavo' staus={true} />
    </div>
  );
}

export default App;
