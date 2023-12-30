import React, { useState, useContext } from 'react';
import './App.css';
import Quadrant from './components/quadrant/quadrant';
import ScoreBoard from './components/scoreboard/scoreboard';
import ResetButton from './components/resetButton/resetButton';
import Provider from './context/Provider';
import AppContext from './context/Context';


function App() {
  const quadrants = new Array(9).fill(null);
  const scores = ['X', 'O'];

  const WinningCombinations = [ 
    //paralelas
   [0,1,2],
   [3,4,5],
   [6,7,8],

   //diagonais
   [0,4,8],
   [2,4,6],
    //verticais
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]
  //mover para o Provider depois...
  // const DataIndex = document.querySelectorAll('[data-index]');
  // console.log(DataIndex)

  // DataIndex.forEach((data) => {
  //   const dataIndexValue = data.dataset.index;
  //   console.log('Valor do data-index', dataIndexValue);
  //   console.log('typeof do meu dataindex', typeof(dataIndexValue));
  //   console.log('dataa',data)
  //   console.log('class', data.className)
  //   // console.log()
  // })
  
  //como eu verifico sem esse dataIndeex tem class x ou o
  // eu preciso pegar os index de todos a cada clique e verificar se alguem ganhou
  // como eu pego cada item e verifico se existe alguma combinação entre eles
  //como eu selecione por exemplo o item 1,2,3 e vejo se estão na paralela
  // eu precisarei fazer uma função, mas a pergunta é como que eu faço para pegar todas as posições na hora do clique 





  //como eu vou capturar o número do data-index e verificar se é igual a algum dos arrays?

  return (
 
    <Provider>
      
      <div className='score'>
        {scores.map((score, index) => (
          <ScoreBoard key={index} XorO={score} />
        ))}
      </div>


    <div className='container'>
      {quadrants.map((quadrant, index) => {
        console.log('Índice antes de passar para o Quadrant:', index);
      return (
        <Quadrant key={index} index={index} />
      );
      })}
    </div>


      <div className='reset'>
        <ResetButton />
      </div>

      </Provider>

  );
}

export default App;
