import React from 'react';

import './App.scss';

const App = () => (
  <div className="container">

      <header className="header">
        <span className="header__logo">Header</span>

          <ul className="header__menu">
            <li className="menu__item">One</li>
            <li className="menu__item">Two</li>
            <li className="menu__item">Three</li>
            <li className="menu__item">Four</li>
            <li className="menu__item">Five</li>
          </ul>
      </header>

      <div className="main">
        main
      </div>

      <footer>Footer</footer>
  </div>
);

export default App;
