'use strict';

import Intro from "./Components/First";
import Hooks from "./Components/Hooks_/Hooks";
import LessText from "./Components/Hooks_/LessText";
import ProductManager from "./Components/LiftingStates/Exercise/ProductManager";
import SearchableList from "./Components/LiftingStates/SearchableList";
import Game from "./Components/LiftingStates/Tutorial/Game";
import Standard from "./Components/Parents-Child/Standard";
import PropWithDiffTypes from "./Components/Props/Intermediate/PropWithDiffTypes";
import Parent from "./Components/Props/People/Parent";
import User from "./Components/Props/PeopleSolution/User";
import Pokedex from "./Components/Props/Pokemon/Pokedex";
import PropComp from "./Components/Props_Tutorial/PropComp";
import Second from "./Components/Second";
import Counter from "./Components/States/Counter";
import DifferentStates from "./Components/States/DifferentStates";
import HomePage from "./Components/States/Example/HomePage";
import Car from "./Components/States/StatesExercise/Car";
import Form from "./Components/States/StatesExercise/Form";
import CounterUpdate from "./Components/States/UpdatingState/CounterUpdate";

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
      {/* <Pokedex /> */}
      {/* <Counter /> */}
      {/* <CounterUpdate /> */}
      {/* <DifferentStates /> */}
      {/* <Form /> */}
      {/* <Car /> */}
      {/* <HomePage /> */}
      {/* <SearchableList /> */}
      {/* <Game /> */}
      {/* <ProductManager /> */}
      {/* <Hooks /> */}
      <LessText />
    </div>
  );
}

export default App;
