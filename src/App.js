import React from 'react';

import './App.scss';

const App = () => (
  <div className="container">
    <Router>
      <header className="header">
        <span className="header__logo">Header</span>

          <ul className="header__menu">
            <li className="menu__item"><Link to="/">2x2</Link></li>
            <li className="menu__item"><Link to="/three">3x2</Link></li>
            <li className="menu__item"><Link to="/one">1x1</Link></li>
            <li className="menu__item"><Link to="/side">with sidebar</Link></li>
            <li className="menu__item"><Link to="/forms">forms</Link></li>
          </ul>
        
      </header>

      <main>
        <Switch>
          <Route exact path="/"><TwoByTwo /></Route>
          <Route exact path="/three"><ThreeByTwo /></Route>
          <Route exact path="/one"><OneByOne> /></OneByOne></Route>
          <Route exact path="/side"><Side /></Route>
          <Route exact path="/forms"><Forms /></Route>
        </Switch>
      </main>

      <footer>Footer</footer>
    </Router>
  </div>
);

export default App;
