import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

function Provider({ children }) {
  const [switchTurn, setSwitchTurn] = useState(true);
  const [xScored, setXscored] = useState(0);
  const [oScored, setOscored] = useState(0);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [allowClickAgain, setAllowClickAgain] = useState(false); 
  const [preventClicking, setPreventClicking] = useState(false);
  const ScoreBoardRef = useRef(null);
  let NameClass;
  const DataIndex = document.querySelectorAll('[data-index]');

  const toScore = (Scored, setScored) => {
    setScored(Scored + 1)
  }

  const WinningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];


  
  const CheckForWin = () => {
    WinningCombinations.some((combination) => {
      const DataIndex = document.querySelectorAll('[data-index]');
  
      const result = combination.reduce((accumulator, index) => {
        const NameClass = DataIndex[index].classList.value;
        return accumulator && (NameClass === 'box x' || NameClass === 'box o');
      }, true);
  
      if (result) {

        if (combination.every((index) => DataIndex[index].classList.value === 'box x')) {
            toScore(xScored, setXscored)
            setPreventClicking(true)
        }
  
        if (combination.every((index) => DataIndex[index].classList.value === 'box o')) {
            toScore(oScored, setOscored)
            setPreventClicking(true)
        }
      }
    });
  };
  

  const insertTheX = (div, index) => {
    div.className = 'box x';
    CheckForWin();
    setSwitchTurn(false);
  };

  const insertTheO = (div, index) => {
    div.className = 'box o';
    CheckForWin();
    setSwitchTurn(true);
  };

  return (
    <AppContext.Provider value={{ switchTurn, setSwitchTurn, insertTheX, ScoreBoardRef, insertTheO, xScored, oScored, hasBeenClicked, setHasBeenClicked, allowClickAgain, setAllowClickAgain, hasBeenClicked, setHasBeenClicked, preventClicking, setPreventClicking}}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
