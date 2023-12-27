import React, { useContext, useState } from 'react';
import './box.css';
import AppContext from '../../context/Context';

const Box = () => {
  const { switchTurn, setSwitchTurn, insertTheX, insertTheO } = useContext(AppContext);


  
  return (
    <div className={`box`} onClick={(e) => switchTurn ? insertTheX(e.target) : insertTheO(e.target)}>
    </div>
  );
};

export default Box;
