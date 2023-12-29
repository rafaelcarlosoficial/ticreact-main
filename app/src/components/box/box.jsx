import React, { useContext, useState } from 'react';
import './box.css';
import AppContext from '../../context/Context';

const Box = ({ index }) => {
  const { switchTurn, insertTheX, insertTheO } = useContext(AppContext);

  const [hasBeenClicked, setHasBeenClicked] = useState(false)

  const insertXorO = (e) => {
    if(!hasBeenClicked){
      setHasBeenClicked(true);
      switchTurn ? insertTheX(e) : insertTheO(e)
    }
  }

  
  
  return (
    <div className={`box`} data-index={index} onClick={(e) => insertXorO(e.target)}>
    </div>
  );
  
};

export default Box;
