import React, { useRef } from 'react'
import './scoreboard.css'


const ScoreBoard = ({ XorO, ScoreBoardRef }) => {
    
  return (
    <div className='scoreboard' ref={ScoreBoardRef}><p><span>{XorO}</span>- 1</p></div>
  )
}
                      

export default ScoreBoard;                   