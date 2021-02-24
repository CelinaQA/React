'use strict';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Components/Props/Pokemon/Home";
import Pokedex from "./Components/Props/Pokemon/Pokedex";
import Navigation from "./Components/Props/Pokemon/Navigation";
import NotFound from './Components/Routing/404';


// Component should start with capital letter (name of function)
const App = () => {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pokedex">
            <Pokedex />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
