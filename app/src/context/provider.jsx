import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';


function Provider({ children }) {


  const [switchTurn, setSwitchTurn ] = useState(true)
  const ScoreBoardRef = useRef(null);

  const DataIndex = document.querySelectorAll('[data-index]');

  const checkCombinations = (Position, Classname) => {
    if(Classname === 'box x' || 'box o'){

    }
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
    AllPositions.forEach((data) => {
      const PositionIndexValue = data.dataset.index;
      const Position = parseInt(PositionIndexValue);
      console.log(Position)
      const Classname = data.className;
      // criar uma função que coloca ele na posição do array.
    });
    

  }
  
  const insertTheX = (div, index) => {
      div.className = `box x`;
      console.log(index)
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
