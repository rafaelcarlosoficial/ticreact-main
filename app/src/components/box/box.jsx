import React, { useContext } from 'react';
import './box.css';
import AppContext from '../../context/app';

const Box = () => {
  const { playX, functionPlayX } = useContext(AppContext);

  const handleClick = (event) => {
    // Obtém a referência para a div clicada
    const clickedDiv = event.target;

    // Adiciona a classe com base na lógica desejada
    clickedDiv.classList.toggle('x', !playX);
    clickedDiv.classList.toggle('o', playX);

    // Chama a função para alternar entre X e O
    functionPlayX();
  };

  return (
    <div className={`box ${!playX ? 'x' : 'o'}`} onClick={handleClick}>
      {/* Conteúdo da caixa */}
    </div>
  );
};

export default Box;
