import "./App.css";
import React from "react";
import LeftContainer from "./Component/LeftContainer";
import RightContainer from "./Component/RightContainer";

function App() {
  return (
    <div className="MainContainer">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default App;
