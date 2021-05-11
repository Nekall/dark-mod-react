import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';
import './sass/toolbox.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Navbar from 'components/Navbar';
import BtnTheme from 'components/BtnTheme';
import ThemeContextProvider from 'context/ThemeContext';

const App = () => {

  return (
    <div className="app">
    <ThemeContextProvider>
      <Router>
        <main>
          <Navbar />
          <BtnTheme />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </main>
        </Router>
      </ ThemeContextProvider>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
