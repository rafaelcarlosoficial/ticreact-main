import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';


function Provider({ children }) {

  const [switchTurn, setSwitchTurn ] = useState(true)
  const ScoreBoardRef = useRef(null);
  console.log(ScoreBoardRef)


  const insertTheX = (div) => {
      div.className = `box x`;
      setSwitchTurn(false)
      // console.log(ref)
      //ScoreBoardRef como eu acesso aq acessar aqui
  };

  const insertTheO = (div) => {
    div.className = `box o`;
    setSwitchTurn(true)
  }

  // const value = {
  //   switchTurn, 
  //   setSwitchTurn,
  //   insertTheX,
  //   ScoreBoardRef,
  //   insertTheO,
    
  // };


  return (
    // <AppContext.Provider value={value}>
    //   {children}
    // </AppContext.Provider>

    <AppContext.Provider value={{ switchTurn, setSwitchTurn, insertTheX, ScoreBoardRef, insertTheO }}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
