import React from 'react'
import  './quadrant.css'
import Box from '../box/box'

const quadrant = ({ index }) => {
  return (
    <div className='cell'>
        <Box index={index}/>
    </div>
  )
}

export default quadrant;