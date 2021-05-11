import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext'

const About = () => {

  const {theme} = useContext(ThemeContext)

  return(
  <div className={theme ? 'about-page light' : 'about-page dark'}>
    <p className={theme ? 'dark center title' : 'light center title'}>*Ceci est un exercice react dans le but d'apprendre à mettre en place un darkmode, et d'utiliser les 'Context'.</p>
    <p className={theme ? 'dark center' : 'light center'}> Ceci n'est donc pas mon réel portefolio, bien à vous. </p>
  </div>)
};
export default About;
