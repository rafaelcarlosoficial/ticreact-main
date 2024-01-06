import React, { useContext, useEffect, useState } from 'react';
import './box.css';
import AppContext from '../../context/Context';

const Box = ({ index }) => {
  const { switchTurn, insertTheX, insertTheO, allowClickAgain, preventClicking } = useContext(AppContext);
  
  useEffect(() => {
    setHasBeenClicked(true)
  }, [preventClicking])
  
  useEffect(() => {
    setHasBeenClicked(false)
  }, [allowClickAgain])
  
  const [hasBeenClicked, setHasBeenClicked] = useState(false)
  
  const insertXorO = (e, index) => {
    if(!hasBeenClicked){
      setHasBeenClicked(true);
      switchTurn ? insertTheX(e, index) : insertTheO(e, index)
    }
  }

  return (
    <div className={`box`} data-index={index} onClick={(e ) => insertXorO(e.target, index)}>
    </div>
  );
  
};

export default Box;
