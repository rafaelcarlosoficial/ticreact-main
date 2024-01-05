import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';


function Provider({ children }) {
  let StoreValue = [];
  let Winner = false;

  const [switchTurn, setSwitchTurn ] = useState(true)
  const ScoreBoardRef = useRef(null);

  const DataIndex = document.querySelectorAll('[data-index]');

  const CheckForWin = (ClassName) => {
      const DataIndex = document.querySelectorAll('[data-index]');
      
      WinningCombinations.some((combination) => {
      combination.map((index) => {
        const NameClass = DataIndex[index].classList.value
        console.log(NameClass)
      })
      })



  }


  const WinningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,4,8],
    [2,4,6],

    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]



  

  const CheckWinner = (AllPositions) => {

    console.log(AllPositions)

  }
  
  const insertTheX = (div, index) => {
      div.className = `box x`;
      CheckForWin('box x')
      setSwitchTurn(false)

  };

  const insertTheO = (div, index) => {
    div.className = `box o`;
    // checkForWin('box o')
    setSwitchTurn(true)
  }


  return (
    <AppContext.Provider value={{ switchTurn, setSwitchTurn, insertTheX, ScoreBoardRef, insertTheO }}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
