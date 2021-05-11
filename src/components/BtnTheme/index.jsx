import React, { useContext } from 'react';
import {ThemeContext} from '../../context/ThemeContext'
import sunLogo from 'assets/images/sun.svg';
import moonLogo from 'assets/images/moon.svg';

export default function BtnTheme(){

  const {toggleTheme, theme} = useContext
  (ThemeContext)

  return(
      <div>
        <button className={theme ? 'btn-toggle light' : 'btn-toggle dark'} onClick={toggleTheme} >  <img className={theme ? 'btn-logo light' : 'btn-logo dark'} src={theme ? moonLogo : sunLogo } alt="icon light dark mode"/> </button>
      </div>
  )
}
