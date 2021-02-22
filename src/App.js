'use strict';

import Intro from "./Components/First";
import Standard from "./Components/Parents-Child/Standard";
import PropWithDiffTypes from "./Components/Props/Intermediate/PropWithDiffTypes";
import Parent from "./Components/Props/People/Parent";
import User from "./Components/Props/PeopleSolution/User";
import Pokedex from "./Components/Props/Pokemon/Pokedex";
import PropComp from "./Components/Props_Tutorial/PropComp";
import Second from "./Components/Second";

// Component should start with capital letter (name of function)
const App = () => {
  return (
    <div className="App">
      {/* <Standard /> */}
      {/* <Parent /> */}
      {/* <PropComp /> */}
      {/* <PropWithDiffTypes /> */}
      {/* <Parent /> */}
      {/* <User /> */}
      <Pokedex />
    </div>
  );
}

export default App;
