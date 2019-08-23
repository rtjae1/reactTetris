import React from "react";
import Tetris from "./components/Tetris";
import { appendFile } from "fs";

const App = () => (
  <div className="App">
    <Tetris />
  </div>
);

export default App;
