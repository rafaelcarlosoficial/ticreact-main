import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';


function Provider({ children }) {

  const [switchTurn, setSwitchTurn ] = useState(true)
  const ScoreBoardRef = useRef(null);
  console.log(ScoreBoardRef)

  const DataIndex = document.querySelectorAll('[data-index]');
  console.log(DataIndex)


  const checkCombinations = (Position, Classname) => {
    if(Classname === 'box x' || 'box o'){

    }
  }

  const WinningCombinations = [ 
    //paralelas
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,4,8],
    [2,4,6],

    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]

  const checkPositions = WinningCombinations.some(subarray => {
    return subarray.every(element => typeof element === 'number')
  })

  if(checkPositions){
    
  }

  const CheckWinner = (AllPositions) => {
    AllPositions.forEach((data) => {
      const PositionIndexValue = data.dataset.index;
      const Position = parseInt(PositionIndexValue);
      const Classname = data.className;
    });
    
    // pegar as class e as posições de todos.
    //como eu irei comparar todas as posições e verificar se em alguma delas existe a combinação do array 
   

  }
  
  const insertTheX = (div) => {
      div.className = `box x`;
      //função(div)
      setSwitchTurn(false)
      CheckWinner(DataIndex)
      // console.log(ref)
      //ScoreBoardRef como eu acesso aq acessar aqui
  };

  const insertTheO = (div) => {
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
