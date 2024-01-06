import React, { useState, useEffect, useContext } from 'react';
import './resetButton.css';
import AppContext from '../../context/Context';
const ResetButton = () => {
  const { hasBeenClicked, setHasBeenClicked, setAllowClickAgain, allowClickAgain, setSwitchTurn, preventClicking, setPreventClicking } = useContext(AppContext);

  const [acquireValue, setAcquireValue] = useState(true);

  useEffect(() => {
    const cleanAllTheClassName = () => {
      const CellsUsed = document.querySelectorAll('.box.x, .box.o');
      CellsUsed.forEach(Cell => Cell.classList.remove('x', 'o'));

      setAllowClickAgain(true);
      setSwitchTurn(true)
      
    }

    if (!acquireValue) {
      cleanAllTheClassName();
      setAcquireValue(true);
    }
  }, [acquireValue]);

  const acquireTheValue = () => {
    setPreventClicking(false);
    setAcquireValue(false);
    if(allowClickAgain){
      setAllowClickAgain(false)
    }
  }
  
  return (
    <button className='resetButton' onClick={acquireTheValue}>Restart Game</button>
  );
}

export default ResetButton;
