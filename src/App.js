import React from "react";
import "./App.css";

import { TopBar } from "./components/TopBar";
import { Items } from "./components/Items";
import { InputForm } from "./components/InputForm";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Items />
      <InputForm />
    </div>
  );
}

export default App;
