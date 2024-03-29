import React, { useRef, useEffect, useState, useContext } from 'react';
import './scoreboard.css';
import AppContext from '../../context/Context';


const ScoreBoard = ({ XorO }) => {
  const{ switchTurn, xScored, oScored} = useContext(AppContext);
  const ScoreBoardRefContent = useRef();
  const DivScoreBoardRef = useRef();

  useEffect(() => {
 
    if(DivScoreBoardRef.current.className.includes('scoreboard border')){
      DivScoreBoardRef.current.className = 'scoreboard'
    } else {
      DivScoreBoardRef.current.className = 'scoreboard border'
    }
  }, [switchTurn])

  return (
    <div className={XorO === 'X' ? 'scoreboard border' : 'scoreboard'} ref={DivScoreBoardRef}>
      <p>
        <span ref={ScoreBoardRefContent}>{XorO}</span>- {XorO === 'X' ? xScored : oScored}
      </p>
    </div>
  );
};

export default ScoreBoard;
