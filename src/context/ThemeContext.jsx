//On importe 'createContext' pour créer notre context et 'useState'pour les données qu'ont va partager
import React, {createContext, useState} from 'react';
//On créé le context et on l'export pour pouvoir l'utiliser juste en dessous, lié le context et le state.
export const ThemeContext = createContext();

//Provider = celui qui importe
const ThemeContextProvider = (props) =>  {

  const [theme, setTheme] = useState(true)
//on crée une fonction pour changer notre var theme de true à false, ou fals à true
  const toggleTheme = () => {
    setTheme(!theme)
  }

//On importe au enfants (provider), je vais partager aux future enfants, ici la variable 'theme'
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ ThemeContext.Provider>
  )
}

export default ThemeContextProvider;
