import githubLogo from 'assets/images/github.svg';
import notacineGif from 'assets/images/notacine.gif';
import messagerieGif from 'assets/images/messagerie-ajax.gif';
import React, {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext'

const Home = () => {

  const {theme} = useContext(ThemeContext)

  return(
  <div className={theme ? 'home-page light' : 'home-page dark'}>
    <p className={theme ? 'dark center title' : 'light center title'}>Bonjour, je m'appelle Nekå & Bienvenue sur mon portefolio* !</p>
    <div className="center"><a className="center" href="https://github.com/Nekall" rel="noreferrer" target="_blank"><img className={theme ? 'logo-github' : 'logo-github dark'} src={githubLogo} alt="Logo Github" /></a></div>
    <p className={theme ? 'dark center' : 'light center'}>Depuis quelques mois, j'apprends le développement web grâce à The Hacking Projet. J'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>

    <div className="projects">
      <p className={theme ? 'dark' : 'light'}>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
      <div className={theme ? 'project1 dark' : 'project1 light'}>
        <p className={theme ? 'dark text-projects' : 'light text-projects'}>Voici le projet 'Notacine' realisé à la fin des 3 mois de formation The Hacking Project</p>
        <div><img src={notacineGif} alt="preview notacine" /></div>
      </div>
      <div className={theme ? 'project2 dark' : 'project2 light'}>
        <div><img src={messagerieGif} alt="preview messagerie" /></div>
        <p className={theme ? 'dark text-projects' : 'light text-projects'}>Voici le projet 'Messagerie' realisé dans le but d'apprendre l'Ajax</p>
      </div>
    </div>
    <div className={theme ? 'contact-me dark' : 'contact-me light'}>
      <p className={theme ? 'dark' : 'light'}>Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.</p>
      <textarea rows="10" cols="100" placeholder="Laissez votre message avec vos coordonnées, je vous recontacterais rapidement." />
    </div>
  </div>
  )
};

export default Home;
