import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import codeLogo from 'assets/images/code.svg';
import Typing from 'components/Typing';
import {ThemeContext} from '../../context/ThemeContext'


const Navbar = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <nav className={theme ? 'navbar light' : 'navbar dark'} >
      <img className={theme ? 'logo-code light' : 'logo-code dark'} src={codeLogo} alt="Logo Code" />
      <Link className={theme ? 'dark' : 'light'} to="/">Home</Link>
      <Link className={theme ? 'dark' : 'light'} to="/about">About</Link>
      <Typing />
    </nav>
  )
};

export default Navbar;
