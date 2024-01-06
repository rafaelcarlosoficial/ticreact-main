import React, { useState, useContext } from 'react';
import './App.css';
import Quadrant from './components/quadrant/quadrant';
import ScoreBoard from './components/scoreboard/scoreboard';
import ResetButton from './components/ResetButton/ResetButton';
import Provider from './context/Provider';

function App() {
  const quadrants = new Array(9).fill(null);
  const scores = ['X', 'O'];

  return (
 
    <Provider>
      
      <div className='score'>
        {scores.map((score, index) => (
          <ScoreBoard key={index} XorO={score} />
        ))}
      </div>


    <div className='container'>
      {quadrants.map((quadrant, index) => {
      return (
        <Quadrant key={index} index={index} />
      );
      })}
    </div>


      <div className='reset'>
        <ResetButton />
      </div>

      </Provider>

  );
}

export default App;
