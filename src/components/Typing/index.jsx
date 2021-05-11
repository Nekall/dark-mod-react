import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext'

const Typing = () => {

  const {theme} = useContext(ThemeContext)

  return(
  <div className="wrapper">
    <div className={theme ? 'typing-demo dark' : 'typing-demo light'} >
      Bienvenue sur mon portefolio* !
    </div>
  </div>
  )
};

export default Typing;
