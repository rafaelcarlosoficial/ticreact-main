import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';


function Provider({ children }) {


  const [switchTurn, setSwitchTurn ] = useState(true)
  const ScoreBoardRef = useRef(null);

  const DataIndex = document.querySelectorAll('[data-index]');

  const checkCombinations = (Combination) => {
   
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
      CheckWinner(DataIndex)

      setSwitchTurn(false)

  };

  const insertTheO = (div, index) => {
    div.className = `box o`;
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
