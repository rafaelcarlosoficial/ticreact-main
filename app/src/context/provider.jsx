import React, {useState} from 'react'
import AppContext from './app'

const Provider = ({children}) => {
    const [playX, setPlayX] = useState(true);

    const functionPlayX = (target) => {
        
        console.log(target)
        setPlayX(!playX);
      };

    const value = {
        playX,
        setPlayX,
        functionPlayX
    }

    return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
}

export default Provider