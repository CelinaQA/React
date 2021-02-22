'use strict';

import Intro from "./Components/First";
import Standard from "./Components/Parents-Child/Standard";
import Parent from "./Components/Props/Simple/Parent";
import PropComp from "./Components/Props_Tutorial/PropComp";
import Second from "./Components/Second";

// Component should start with capital letter (name of function)
const App = () => {
  return (
    <div className="App">
      {/* <Standard /> */}
      {/* <Parent /> */}
      <PropComp />
    </div>
  );
}

export default App;
