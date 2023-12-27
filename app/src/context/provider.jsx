import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './Context';

function Provider({ children }) {

  const [switchTurn, setSwitchTurn ] = useState(true)

  const insertTheX = (div) => {
      div.className = `box x`;
      setSwitchTurn(false)
  };

  const insertTheO = (div) => {
    div.className = `box o`
    setSwitchTurn(true)
  }

  const value = {
    switchTurn, 
    setSwitchTurn,
    insertTheX,
    insertTheO
  };


  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Provider;
