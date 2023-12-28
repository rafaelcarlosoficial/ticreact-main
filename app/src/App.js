import React, { useState, useContext } from 'react';
import './App.css';
import Quadrant from './components/quadrant/quadrant';
import ScoreBoard from './components/scoreboard/scoreboard';
import ResetButton from './components/resetButton/resetButton';
import Provider from './context/Provider';
import AppContext from './context/Context';
import ScoreboardContext from './context/ScoreboardContext';


function App() {
  const quadrants = new Array(9).fill(null);
  const scores = ['X', 'O'];
  const  { ScoreBoardRef } = useContext(AppContext);

  return (
 
    <Provider>
      
      <div className='score'>
        {scores.map((score, index) => (
          <ScoreBoard key={index} XorO={score} ScoreBoardRef={ScoreBoardRef}/>
        ))}
      </div>

      <div className='container'>
        {quadrants.map((quadrant, index) => (
          <Quadrant key={index}/>
        ))}
      </div>

      <div className='reset'>
        <ResetButton />
      </div>
      </Provider>

  );
}

export default App;
