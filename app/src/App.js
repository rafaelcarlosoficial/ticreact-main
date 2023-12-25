import React from 'react';
import './App.css';
import Quadrant from './components/quadrant/quadrant';
import Scoreboard from './components/scoreboard/scoreboard';
import ResetButton from './components/resetButton/resetButton';
import Provider from './context/provider';
function App() {
  const quadrants = new Array(9).fill(null);
  const scores = new Array(2).fill(null)

  return (
  <Provider>
    <div className='score'>
      {
        scores.map((score, index) => (
          <Scoreboard key={score}/>
        ))
      }
  
    </div>
    
    <div className="container">

      {quadrants.map((quadrant, index) => (
        <Quadrant key={index}/>
      ))}
    
    </div>
    <div className='reset'>
      <ResetButton/>
    </div>
    
  </Provider>
  );
}

export default App;
