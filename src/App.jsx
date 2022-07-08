import React from 'react';
import './App.css';
import PersonClass from './components/PersonClass';
import StateCar from './components/StateCar';
import StateClock from './components/StateClcok';
import StateColor from './components/StateColor';
import StatePerson from './components/StatePerson';

function App() {
  return (
    <div className="App">
     < StateColor color='azul' />
     < StateCar />

     <StatePerson nome='Hugo' profissao='Piloto' idade='30'/>
     <StateClock />
    </div>
  );
}

export default App;
